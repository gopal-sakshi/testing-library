import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bear',
  templateUrl: './bear.component.html',
  styleUrls: ['./bear.component.scss']
})
export class BearComponent implements OnInit {

  @Input() images:string[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.images) {
      console.log(this.images);
    }
  }

}
