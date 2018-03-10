import { Component, OnInit, OnDestroy } from '@angular/core';
import { GpioService } from '../../services/gpio/gpio.service';
import { WebSocketService } from '../../services/web-socket/web-socket.service';
import { Commands } from '../../services/commands';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  constructor(
    private gpioService: GpioService,
    private webSocketService: WebSocketService
  ) {
    this.webSocketService.receivedForLoggedIn();
  }

  ngOnInit() {
    this.gpioService.setAppCompLoader(false);
  }

  ngOnDestroy() {
    this.webSocketService.removeListener('receivedForLoggedIn');
  }

}
