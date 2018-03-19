import { UserService } from './../../user/shared/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../user/shared/user';
import { transition, animate, trigger, state, style } from '@angular/animations';

@Component({
  selector: 'psa-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [trigger('imageHover', [
    state('hoveringImage', style({
      opacity: 0.3
    })),
    state('notHoveringImage', style({
      opacity: 1
    })),
    transition('hoveringImage <=> notHoveringImage', animate('300ms ease-in'))
  ])]
})
export class ProfileComponent implements OnInit, OnDestroy {

  profileForm: FormGroup;
  user: User;
  userSubscription: Subscription;
  isHovering: boolean;
  img: String;

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
    }

    ngOnDestroy() {
      this.userSubscription.unsubscribe();

    }

    hovering(isHovering: boolean) {
      this.isHovering = isHovering;
    }

    changePicture(event) {
      if (event.toState === 'hoveringImage') {
        this.img = '../../../../assets/ic_cloud_upload_black_48px.svg';
      } else {
        this.img = 'https://firebasestorage.googleapis.com/v0/b/photo-sharing-app-b1663.appspot.com/o/aza04Wm1_700w_0.jpg?alt=media&token=14039b08-86dd-4013-a812-8821bc281943';
      }
      console.log('animation done', event);
    }

    uploadNewImg(fileList) {
      console.log('FILE_LIST:    ', fileList);
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
