import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'psa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  navBarOpen = true;
  mode = 'side';
  watcher: Subscription;

  routes = [
    {route: '/', title: 'Home', icon: 'home'},
    {route: '/albums', title: 'Albums', icon: 'folder'},
    {route: '/login', title: 'Login', icon: 'input'}
  ]

  constructor(media: ObservableMedia){
    this.watcher = media.subscribe((change: MediaChange) => {
      if(change.mqAlias === 'xs'){
        this.loadMobileContent();
      } else {
          this.loadDashBoardContent();
      }
    });
  }

  ngOnDestroy(){
    this.navBarOpen = !this.navBarOpen;
  }

  toggleNav(){
    this.navBarOpen = !this.navBarOpen;
  }

  loadMobileContent(){
    console.log('mobile view');
    this.navBarOpen = false;
    this.mode = 'over';
  }

  loadDashBoardContent(){
    console.log('large view');
    this.navBarOpen = true;
    this.mode = 'side';
    }
  
}
