import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
// import { User } from '../shared/user';

@Component({
  selector: 'psa-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]]
    });
  }

  signup() {
    const model = this.signupForm.value;
    this.authService.signup(model.email, model.password)
      .then(user => {
        this.router.navigateByUrl('albums')
          .then(() => {
            this.snackBar.open('You are signed up!',
              '',
              {
                duration: 3000
              });
          });
      })
      .catch(error => {
        this.snackBar.open(error.message, '',
          {
            duration: 4000
          });
      });
  }

  formControllError(formControl: string, errorCode: string): boolean {
    return this.signupForm.get(formControl).hasError(errorCode);
  }

}
