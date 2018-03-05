import { SignupComponent } from './auth/signup/signup.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/shared/auth-guard.service';

const routes: Routes = [
  {
    path: 'albums',
    component: AlbumsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthModule
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
