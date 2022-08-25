import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'lib-p-tile',
  templateUrl: './p-tile.component.html',
  styleUrls: ['./p-tile.component.css']
})
export class PTileComponent implements OnInit {

  @Input() product:Product;

  constructor() { }

  ngOnInit(): void {
  }

}
