import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CATEGORIES_ENUM, Category } from "../classes/category";

@Injectable()
export class CategoryService {

    categories:Category[] = [
        { categoryName:'Fruits', belongsTo: CATEGORIES_ENUM.FOOD, isGstApplicable:false, isPerishable:true },
        { categoryName:'TV', belongsTo: CATEGORIES_ENUM.ELECTRONICS, isGstApplicable:true, isPerishable:false },
        { categoryName:'Processed Foods', belongsTo: CATEGORIES_ENUM.FOOD, isGstApplicable:true, isPerishable:true },
        { categoryName:'Magazines', belongsTo: CATEGORIES_ENUM.BOOKS, isGstApplicable:false, isPerishable:false },
        { categoryName:'Barbie', belongsTo: CATEGORIES_ENUM.TOYS, isGstApplicable:true, isPerishable:false },
        { categoryName:'Mobiles', belongsTo: CATEGORIES_ENUM.ELECTRONICS, isGstApplicable:true, isPerishable:false },
    ]
    constructor() { }

    getCategories():Observable<any> {
        return of(this.categories);
    }

    getCategoryByName(name:string) {
        return this.categories.find(category => category.categoryName == name)
    }
}