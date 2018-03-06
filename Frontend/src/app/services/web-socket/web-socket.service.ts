import { Injectable } from '@angular/core';
import { Commands } from '../commands';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
import { SelfExecuteCommandService } from '../self-execute-command.service';

@Injectable()
export class WebSocketService {
   private url = 'localhost:3000';
   private socket;
   private handler = new Subject<any>();
   constructor(
      private selfExecuteCommandService: SelfExecuteCommandService
   ) { }

   connect() {
      return new Observable((obs) => {
         this.socket = io.connect(this.url);
         this.registerChannel();
         this.socket.on('connect', () => {
            if (this.socket.id) {
               obs.next(this.socket);
            }
         });
         this.socket.on('disconnect', () => {
            if (this.socket) {
               obs.next(this.socket);
            }
         });
      });
   }

   registerChannel() {
      this.received();
   }

   send(command: Commands, data: Object, commandType?: Commands) {
      Object.assign(data, { 'command': command });
      if (commandType) {
         Object.assign(data, { 'commandType': commandType });
      }
      this.socket.emit(command, data);
   }

   received() {
      this.socket.on('received', (res) => {
         console.log('-----*-----*-----*-----*-----*-----*-----*-----*-----');
         console.log(res);
         let data = {};
         if(typeof(res) == 'object'){
            data = res;
         }
         // try {
         //    data = Object.assign(data, JSON.parse(res));
         // } catch (E) {
         //    console.log(E);
         // }
         console.log('-----*-----*-----*-----*-----*-----*-----*-----*-----');
         if (data['commandType']) {
            if (data['commandType'] == Commands.SELF_EXECUTE) { // Not in use but use in chat
               let newData;
               newData = this.selfExecuteCommandService.autoTrigger(<Commands>data['commandType']);
               console.log(newData);
               if (<Commands>newData.command) {
                  this.socket.emit(newData);
               }
            } else {
               this.broadcast(data);
            }
         }else{
            this.broadcast(data);
         }
      });
   }

   broadcast(data) {
      this.handler.next(data);
   }

   subscribe(command: Commands, callback): Subscription {
      return this.handler
         .filter(handler => handler.command === command)
         .subscribe(callback);
   }
}
