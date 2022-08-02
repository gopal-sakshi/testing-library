import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadImageDialog } from '../../classes/upload-image-dialog';

@Component({
  selector: 'lib-upload-image-dialog',
  templateUrl: './upload-image-dialog.component.html',
  styleUrls: ['./upload-image-dialog.component.scss']
})
export class UploadImageDialogComponent extends UploadImageDialog<UploadImageDialogComponent> implements OnInit, OnChanges {

  constructor(
    public dialogRef: MatDialogRef<UploadImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData:any
  ) { 
    super(dialogRef, dialogData)
  }

  ngOnInit(): void {
  }

  ngOnChanges() { }

  ok(): void {
    
  }
  cancel(): void {

  }
}
