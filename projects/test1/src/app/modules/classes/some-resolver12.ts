import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class SomeResolver12 implements Resolve<Observable<any>> 
{
    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
    //     throw new Error("Method not implemented.");
    // }

    resolve(): Observable<any>  {
        console.log('inside resolve class');
        return of('13 CL for Real Madrid');
    }

}