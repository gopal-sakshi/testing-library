import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-club-address',
  templateUrl: './club-address.component.html',
  styleUrls: ['./club-address.component.scss']
})
export class ClubAddressComponent implements OnInit {

  @Input() clubAddress : any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.clubAddress) {
      console.log(this.clubAddress);
    }
  }
}
