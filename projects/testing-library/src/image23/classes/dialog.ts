import { Directive } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Directive()
export abstract class Dialog<T> { 

    constructor(protected dialogRef: MatDialogRef<T>) {}

    abstract ok(): void;
    abstract cancel(): void;
    closeDialog(dialogResult: any): void {
        this.dialogRef.close(dialogResult);
    }
}