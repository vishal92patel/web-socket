import { Component, OnInit, OnDestroy } from '@angular/core';
import { GpioService } from '../../services/gpio/gpio.service';
import { WebSocketService } from '../../services/web-socket/web-socket.service';
import { Commands } from '../../services/commands';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  unsubscribeEndDuplicateSession;
  constructor(
    private gpioService: GpioService,
    private webSocketService: WebSocketService,
    private router: Router
  ) {
    this.webSocketService.receivedForLoggedIn();
  }

  ngOnInit() {
    this.gpioService.setAppCompLoader(false);
    this.unsubscribeEndDuplicateSession = this.webSocketService.subscribe(Commands.END_DUPLICATE_SESSION, (res) => {
      if (res.success) {
        this.webSocketService.removeListener("receivedForLoggedIn");
        this.gpioService.setSocketId(null);
        this.gpioService.setLoggedInStatus(false);
        localStorage.removeItem('socketId');
        this.router.navigate(["/duplicate-session"]);
      }
    })
  }

  ngOnDestroy() {

  }

}
