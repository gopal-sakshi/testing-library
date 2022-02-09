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
      this._snackBar.open(this.message, '', {duration: 3000})
    }
  }

}
