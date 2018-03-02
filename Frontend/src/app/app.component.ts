import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { GpioService } from './services/gpio/gpio.service';
import { Commands } from './services/commands';
import { WebSocketService } from './services/web-socket/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  appCompLoader: boolean = true;
  constructor(
    private gpioService: GpioService,
    private cdRef:ChangeDetectorRef,
    private webSocketService: WebSocketService
  ){}
  ngOnInit(){
    this.appCompLoader = true;
    this.gpioService.getAppCompLoader().subscribe( (res) => {
      this.appCompLoader = res;
    })
  }
  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
}
