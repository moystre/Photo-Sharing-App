import { FileColumn } from './../shared/file-column';
import { FolderColumn } from './../shared/folder-column';
import { Column } from './../shared/column';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { File } from '../shared/file';
import { Folder } from '../shared/folder';

@Component({
  selector: 'psa-file-system-container',
  templateUrl: './file-system-container.component.html',
  styleUrls: ['./file-system-container.component.css']
})
export class FileSystemContainerComponent implements OnInit {
  @Input()
  columns: Column[] = [];

  @Output()
  clickedFolder = new EventEmitter<Folder>();
  constructor() {}

  ngOnInit() {}

  deleteImg() {
    console.log('delete clicked (container)');
  }
}
