import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GpioService } from '../services/gpio/gpio.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private gpioService: GpioService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.gpioService.setAppCompLoader(false);
    this.createLoginForm();
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
    console.log(this.loginForm.value)
  }
}
