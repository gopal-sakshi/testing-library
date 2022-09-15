import { Injectable } from "@angular/core";

@Injectable()
export class CricEnvironment1 { 

    // appName: 'APP_1';
    // author: 'gopal61288';
    // year?: '2022';                       // I originally had these.... 
                                                // I was struggling why DI not working - for like 2,3 hours
                                                // anyway, know the difference between
                                                    // appName = 'APP_1'            
                                                    // appName: 'APP_1';

    appName = 'APP_1';
    author = 'gopal61288';
    year = '2022';
    
    constructor() {}
    
    getAppName() {
        return this.appName;
    }
}