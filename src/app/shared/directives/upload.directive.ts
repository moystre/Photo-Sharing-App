import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[psaUpload]'
})
export class UploadDirective {
  @Output() hovering = new EventEmitter<boolean>();

  @Output() dropped = new EventEmitter<FileList>();

  constructor() {}
  @HostListener('dragenter', ['$event'])
  onEnter(event) {
    event.preventDefault();
    this.hovering.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event) {
    event.preventDefault();
    this.hovering.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    event.preventDefault();
    this.dropped.emit(event.dataTransfer.files);
  }
}
