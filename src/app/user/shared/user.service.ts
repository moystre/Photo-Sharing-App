import { element } from 'protractor';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../auth/shared/auth.service';
import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/first';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

@Injectable()
export class UserService {

  constructor(private authService: AuthService,
              private angularFireStore: AngularFirestore) { }

  getUser(): Observable<User> {
    // 1. Get the AuthUser
    // 2. Get the DBUser - with SwitchMap we prevent function from 3. until we have 1. & 2.
    // 3. Merge AuthUser & DBUser - using Map to map to convert result of merging nad returning an Obs
    return this.authService.getAuthUser().first()
      .switchMap(authUser => {
        if (!authUser) {
          return new EmptyObservable();
        }
        return this.angularFireStore.doc<User>('users/' + authUser.uid).valueChanges().first()
        .map(dbUser => {
          if (dbUser) {
            authUser.userName = dbUser.userName;
            authUser.firstName = dbUser.firstName;
            authUser.middleName = dbUser.middleName;
            authUser.lastName = dbUser.lastName;
          }
          return authUser;
        });
      });
  }

  update(user: User): Promise<any> {
    return this.angularFireStore.doc('users/' + user.uid).set(user);
  }
}
