import { User } from './../../user/shared/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { matchPassword } from '../shared/password.validator';

@Component({
  selector: 'psa-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatedPass: ['', [Validators.required, matchPassword()]]
    });
  }

  signup() {
    const model = this.signupForm.value as User;
    this.authService
      .signup(model)
      .then(user => {
        this.router.navigateByUrl('albums').then(() => {
          this.snackBar.open('You are signed up!', '', {
            duration: 3000
          });
        });
      })
      .catch(error => {
        this.snackBar.open(error.message, '', {
          duration: 4000
        });
      });
  }

  formControllError(
    formControl: string,
    errorCode: string,
    preRequired?: string[]
  ): boolean {
    if (preRequired && preRequired.length > 0) {
      for (let i = 0; i < preRequired.length; i++) {
        if (this.signupForm.get(formControl).hasError(preRequired[i])) {
          return false;
        }
      }
    }
    return this.signupForm.get(formControl).hasError(errorCode);
  }
}
