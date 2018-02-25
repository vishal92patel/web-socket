import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class GpioService {
  private socketId = null;
  private loggedInStatus: boolean = false;
  private appCompLoader = new EventEmitter;
  constructor() { }

  getSocketId(){
    return this.socketId;
  }
  setSocketId(id){
    this.socketId = id;
  }
  getLoggedInStatus(){
    return this.loggedInStatus;
  }
  setLoggedInStatus(status: boolean){
    this.loggedInStatus = status;
  }
  getAppCompLoader(){
    return this.appCompLoader;
  }
  setAppCompLoader(status: boolean){
    this.appCompLoader.emit(status);
  }
  
}
