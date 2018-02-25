import { Component, OnInit } from '@angular/core';
import { GpioService } from '../../services/gpio/gpio.service';

@Component({
  selector: 'app-socket-error',
  templateUrl: './socket-error.component.html',
  styleUrls: ['./socket-error.component.css']
})
export class SocketErrorComponent implements OnInit {
  constructor(
    private gpioService: GpioService
  ) { }

  ngOnInit() {
    this.gpioService.setAppCompLoader(false);
  }

}
