import { Pipe, PipeTransform } from '@angular/core';
import { GpioService } from '../../../services/gpio/gpio.service';

@Pipe({
  name: 'selfRemover'
})
export class SelfRemoverPipe implements PipeTransform {
  constructor(
    private gpioService: GpioService
  ){}
  transform(value: any, args?: any): any {
    if (value) {
      if (this.gpioService.getSocketId() === value.socket_id) {
        if(args[0]){
          args[0].splice(args[1], 1);
        }
        return null;
      }else{
        return value;
      }
    }else{
      return value;
    }
  }

}
