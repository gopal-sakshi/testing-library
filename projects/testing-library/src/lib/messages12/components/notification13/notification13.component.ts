import { Component, Inject, Input, OnInit } from '@angular/core';
import { injection_token2 } from '../../public-api';

@Component({
  selector: 'lib-notification13',
  templateUrl: './notification13.component.html',
  styleUrls: ['./notification13.component.scss']
})
export class Notification13Component implements OnInit {

  @Input() message:string;
  constructor(
    @Inject(injection_token2) public token2:any
  ) { 
    this.message='';
  }

  ngOnInit(): void {
    console.log(this.token2);
  }

}
