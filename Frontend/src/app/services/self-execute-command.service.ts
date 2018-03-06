import { Injectable } from '@angular/core';
import { Commands } from './commands';

@Injectable()
export class SelfExecuteCommandService {
   constructor(){}

   autoTrigger(cmd: Commands){
      switch(cmd){
         case Commands.GET_USERS_PANEL : {
            return {
               command: Commands.GET_USERS_PANEL
            }
         }
      }
   }
}
