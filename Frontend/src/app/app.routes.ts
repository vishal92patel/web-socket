import { Routes } from '@angular/router';
import { CanActiveHome } from './app.canActive';
import { ConnectingComponent } from './helper/connecting/connecting.component';
import { DisconnectedComponent } from './helper/disconnected/disconnected.component';
import { SocketErrorComponent } from './helper/socket-error/socket-error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WebSocketResolve } from './app.rosolve';

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
         { path: 'signin', component: LoginComponent },
         { path: 'signup', component: SignupComponent },
         { path: '', redirectTo: '/home/signin', pathMatch: 'full' },
         { path: '**', redirectTo: '/home/signin' }
      ],
   },
   { path: '', redirectTo: '/connecting', pathMatch: 'full' },
   { path: '**', redirectTo: '/connecting' }
];
