import { Component, OnInit, OnDestroy } from '@angular/core';
import { GpioService } from '../../services/gpio/gpio.service';
import { WebSocketService } from '../../services/web-socket/web-socket.service';
import { Commands } from '../../services/commands';

@Component({
  selector: 'app-active-users-panel',
  templateUrl: './active-users-panel.component.html',
  styleUrls: ['./active-users-panel.component.css']
})
export class ActiveUsersPanelComponent implements OnInit, OnDestroy {
  unsubscribeGetUsersPanel;
  usersPanelData = [];
  constructor(
    private gpioService: GpioService,
    private webSocketService: WebSocketService
  ) { }

  ngOnInit() {
    this.webSocketService.send(Commands.GET_USERS_PANEL, { socket_id: this.gpioService.getSocketId() }, Commands.BROADCAST_TO_ALL);
    this.unsubscribeGetUsersPanel = this.webSocketService.subscribe(Commands.GET_USERS_PANEL, (res) => {
      console.log(res);
      if(res.data){
        if(res.data.length > 0){
          this.usersPanelData = res.data;
        }
      }
    })
  }

  ngOnDestroy(){
    this.unsubscribeGetUsersPanel.unsubscribe();
  }

}
