import { Injectable, Type } from "@angular/core";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from "rxjs";
import { DEFAULT_DIALOG_CONFIG } from "../classes/types";
import { take } from 'rxjs/operators';

@Injectable()
export class DialogsService { 

    constructor(private dialog: MatDialog) { }

    openDialog(component: Type<any>,details:any,config: MatDialogConfig<any> = DEFAULT_DIALOG_CONFIG,): Observable<any> {    
        config.data = details;    
        return this.dialog.open(component, config).afterClosed().pipe(take(1));
      }
}