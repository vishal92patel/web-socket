import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class GpioService {
  private socketId = null;
  private loggedInStatus: boolean = false;
  private userData = null;
  private appCompLoader = new EventEmitter;
  constructor() { }

  getSocketId(){
    return this.socketId;
  }
  setSocketId(id){
    this.socketId = id;
  }
  getUserData(){
    return this.userData;
  }
  setUserData(full_name, email, gender){
    this.userData = { full_name: full_name, email: email, gender:gender };
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
