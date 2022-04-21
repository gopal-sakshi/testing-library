import { Inject, Injectable } from "@angular/core";
import { CricketEnvironment } from "../classes/cric-envi";
import { GOP_ENVI } from "../classes/cric-tokens";

@Injectable()
export class SquadsCricketService {

        playersMeta:any[] = [
        { name: 'Ruturaj', addedBy: '', deletedBy: '', appName: ''},
        { name: 'Robin', addedBy: '', deletedBy: '', appName: ''},
        { name: 'Uthappa', addedBy: '', deletedBy: '', appName: ''},
    ]
    constructor(@Inject(GOP_ENVI) protected envi: CricketEnvironment) {}

    addPlayer(playerName: string) {        
        this.playersMeta.push({name: playerName, addedBy: this.envi.author, appName: this.envi.appName});
        return true;
    }
    deletePlayer(playerName:string) {
        const index = this.playersMeta.findIndex(entry => entry.name === playerName);
        if (index > -1) {
            this.playersMeta.splice(index,1);
            return true;
        }  else {
            console.log('player not found - get lostt');
            return false;
        }
    }
    getPlayers() {
        return this.playersMeta;
    }
}