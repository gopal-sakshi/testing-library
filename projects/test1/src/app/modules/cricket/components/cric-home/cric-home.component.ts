import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cric-home',
  templateUrl: './cric-home.component.html',
  styleUrls: ['./cric-home.component.scss']
})
export class CricHomeComponent implements OnInit {

  showSquads: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
