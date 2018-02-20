import { Component, OnInit } from '@angular/core';
import { Commands } from './services/commands';
import { WebSocketService } from './services/web-socket/web-socket.service';
import * as io from "socket.io-client";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // private url = 'http://localhost:3000';
  // private socket;
  title = 'My First Angular App';
  constructor(
    private webSocketService: WebSocketService
  ){}
  ngOnInit(){
    // this.socket = io.connect(this.url);
    // this.socket.emit('CREATE_USER', {"test": "test1"});
    // this.socket.on('CREATE_USER', (data) => {
    //   console.log(data);
    // });
    // this.webSocketService.send(Commands.CREATE_USER, {fromAngularKey: 'from angular value'});

    this.webSocketService.subscribe(Commands.CREATE_USER, (res) => {
      console.log(res);
      if(res.fromWSKey){
        console.log('CREATE success');
      }
    })

    this.webSocketService.subscribe(Commands.GET_USER, (res) => {
      console.log(res);
      if(res.fromWSKey){
        console.log('GET success');
      }
    })

  }
}
