import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class GlobalViewResolver implements Resolve<any> {
    
    constructor() {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        //return this.transactionService.getById(route.params.id);
        return null;
    }
}