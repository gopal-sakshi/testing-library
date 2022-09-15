import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home12',
  templateUrl: './home12.component.html',
  styleUrls: ['./home12.component.scss']
})
export class Home12Component implements OnInit {
  duration: number;
  messageFor12: string;
  messageFor13: string;

  constructor() {
    this.duration = 5000;
    this.messageFor12 = '12 comp';
    this.messageFor13 = 'message from home11 module';
   }

  ngOnInit(): void {
  }

}
