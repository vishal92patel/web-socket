import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './app.routes';
import { CanActiveHome } from './app.canActive';
import { GpioService } from './services/gpio/gpio.service';
import { WebSocketResolve } from './app.rosolve';
import { AppComponent } from './app.component';

import { WebSocketService } from './services/web-socket/web-socket.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConnectingComponent } from './helper/connecting/connecting.component';
import { DisconnectedComponent } from './helper/disconnected/disconnected.component';
import { SocketErrorComponent } from './helper/socket-error/socket-error.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      SignupComponent,
      ConnectingComponent,
      DisconnectedComponent,
      SocketErrorComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule
   ],
   providers: [
      CanActiveHome,
      WebSocketService,
      GpioService,
      WebSocketResolve
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
