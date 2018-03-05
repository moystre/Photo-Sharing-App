import { AuthService } from './auth/shared/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'psa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  navBarOpen = false;
  mode = 'side';
  watcher: Subscription;

  routes = [
    {route: '/', title: 'Home', icon: 'home'},
    {route: '/albums', title: 'Albums', icon: 'folder'},
  ];

  constructor(media: ObservableMedia,
              private authService: AuthService) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else {
          this.loadDashBoardContent();
      }
    });
  }

  ngOnInit() {
   this.authService.isAuthenticated().subscribe(isLoggedIn => {
   this.navBarOpen = isLoggedIn;
   });
  }

  ngOnDestroy() {
    this.navBarOpen = !this.navBarOpen;
  }

  toggleNav() {
    this.navBarOpen = !this.navBarOpen;
  }

  loadMobileContent() {
    console.log('mobile view');
    this.navBarOpen = false;
    this.mode = 'over';
  }

  loadDashBoardContent() {
    console.log('large view');
    this.navBarOpen = true;
    this.mode = 'side';
    }
}
