import { Component } from '@angular/core';

@Component({
  selector: 'psa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navBarOpen = true;

  routes = [
    {route: '/', title: 'Home', icon: 'home'},
    {route: '/albums', title: 'Albums', icon: 'folder'},
    {route: '/users', title: 'Users', icon: 'event'}
  ]

  toggleNav(){
    this.navBarOpen = !this.navBarOpen;
  }
  
}
