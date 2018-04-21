import { Column } from './../shared/column';
import { FolderColumn } from './../shared/folder-column';
import { FileColumn } from './../shared/file-column';
import { Folder } from '../shared/folder';
import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'psa-file-system-column',
  templateUrl: './file-system-column.component.html',
  styleUrls: ['./file-system-column.component.css']
})
export class FileSystemColumnComponent implements OnInit {
  @Input()
  column: Column;
  @Output()
  clickedFolder = new EventEmitter<Folder>();
  folderColumn: FolderColumn;
  fileColumn: FileColumn;
  constructor() { }

  ngOnInit() {
    if ((this.column as FileColumn).url || (this.column as FileColumn).file) {
      this.fileColumn = this.column as FileColumn;
    } else {
      this.folderColumn = this.column as FolderColumn;
    }
}

}
