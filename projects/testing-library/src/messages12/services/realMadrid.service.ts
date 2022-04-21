import { Injectable } from "@angular/core";

@Injectable()
export class RealMadridService {
    
    players:string[] = ['Courtoius', 'Alaba', 'Modric', 'Benzema'];

    constructor() {}

    getPlayers() {
        return this.players;
    }

    getTotalPlayers() {
        return this.players.length;
    }

    addPlayer(playerName: string) {
        this.players.push(playerName);
    }

}