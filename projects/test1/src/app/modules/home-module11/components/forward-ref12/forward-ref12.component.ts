import { Component, OnInit } from '@angular/core';
import { FactoryRef1 } from '../../services/factory-ref1';

@Component({
  selector: 'app-forward-ref12',
  templateUrl: './forward-ref12.component.html',
  styleUrls: ['./forward-ref12.component.scss']
})
export class ForwardRef12Component implements OnInit {

  heroes:string[];
  constructor(
    private heroesService:FactoryRef1
  ) { }

  ngOnInit(): void {

    // this.heroesService.heroesData().subscribe(res => function test24(this: any) {
    //   this.heroes = res;
    //   console.log(this.heroes);
    // }.bind(this));

    this.heroesService.heroesData().subscribe(res => {
      this.heroes = res;
      console.log(this.heroes);
    });

  }

}
