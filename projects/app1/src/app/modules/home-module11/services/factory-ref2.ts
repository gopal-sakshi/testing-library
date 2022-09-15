import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class FactoryRef2 {

    heroinesData():Observable<any> {
        console.log('heroinesData() method');
        const date = new Date();
        if(date.getMinutes() % 2 === 0) {
            return of('rashmika');
        } else {
            return of('pooja');
        }
    }

}