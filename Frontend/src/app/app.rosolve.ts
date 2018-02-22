import { Routes, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { WebSocketService } from './services/web-socket/web-socket.service';
import { GpioService } from './services/gpio/gpio.service';
@Injectable()
export class WebSocketResolve implements Resolve<any>{
   constructor(
      private webSocketService: WebSocketService,
      private router: Router,
      private gpioService: GpioService
   ){}

   resolve(){
      let timeout;
      return new Observable((obs) => {
         this.webSocketService.connect().subscribe( (res) => {
            console.log(res);
            if(res['id'] && res['connected']){
               this.gpioService.setSocketId(res['id']);
               this.router.navigate(["home/signin"]);
            }else if(res['id'] && res['disconnected']){
               this.router.navigate(["404"]);
            }else{
               this.router.navigate(["404"]);
            }
            clearTimeout(timeout);
            obs.complete();
         });
         timeout = setTimeout(() => {
            this.router.navigate(["404"]);
            obs.complete();
         },5000);
      });
   }
}