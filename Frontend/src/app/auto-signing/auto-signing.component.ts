import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebSocketService } from '../services/web-socket/web-socket.service';
import { Commands } from '../services/commands';
import { GpioService } from '../services/gpio/gpio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-signing',
  templateUrl: './auto-signing.component.html',
  styleUrls: ['./auto-signing.component.css']
})
export class AutoSigningComponent implements OnInit, OnDestroy {
  unsubscribeWebSocketService;
  constructor(
    private webSocketService: WebSocketService,
    private gpioService: GpioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.webSocketService.send(Commands.AUTO_SIGNING, {old_socket_id: localStorage.getItem('socketId'),new_socket_id: this.gpioService.getSocketId()});
    this.unsubscribeWebSocketService = this.webSocketService.subscribe(Commands.AUTO_SIGNING, (res) => {
      if(res.success){
        localStorage.setItem('socketId', this.gpioService.getSocketId());
        this.gpioService.setLoggedInStatus(true);
        this.router.navigate(['/dashboard']);
      }else{
        localStorage.removeItem('socketId');
        this.router.navigate(['/home/signin']);
      }
    });
  }
  ngOnDestroy(){
    this.unsubscribeWebSocketService.unsubscribe();
  }

}
