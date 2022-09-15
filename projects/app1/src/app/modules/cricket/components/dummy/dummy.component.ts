import { Component, OnInit } from '@angular/core';
import { CricEnvironment1 } from '../../services/cric-envi1.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
  providers: [CricEnvironment1]
})
export class DummyComponent implements OnInit {

  // this component purpose is just to test why cric-envi1.service.ts   
    // dependency injection isnt working ???????????

  constructor(private envi: CricEnvironment1) { }

  ngOnInit(): void {
    console.log(this.envi);
    const blah23 = this.envi.getAppName();
    console.log(blah23);
  }

}
