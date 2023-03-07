import { Directive } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { MatDialogConfig } from "@angular/material/dialog";
import { Observable } from "rxjs";

@Directive()
export abstract class ImagePickerFormControl implements ControlValueAccessor {

  constructor() { }

  onChange = (_: any) => { };
  onTouched = () => { };
  writeValue(obj: any): void { }
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }


  onAttachClicked() {
    const { dialogDetails, dialogConfig } = this.getDialogConfiguration();
    this.showPickerDialog(dialogDetails, dialogConfig).pipe().subscribe(res => console.log(res));
  }

  protected abstract showPickerDialog(dialogDetails: any, dialogConfig: MatDialogConfig): Observable<any>;

  getDialogConfiguration() {
    const dialogDetails: any = {
      title: 'Attach files',
      acceptButtonTitle: 'Attach',
      rejectButtonTitle: 'Cancel',
      data: {
        attachments: [],
        s3Category: 's3 category',
        multiple: false,
        maxImages: 50,
        acceptFileTypes: [],
        showCamera: false,
        showAddOnLast: false
      },
    };

    const dialogConfig: MatDialogConfig = {
      width: '800px',
      // panelClass: 'kl-attach-image-dialog',
      hasBackdrop: true,
      disableClose: true,
      autoFocus: false,
    };

    return { dialogDetails, dialogConfig };
  }


}