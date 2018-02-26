import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule, MatListModule, MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AlbumsModule } from './albums/albums.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AlbumsModule,
    MatSidenavModule,
    SharedModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
