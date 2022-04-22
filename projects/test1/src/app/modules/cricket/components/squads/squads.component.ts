import { Component, OnInit } from '@angular/core';
import { SquadCricketComponent } from 'projects/testing-library';
/* 

APPROACH 1
  we import the "SquadCricketComponent"      ------> it is from library... well & good
  but we didnt import the module 'Cricket12Module' inside which this library component 'SquadCricketComponent' exists
    this is bad practice...
  not only that... 
    the library module ---> 'Cricket12Module' ---> expects some 'GOP_ENVI' thingy via its jingChakCricket() method
    if we load the component direcly, where can we provide the 'GOP_ENVI' thingy

  APPROACH 2
    import the Cricket12Module ------> in the 'app.module'    (OR)  football.module.ts   (OR)   animals.module.ts
      in app.module.ts ----> we can give one 'GOP_ENVI' config
      in football.module.ts ---> we can give another 'GOP_ENVI' config
      in animals.module.ts ----> we can give a different 'GOP_ENVI' config
    the particular 'Cricket12Module' behaves differently in each of those modules app, football, animals 
      based on the specific GOP_ENVI config we provided
    

*/

import { CricEnvironment1 } from '../../services/cric-envi1.service';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.scss']
})
export class SquadsComponent extends SquadCricketComponent implements OnInit {

  constructor(protected envi:CricEnvironment1) {
    super(envi)
  }

  /*
      STRUCTURE
        SquadsComponent ----------> getPlayersApp() -------> application
        SquadCricketComponent ----> getPlayersComp() ------> library/component
        SquadsCricketService -----> getPlayers() ----------> library/service
  */

  ngOnInit(): void {
    console.log(this.envi.appName);
    console.log(this.envi);
  }

  getPlayersApp() {
    const result = this.getPlayersComp();
    console.log(result);
  }
  
  addPlayerApp() {
    var blah = (<HTMLInputElement>document.getElementById('add-player')).value;
    console.log(blah);
    this.addPlayerComp(blah);
  }

  deletePlayerApp() {
    var blah = (<HTMLInputElement>document.getElementById('delete-player')).value;
    this.deletePlayerComp(blah);
  }
}
