import { UserService } from './../../user/shared/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../user/shared/user';

@Component({
  selector: 'psa-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profileForm: FormGroup;
  user: User;
  userSubscription: Subscription;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) {
    this.profileForm = formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      firstName: '',
      middleName: '',
      lastName: ''
    });
  }

  ngOnInit() {
    this.userSubscription = this.userService.getUser()
    .subscribe(user => {
      this.user = user;
      this.profileForm.patchValue(user);
    });

/*
    this.user = {
      userName: 'userJohn123',
      email: 'john222@m2.dk',
      uid: '332',
      firstName: 'John',
      middleName: 'De',
      lastName: 'Rotflflfl'
    };
*/
    }

    ngOnDestroy() {
      this.userSubscription.unsubscribe();

    }

  save() {
    const model = this.profileForm.value as User;
    model.uid = this.user.uid;
    this.userService.update(model)
      .then(() => console.log('saved'))
      .catch(error => console.log('error', error));
  }

  unsaved(): boolean {
    const model = this.profileForm.value as User;
    return model.userName === this.user.userName &&
           model.firstName === this.user.firstName &&
           model.middleName === this.user.middleName &&
           model.lastName === this.user.lastName;
  }

  formControlError(formControl: string, errorCode: string, prerequired?: string[]): boolean {

   // console.log( this.user);

    if (prerequired && prerequired.length > 0) {
      for (let i = 0; i < prerequired.length; i++) {
        if (this.profileForm.get(formControl).hasError(prerequired[i])) {
          return false;
        }
      }
    }
    return this.profileForm.get(formControl).hasError(errorCode);
  }
}
