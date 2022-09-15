import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { FactoryRef2 } from "./factory-ref2";

@Injectable()
export class FactoryRef1 {

    heroines:string[];
    
    constructor(private heroineService:FactoryRef2) {        
    }

    heroesData():Observable<any> {

        this.heroineService.heroinesData().subscribe(res => {
            this.heroines = res;
        })
        
        console.log('heroesData() method');

        if(this.heroines.includes('rashmika')) {
            return of('nithin', 'naga shaurya', 'mahesh babu', 'allu arjun');
        } else if (this.heroines.includes('pooja')) {
            return of('naga chaitanya', 'ramcharan', 'mahesh babu');
        }

        return of('default value = some telugu heroes');        
    }

}