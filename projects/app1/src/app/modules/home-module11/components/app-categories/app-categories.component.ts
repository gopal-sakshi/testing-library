import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-categories',
  templateUrl: './app-categories.component.html',
  styleUrls: ['./app-categories.component.scss']
})
export class AppCategoriesComponent implements OnInit {

  showCategoryList:boolean = false;
  showCategoryFullView:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
