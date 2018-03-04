import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [ ToolbarComponent, MarginIconComponent ],
  exports: [ ToolbarComponent, MarginIconComponent ]
})
export class SharedModule { }
