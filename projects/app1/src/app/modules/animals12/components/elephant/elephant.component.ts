import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elephant',
  templateUrl: './elephant.component.html',
  styleUrls: ['./elephant.component.scss']
})
export class ElephantComponent implements OnInit {

  @Input() images:string[];
  constructor() { }

  ngOnInit(): void {
  }

}
