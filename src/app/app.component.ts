import { Component } from '@angular/core';

@Component({
  selector: 'psa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navBarOpen = true;

  toggleNav(){
    this.navBarOpen = !this.navBarOpen;
  }
  
}
