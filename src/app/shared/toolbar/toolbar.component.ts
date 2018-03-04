import { AuthService } from './../../auth/shared/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatButtonModule, MatToolbarModule} from '@angular/material';

@Component({
  selector: 'psa-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isLoggedIn: boolean;
  @Output()
  navToggle = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated()
    .subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  toggleNav() {
    this.navToggle.emit();
  }

  logout() {
    this.authService.logout();
  }

}
