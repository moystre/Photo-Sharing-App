import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'psa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // access point to AngularFireAuth
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.login('userrrr@us.os', '1sa3345655')
    .then(() => console.log('Logged In'))
    .catch(error => console.log(error));

/* TODO
    this.authService.logout()
    .then(() => console.log('Logged Out'))
    .catch(error => console.log(error));
*/
    this.authService.isAuthenticated()
    .subscribe(authState => console.log(authState),
      error2 => console.log(error2),
      () => console.log('Complete'));
  }
}
