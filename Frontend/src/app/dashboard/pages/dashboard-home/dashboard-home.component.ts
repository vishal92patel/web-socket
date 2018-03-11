import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService } from '../../../services/web-socket/web-socket.service';
import { Commands } from '../../../services/commands';
import { GpioService } from '../../../services/gpio/gpio.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  constructor(
    private router: Router,
    private webSocketService: WebSocketService,
    private gpioService: GpioService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.webSocketService.removeListener('receivedForLoggedIn');
    this.webSocketService.send(Commands.HARD_LOGOUT, { socket_id: this.gpioService.getSocketId() });
    this.gpioService.setSocketId(null);
    this.gpioService.setLoggedInStatus(false);
    localStorage.removeItem('socketId');
    this.router.navigate(["/"]);
  }

}
