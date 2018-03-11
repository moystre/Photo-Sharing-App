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
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  user: User;

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
    /*
    this.user = {
      userName: 'John',
      email: 'john222@m2.dk',
      uid: '332',
      firstName: 'Vistor',
      middleName: 'De',
      lastName: 'Lalalal'
    };
    */

     this.userService.getUser()
     .subscribe( user => this.user);
    }

  save() {
    const model = this.profileForm.value as User;
    model.uid = this.user.uid;
    this.userService.update(model)
      .then(() => console.log('saved'))
      .catch(error => console.log('error', error));
  }

  formControlError(formControl: string, errorCode: string, prerequired?: string[]): boolean {

    console.log( this.user);

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
