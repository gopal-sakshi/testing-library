import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from 'projects/products';

@Component({
  selector: 'app-app-products',
  templateUrl: './app-products.component.html',
  styleUrls: ['./app-products.component.scss']
})
export class AppProductsComponent implements OnInit {

  showPTile:boolean = false;
  showPGrid:boolean = false;
  products:Product[];
  
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(res => {
      this.products = res;
    })
  }

}
