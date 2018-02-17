import { Injectable } from '@angular/core';
import { Commands } from '../commands';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';

type MessageCallback = (data: any) => void;

@Injectable()
export class WebSocketService {
  private url = 'http://localhost:3000';
  private socket;
  private handler = new   Subject<any>();
  constructor() {
    this.socket = io.connect(this.url);
    this.received();
  }

  send(cmd, data){
    data["command"] = cmd;
    this.socket.emit(cmd, data);
  }
  received(){
    this.socket.on('received', (data) => {
      console.log('---------------------');
      console.log('Received WSservices');
      console.log(data);
      console.log('---------------------');
      this.broadcast(data);
    });
  }
  broadcast(data){
    this.handler.next(data);
  }
  subscribe(command: string, callback: MessageCallback): Subscription {
    return this.handler
    .filter(handler => handler.command === command)
    .subscribe(callback);
  }
}
