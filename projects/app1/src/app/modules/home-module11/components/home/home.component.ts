import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showCategories:boolean = false;
  showProducts:boolean = false;
  showHome12:boolean = false;
  showHome11:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
