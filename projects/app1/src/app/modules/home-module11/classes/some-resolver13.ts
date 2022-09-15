import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class SomeResolver13 implements Resolve<Observable<any>> 
{
    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
    //     throw new Error("Method not implemented.");
    // }

    resolve(): Observable<any>  {
        console.log('inside resolve13 class');
        return of('Estadio Santiago Bernabeu');
    }

}