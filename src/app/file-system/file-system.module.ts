import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDetailsComponent } from './file-details/file-details.component';
import { FileSystemContainerComponent } from './file-system-container/file-system-container.component';
import { MatListModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FolderDetailsComponent } from './folder-details/folder-details.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [FileDetailsComponent, FileSystemContainerComponent, FolderDetailsComponent],
  providers: [],
  exports: [FileSystemContainerComponent]
})
export class FileSystemModule { }
