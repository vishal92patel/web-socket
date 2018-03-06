import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GpioService } from '../services/gpio/gpio.service';
import { WebSocketService } from '../services/web-socket/web-socket.service';
import { Commands } from '../services/commands';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  alertBox;
  progress = false;
  loginForm: FormGroup;
  unsubscribeWebSocketService;
  constructor(
    private gpioService: GpioService,
    private fb: FormBuilder,
    private webSocketService: WebSocketService,
    private router: Router
  ) { }

  ngOnInit() {
    this.gpioService.setAppCompLoader(false);
    this.createLoginForm();
    this.unsubscribeWebSocketService = this.webSocketService.subscribe(Commands.LOGIN_USER, (res) => {
      this.progress = false;
      if(res.error){
        this.alertBox = {error: true, msg: res.error}
      }else if(res.success){
        this.alertBox = {success: true, msg: res.success};
        localStorage.setItem('socketId', this.gpioService.getSocketId());
        this.gpioService.setLoggedInStatus(true);
        this.router.navigate(['/dashboard']);
      }
      this.loginForm.enable();
    });
  }

  ngOnDestroy(){
    this.unsubscribeWebSocketService.unsubscribe();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email: [null, [
        Validators.required,
        Validators.email
        ]
      ],
      password: [null, [
          Validators.required,
          Validators.pattern(/.{8,}/)
        ]
      ]
    });
  }

  onLogin(){
    this.alertBox = {};
    this.progress = true;
    this.loginForm.disable();
    this.webSocketService.send(Commands.LOGIN_USER, Object.assign(this.loginForm.value, { "socket_id": this.gpioService.getSocketId()}));
  }
}
