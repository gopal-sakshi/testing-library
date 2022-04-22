import { Component, Inject, OnInit } from '@angular/core';
import { CricketEnvironment } from '../../classes/cric-envi';
import { GOP_ENVI } from '../../classes/cric-tokens';
import { SquadsCricketService } from '../../services/squads-cricket.service';

@Component({
  selector: 'lib-squad-cricket',
  templateUrl: './squad-cricket.component.html',
  styleUrls: ['./squad-cricket.component.css']
})
export class SquadCricketComponent extends SquadsCricketService implements OnInit {

  // envi cant be private... it must be protected... both 'SquadCricketComponent' & 'SquadsCricketService' ---> share the same 'envi'
  // plus, investigate this
    // constructor(protected envi: CricketEnvironment)                        -------------> WRONG
    // constructor(@Inject(GOP_ENVI) protected envi: CricketEnvironment)      -------------> RIGHT
  constructor(@Inject(GOP_ENVI) protected envi: CricketEnvironment) {
    super(envi);
   }

  ngOnInit(): void {
    console.log(this.envi);
  }

  addPlayerComp(playerName:string) {
    console.log('jc ',playerName);
    this.addPlayer(playerName);
  }

  deletePlayerComp(playerName:string) {
    this.deletePlayer(playerName);
  }

  getPlayersComp() {
    return this.getPlayers();
  }


}
