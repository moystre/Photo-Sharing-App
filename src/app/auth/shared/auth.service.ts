import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { User } from './user';

@Injectable()
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  login(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    console.log('Logged Out');
    return this.fireAuth.auth.signOut();
  }

  isAuthenticated(): Observable<boolean> {
    return this.fireAuth.authState
    .map(authState => {
      return authState !== null;
    });
  }

}
