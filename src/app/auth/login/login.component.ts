import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'psa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //access point to AngularFireAuth
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.login('rarara@dda.ds', '12xzczxcASD...3345655')
    .then(user => console.log(user))
    .catch(error => console.log(error));
  }
}
