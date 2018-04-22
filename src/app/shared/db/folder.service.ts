import { Folder } from './../../file-system/shared/folder';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class FolderService {

  constructor(private angularFireStore: AngularFirestore) { }

  getFolder(uid: string): Observable<Folder> {
   return this.angularFireStore.doc<Folder>('folders/' + uid).valueChanges()
   .map(folder => {
    if (folder) {
      folder.uid = uid;
     }
     return folder;
   });
  }
}
