import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ImagePickerFormControl } from '../../classes/image-picker-form-control';
import { ImagePickerService } from '../../services/image-picker.service';

const FORM_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ImagePickerFormControlComponent),
  multi: true,
};

@Component({
  selector: 'lib-image-picker-form-control',
  templateUrl: './image-picker-form-control.component.html',
  styleUrls: ['./image-picker-form-control.component.scss'],
  providers: [FORM_CONTROL_ACCESSOR]
})
export class ImagePickerFormControlComponent extends ImagePickerFormControl implements OnInit {

  constructor(
    private imagePickerService: ImagePickerService
  ) { 
    super();
  }

  ngOnInit(): void {
  }

  protected showPickerDialog(dialogDetails:any, dialogConfig: MatDialogConfig): Observable<any> {

    return this.imagePickerService.showImageUpload(dialogDetails, dialogConfig)
      .pipe();
    }

}
