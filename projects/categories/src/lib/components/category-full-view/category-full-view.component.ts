import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../classes/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'lib-category-full-view',
  templateUrl: './category-full-view.component.html',
  styleUrls: ['./category-full-view.component.css']
})
export class CategoryFullViewComponent implements OnInit {

  @Input() categoryName:string;
  // categoryDetails:Category;          // why cant we use Category type annotation here ??????????????????????????
  categoryDetails:any;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void { }

  ngOnChanges() {
    if(this.categoryName) {
      this.categoryDetails = this.categoryService.getCategoryByName(this.categoryName);
    }
  }

}
