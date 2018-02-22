import { Routes } from '@angular/router';
import { ConnectingComponent } from './error/connecting/connecting.component';
import { ErrorComponent } from './error/error/error.component';
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
      path: '404',
      component: ErrorComponent,
   },
   {
      path: 'home',
      children: [
         { path: 'signin', component: LoginComponent },
         { path: 'signup', component: SignupComponent },
         { path: '', redirectTo: '/signin', pathMatch: 'full' },
         { path: '**', redirectTo: '/signin' }
      ],
   },
   { path: '', redirectTo: '/connecting', pathMatch: 'full' },
   { path: '**', redirectTo: '/connecting' }
];
