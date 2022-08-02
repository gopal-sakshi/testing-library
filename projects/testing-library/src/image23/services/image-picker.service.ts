import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UploadImageDialogComponent } from "../components/upload-image-dialog/upload-image-dialog.component";
import { DialogsService } from "./dialogs.service";

@Injectable()
export class ImagePickerService { 

    constructor(private dialogsService:DialogsService) { }

    showImageUpload(details:any,config:any): Observable<any> {
    
        return this.openImageUploadDialog(details, config);
    }

    openImageUploadDialog(details:any, config:any) {
        return this.dialogsService.openDialog(UploadImageDialogComponent, details, config);
    }
}