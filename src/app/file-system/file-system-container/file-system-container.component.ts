import { Component, OnInit } from '@angular/core';
import { File } from '../shared/file';
import { Folder } from '../shared/folder';

@Component({
  selector: 'psa-file-system-container',
  templateUrl: './file-system-container.component.html',
  styleUrls: ['./file-system-container.component.css']
})
export class FileSystemContainerComponent implements OnInit {
  folders: Folder[];
  files: File[];
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
    this.folders = [
      {name: 'one2017'},
      {name: 'two2017'},
      {name: 'three2017'}
    ];
    this.files = [
      {fileName: 'asdfsdaf.jpg', displayName: 'KJDFKJASHDJKHASJDKH', created: '2017-12-05', fileType: 'jpg', size: 444},
      {fileName: 'asdfasdfs.jpg', displayName: 'DKFJHAFHAEFHWE', created: '2017-01-01', fileType: 'jpg', size: 333},
      {fileName: 'htwetgetgr.jpg', displayName: 'OIAEHFOEAH', created: '2017-04-02', fileType: 'jpg', size: 555}
    ];
}

  ngOnInit() {}

  deleteImg() {
    console.log('delete clicked (container)');
  }
}
