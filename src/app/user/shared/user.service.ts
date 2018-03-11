import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../auth/shared/auth.service';
import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class UserService {

  constructor(private authService: AuthService,
              private angularFireStore: AngularFirestore) { }

  getUser(): Observable<User> {
    return this.authService.getAuthUser();
  }

  update(user: User): Promise<any> {
    return this.angularFireStore.doc('users/' + user.uid).set(user);
  }
}
