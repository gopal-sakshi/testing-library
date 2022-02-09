import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-notification13',
  templateUrl: './notification13.component.html',
  styleUrls: ['./notification13.component.scss']
})
export class Notification13Component implements OnInit {

  @Input() message:string;
  constructor() { 
    this.message='';
  }

  ngOnInit(): void {
  }

}
