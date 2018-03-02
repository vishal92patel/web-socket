import { Routes } from '@angular/router';
import { CanActiveHome, CanActiveSignin, CanActiveAutoSigning, CanActiveDashboard } from './app.canActive';
import { ConnectingComponent } from './helper/connecting/connecting.component';
import { DisconnectedComponent } from './helper/disconnected/disconnected.component';
import { SocketErrorComponent } from './helper/socket-error/socket-error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AutoSigningComponent } from './auto-signing/auto-signing.component';
import { WebSocketResolve } from './app.rosolve';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

export const appRoutes: Routes = [
   {
      path: 'connecting',
      component: ConnectingComponent,
      resolve: { webSocketResolve: WebSocketResolve }
   },
   {
      path: 'disconnected',
      component: DisconnectedComponent,
   },
   {
      path: 'socket-error',
      component: SocketErrorComponent,
   },
   {
      path: 'home',
      canActivate: [ CanActiveHome ],
      children: [
         { path: 'signin', component: LoginComponent, canActivate: [ CanActiveSignin ] },
         { path: 'signup', component: SignupComponent },
         { path: 'auto-signing', component: AutoSigningComponent, canActivate: [ CanActiveAutoSigning ]  },
         { path: '', redirectTo: '/home/signin', pathMatch: 'full' },
         { path: '**', redirectTo: '/home/signin' }
      ],
   },
   {
      path: 'dashboard',
      canActivate: [CanActiveDashboard],
      children: [
         { path: '', component: DashboardComponent }
      ]
   },
   { path: '', redirectTo: '/connecting', pathMatch: 'full' },
   { path: '**', redirectTo: '/connecting' }
];
