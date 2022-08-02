import { Component, Input, OnInit } from '@angular/core';
import { UploadImage } from '../../classes/upload-image';

@Component({
  selector: 'lib-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent extends UploadImage implements OnInit {

  @Input() showCamera:any

  constructor() { super() }

  ngOnInit(): void {
  }

}
