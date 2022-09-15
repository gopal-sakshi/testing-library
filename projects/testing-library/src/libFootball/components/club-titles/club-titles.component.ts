import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-club-titles',
  templateUrl: './club-titles.component.html',
  styleUrls: ['./club-titles.component.scss']
})
export class ClubTitlesComponent implements OnInit {

  @Input() clTitles:number;
  @Input() domesticTitles: number;

  constructor() { }

  ngOnInit(): void {
  }

}
