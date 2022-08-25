import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryFullViewComponent } from './components/category-full-view/category-full-view.component';
import { CategoryService } from './services/category.service';



@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoryFullViewComponent
  ],
  imports: [
    CommonModule              // COMMENT THIS.... now *ngFor will not work
  ],
  exports: [
    CategoriesListComponent,
    CategoryFullViewComponent    
  ],
  providers: [
    CategoryService
  ]
})
export class CategoriesModule { }
