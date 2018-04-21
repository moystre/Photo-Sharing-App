import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FolderService } from './db/folder.service';
import { FileService } from './storage/file.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import { UploadDirective } from './directives/upload.directive';
import { AngularFireStorageModule } from 'angularfire2/storage';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  declarations: [ToolbarComponent, MarginIconComponent, UploadDirective],
  exports: [ToolbarComponent, MarginIconComponent, UploadDirective],
  providers: [FileService, FolderService]
})
export class SharedModule {}
