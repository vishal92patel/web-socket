import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './app.routes';
import { GpioService } from './services/gpio/gpio.service';
import { WebSocketResolve } from './app.rosolve';
import { AppComponent } from './app.component';

import { WebSocketService } from './services/web-socket/web-socket.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error/error.component';
import { ConnectingComponent } from './error/connecting/connecting.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      SignupComponent,
      ErrorComponent,
      ConnectingComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule
   ],
   providers: [
      WebSocketService,
      GpioService,
      WebSocketResolve
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
