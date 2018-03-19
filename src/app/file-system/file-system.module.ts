import { FileService } from './file.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  imports: [
    CommonModule,
    AngularFireStorageModule
  ],
  declarations: [],
  providers: [FileService]
})
export class FileSystemModule { }
