import { Injectable } from "@angular/core";
import { LibNotification12 } from "testing-library";

@Injectable({
    providedIn: 'root'
})
export class AppNotification12 extends LibNotification12 {
    constructor() {
        super();        
    }

    printName() {
        console.log('this is from app');
        console.log('en pere ',this.name);
    }

    printAge() {
        console.log('age is ',this.age);
    }

    get favouritesList() {
        return this.favourites
    }

    set favouritesList(obj:any) {
        this.favourites.color = obj.color;
        this.favourites.club = obj.club;
        this.favourites.hero = obj.hero;
    }
}