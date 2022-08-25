import { Component, OnInit } from '@angular/core';
import { Category } from '../../classes/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'lib-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories:Category[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    })
  }

}
