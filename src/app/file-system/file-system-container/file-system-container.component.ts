import { Component, OnInit } from '@angular/core';
import { File } from '../shared/file';

@Component({
  selector: 'psa-file-system-container',
  templateUrl: './file-system-container.component.html',
  styleUrls: ['./file-system-container.component.css']
})
export class FileSystemContainerComponent implements OnInit {

  file: File;
  url: string;
  constructor() {
    this.file = {
      displayName: 'day at the beachh',
      fileName: 'newFile.jpg',
      created: '10-10-2017',
      fileType: 'jpg',
      owner: 'owner23242',
      size: 333
    };
    this.url = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
   }

  ngOnInit() {
  }

  deleteImg() {
    console.log('delete clicked (container)');
  }

}
