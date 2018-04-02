import { Component, OnInit, Input } from '@angular/core';
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
  constructor() {}

  ngOnInit() {
  }

}
