import { AuthService } from './../shared/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psa-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder) {
    this.profileForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      firstName: '',
      middleName: '',
      lastName: ''
    });
  }

  ngOnInit() {}

  save() {}

  formControlError(formControl: string, errorCode: string, prerequired?: string[]): boolean {
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
