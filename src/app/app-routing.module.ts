import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { RouterModule, Routes }from '@angular/router';

const routes: Routes = [
  { 
    path: 'albums', 
    component: AlbumsListComponent 
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
