import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'psa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //access point to AngularFireAuth
  constructor(private fireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.fireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword('zebrakac@zxcds.dk', '123ss456')
    //using promise
    .then(user => console.log(user));
  }

}
