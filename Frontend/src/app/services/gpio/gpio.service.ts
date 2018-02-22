import { Injectable } from '@angular/core';

@Injectable()
export class GpioService {
  private socketId = null;
  constructor() { }

  getSocketId(){
    return this.socketId;
  }
  setSocketId(id){
    this.socketId = id;
  }
  
}
