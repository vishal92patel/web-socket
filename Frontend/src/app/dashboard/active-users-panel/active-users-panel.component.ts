import { Component, OnInit } from '@angular/core';
import { GpioService } from '../../services/gpio/gpio.service';
import { WebSocketService } from '../../services/web-socket/web-socket.service';
import { Commands } from '../../services/commands';

@Component({
  selector: 'app-active-users-panel',
  templateUrl: './active-users-panel.component.html',
  styleUrls: ['./active-users-panel.component.css']
})
export class ActiveUsersPanelComponent implements OnInit {
  constructor(
    private gpioService: GpioService,
    private webSocketService: WebSocketService
  ) { }

  ngOnInit() {
    this.webSocketService.send(Commands.GET_USERS_PANEL, {}, Commands.BROADCAST_TO_ALL);
  }

}
