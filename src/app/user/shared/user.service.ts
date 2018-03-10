import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../auth/shared/auth.service';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private authService: AuthService) { }

  getUser(): Observable<User> {
    return this.authService.getAuthUser();
  }
}
