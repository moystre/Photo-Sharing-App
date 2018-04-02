import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { File } from '../shared/file';

@Component({
  selector: 'psa-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {

  @Input()
  file: File;
  @Input()
  url: string;
  @Output()
  imgDeleted = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
  }

  delete() {
    // for now
    this.imgDeleted.emit(this.url);
    console.log('delete clicked');
  }
}
