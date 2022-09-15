import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiger',
  templateUrl: './tiger.component.html',
  styleUrls: ['./tiger.component.scss']
})
export class TigerComponent implements OnInit {

  @Input() images:string[];
  constructor() { }

  ngOnInit(): void {
  }

}
