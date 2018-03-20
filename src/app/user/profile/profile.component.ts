import { FileService } from './../../file-system/file.service';
import { MatSnackBar } from '@angular/material';
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
  srcLoaded: boolean;

  constructor(private userService: UserService,
              private fileService: FileService,
              private formBuilder: FormBuilder,
              private snack: MatSnackBar) {
    this.profileForm = formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      firstName: '',
      middleName: '',
      lastName: ''
    });
  }

  ngOnInit() {
    this.userSubscription = this.userService.getUserWithProfileUrl()
    .subscribe(user => {
      this.user = user;
      this.img = this.user.profileImgUrl;
      this.profileForm.patchValue(user);
    });
    }

    ngOnDestroy() {
      this.userSubscription.unsubscribe();

    }

    hovering(isHovering: boolean) {
      this.isHovering = isHovering;
    }

    uploadNewImg(fileList) {
      if (fileList &&
          fileList.length === 1 &&
          ['image/jpeg', 'image/png'].indexOf(fileList.item(0).type) > -1) {
            this.srcLoaded = false;
            console.log(fileList.item(0));
            const file = fileList.item(0);
            const path = 'profile-imgs/' + this.user.uid;
            this.fileService.upload(path, file).downloadUrl
            .subscribe(
              url => {
                console.log('url', url);
                this.img = url;
                this.hovering(false);
              }
            );
          } else {
            this.snack.open('File has to be a single png or jpeg image', null, { duration: 4000 }
            );
            this.hovering(false);
          }
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
