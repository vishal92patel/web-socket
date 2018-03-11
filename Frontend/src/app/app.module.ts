import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './app.routes';
import { CanActiveHome, CanActiveSignin, CanActiveAutoSigning, CanActiveDashboard } from './app.canActive';
import { GpioService } from './services/gpio/gpio.service';
import { WebSocketResolve } from './app.rosolve';
import { AppComponent } from './app.component';

import { WebSocketService } from './services/web-socket/web-socket.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConnectingComponent } from './helper/connecting/connecting.component';
import { DisconnectedComponent } from './helper/disconnected/disconnected.component';
import { SocketErrorComponent } from './helper/socket-error/socket-error.component';
import { AutoSigningComponent } from './auto-signing/auto-signing.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ActiveUsersPanelComponent } from './dashboard/active-users-panel/active-users-panel.component';
import { NavBarComponent } from './dashboard/nav-bar/nav-bar.component';
import { DashboardHomeComponent } from './dashboard/pages/dashboard-home/dashboard-home.component';
import { SelfExecuteCommandService } from './services/self-execute-command.service';
import { LastSeenPipe } from './dashboard/active-users-panel/pipes/last-seen.pipe';
import { SelfRemoverPipe } from './dashboard/active-users-panel/pipes/self-remover.pipe';
import { BsDropdownModule } from 'ngx-bootstrap';
import { DuplicateSessionComponent } from './helper/duplicate-session/duplicate-session.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      SignupComponent,
      ConnectingComponent,
      DisconnectedComponent,
      SocketErrorComponent,
      AutoSigningComponent,
      DashboardComponent,
      ActiveUsersPanelComponent,
      NavBarComponent,
      DashboardHomeComponent,
      LastSeenPipe,
      SelfRemoverPipe,
      DuplicateSessionComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      CanActiveHome,
      CanActiveSignin,
      CanActiveAutoSigning,
      CanActiveDashboard,
      WebSocketService,
      GpioService,
      WebSocketResolve,
      SelfExecuteCommandService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
