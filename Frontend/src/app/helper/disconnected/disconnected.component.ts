import { Component, OnInit } from '@angular/core';
import { GpioService } from '../../services/gpio/gpio.service';

@Component({
  selector: 'app-disconnected',
  templateUrl: './disconnected.component.html',
  styleUrls: ['./disconnected.component.css']
})
export class DisconnectedComponent implements OnInit {

  constructor(
    private gpioService: GpioService
  ) { }

  ngOnInit() {
    this.gpioService.setAppCompLoader(false);
  }

}
