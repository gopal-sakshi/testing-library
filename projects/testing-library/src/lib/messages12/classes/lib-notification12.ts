import { InjectionToken } from "@angular/core";

export class LibNotification12 {
    name:string;
    age:number;
    favourites: {
        color: string;
        club: string;
        hero: string;        
    };

    constructor() {
        this.name = 'GopAL';
        this.age = 33;
    }

    printName() {
        console.log('name is ',this.name);
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

export const some_injection_token = new InjectionToken<LibNotification12>('some_injection_token');
