import { Injectable } from '@angular/core';
import { Commands } from '../commands';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';

@Injectable()
export class WebSocketService {
   private url = 'http://localhost:3000';
   private socket;
   private handler = new Subject<any>();
   constructor() { }

   connect() {
      return new Observable((obs) => {
         this.socket = io.connect(this.url);
         this.registerChannel();
         this.socket.on('connect', () => {
            console.log('connect');
            if (this.socket.id) {
               obs.next(this.socket);
            }
         });
         this.socket.on('disconnect', () => {
            console.log('disconnect');
            if (this.socket) {
               obs.next(this.socket);
            }
         });
      });
   }

   registerChannel() {
      this.received();
   }

   send(command: Commands, data: Object) {
      Object.assign(data, { 'command': command });
      this.socket.emit(command, data);
   }

   received() {
      this.socket.on('received', (res) => {
         console.log('-----*-----*-----*-----*-----*-----*-----*-----*-----');
         console.log(res);
         let data = {};
         try {
            data = Object.assign(data, JSON.parse(res));
         } catch (E) {
            console.log(E);
         }
         console.log('-----*-----*-----*-----*-----*-----*-----*-----*-----');
         this.broadcast(data);
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
