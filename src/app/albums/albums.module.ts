import { User } from './../user/shared/user';
import { FileSystemModule } from './../file-system/file-system.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';

@NgModule({
  imports: [CommonModule, SharedModule, FileSystemModule, UserModule],
  declarations: [AlbumsListComponent]
})
export class AlbumsModule {}
