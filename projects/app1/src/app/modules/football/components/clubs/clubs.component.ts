import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  @Input() footballClubs:any;
  constructor() { }

  ngOnInit(): void {
  }

}
