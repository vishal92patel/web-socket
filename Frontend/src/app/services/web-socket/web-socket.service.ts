import { Injectable } from '@angular/core';
import { Commands } from '../commands';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';

type MessageCallback = (data: any) => void;
// enum cmdIntF {
//    "CREATE_USER" = "CREATE_USER",
//    "GET_USER" = "GET_USER"
// }

@Injectable()
export class WebSocketService {
   private url = 'http://localhost:3000';
   private socket;
   private handler = new Subject<any>();
   constructor() {
      this.socket = io.connect(this.url);
      this.received();
   }

   send(command: Commands, data: Object) {
      Object.assign(data, { 'command': command });
      this.socket.emit(command, data);
   }
   received() {
      this.socket.on('received', (res) => {
         console.log('-----*-----*-----*-----*-----*-----*-----*-----*-----');
         console.log('Received WS');
         console.log(res);
         let data = {};
         if (res && res != null) {
            data = Object.assign(data, JSON.parse(res));
         } else {
            data = {};
         }
         console.log(data);
         console.log('-----*-----*-----*-----*-----*-----*-----*-----*-----');
         this.broadcast(data);
      });
   }
   broadcast(data) {
      this.handler.next(data);
   }
   subscribe(command: string, callback: MessageCallback): Subscription {
      return this.handler
         .filter(handler => handler.command === command)
         .subscribe(callback);
   }
}
