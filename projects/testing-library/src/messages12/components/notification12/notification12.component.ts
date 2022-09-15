import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'lib-notification12',
  templateUrl: './notification12.component.html',
  styleUrls: ['./notification12.component.scss']
})
export class Notification12Component implements OnInit {

  @Input() message:string;
  @Input() duration:number;
  constructor(private _snackBar: MatSnackBar) {
    this.message = '';
    this.duration = 3000;
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.message) {
      console.log(this.message);
      const snackbarRef = this._snackBar.open(this.message, 'dismiss', {
        //duration: 10000,
        panelClass: 'library-snackbar-class',
        horizontalPosition: 'left',
        verticalPosition: 'bottom'
      });
      snackbarRef.afterOpened().pipe().subscribe(res => {
        console.log('snackbar opened');
      });
      snackbarRef._dismissAfter(10000);
      snackbarRef.afterDismissed().pipe().subscribe(res => {
        console.log('snackbar dismissed');
      }, err => {
        console.log('couldnt dismiss snackbar');
      }, () => {
        console.log('snackbar observable completed...');
      })


    }
  }

}
