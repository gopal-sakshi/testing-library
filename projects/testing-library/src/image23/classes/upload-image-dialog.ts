import { Directive } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Dialog } from "./dialog";

@Directive()
export abstract class UploadImageDialog<T> extends Dialog<T> { 

    multiple:any;
    maxImages:any;
    s3Category:any;
    
    constructor(protected dialogRef: MatDialogRef<T>,
        protected dialogData: any) {
        super(dialogRef);
        
        this.multiple          = this.dialogData.data.multiple;
        this.maxImages         = this.dialogData.data.maxImages;
        this.s3Category        = this.dialogData.data.s3Category;
    }
}