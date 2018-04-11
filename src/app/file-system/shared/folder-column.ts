import { Folder } from './folder';
import { Column } from './column';
import { File } from './file';

export interface FolderColumn extends Column {
  folders: Folder[];
  files: File[];
}
