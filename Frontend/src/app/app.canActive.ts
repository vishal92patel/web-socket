import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { GpioService } from './services/gpio/gpio.service';

@Injectable()
export class CanActiveHome implements CanActivate{
   constructor(
      private router: Router,
      private gpioService: GpioService
   ){}
   canActivate() {
      if(this.gpioService.getSocketId()){
         return true;
      }else{
         this.router.navigate(['/connecting']);
         return false;
      }
   }
}
@Injectable()
export class CanActiveSignin implements CanActivate{
   constructor(
      private router: Router,
      private gpioService: GpioService
   ){}
   canActivate() {
      if(!localStorage.getItem('socketId')){
         return true;
      }else{
         this.router.navigate(['/home/auto-signing']);
         return false;
      }
   }
}
@Injectable()
export class CanActiveAutoSigning implements CanActivate{
   constructor(
      private router: Router,
      private gpioService: GpioService
   ){}
   canActivate() {
      if(localStorage.getItem('socketId')){
         return true;
      }else{
         this.router.navigate(['/home/signin']);
         return false;
      }
   }
}