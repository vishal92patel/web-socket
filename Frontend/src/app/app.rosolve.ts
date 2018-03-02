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
            if(res['id'] && res['connected']){
               this.gpioService.setSocketId(res['id']);
               this.router.navigate(["home/signin"]);
            }else if(res['id'] && res['disconnected']){
               this.gpioService.setSocketId(null);
               this.router.navigate(["disconnected"]);
            }else{
               this.gpioService.setSocketId(null);
               this.router.navigate(["disconnected"]);
            }
            clearTimeout(timeout);
            obs.complete();
         });
         timeout = setTimeout(() => {
            this.router.navigate(["socket-error"]);
            obs.complete();
         },5000);
      });
   }
}