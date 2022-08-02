import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareUpdateFormComponent } from './components/share-update-form/share-update-form.component';
import { ImagePickerFormControlComponent } from './components/image-picker-form-control/image-picker-form-control.component';
import { UploadImageDialogComponent } from './components/upload-image-dialog/upload-image-dialog.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { DialogsService } from './services/dialogs.service';
import { ImagePickerService } from './services/image-picker.service';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ShareUpdateFormComponent,
    ImagePickerFormControlComponent,
    UploadImageDialogComponent,
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    ShareUpdateFormComponent
  ],
  providers: [
    DialogsService,
    ImagePickerService
  ]
})
export class Image23Module { }
