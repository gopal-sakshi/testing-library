import { Component, OnInit } from '@angular/core';
import { SquadCricketComponent } from 'projects/testing-library';
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
