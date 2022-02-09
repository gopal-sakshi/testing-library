import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  duration:number;
  messageFor12:string;
  messageFor13:string;

  constructor() {
    this.duration = 5000;
    this.messageFor12 = '12 comp';
    this.messageFor13 = '13 comp';
  }
}
