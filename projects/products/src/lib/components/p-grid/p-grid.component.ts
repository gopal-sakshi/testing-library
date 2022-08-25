import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../classes/product';

@Component({
  selector: 'lib-p-grid',
  templateUrl: './p-grid.component.html',
  styleUrls: ['./p-grid.component.css']
})
export class PGridComponent implements OnInit {

  @Input() product:Product;
  constructor() { }

  ngOnInit(): void {
  }

}
