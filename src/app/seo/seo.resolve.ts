import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GlobalVariableService } from '../_services/global_variable/global-variable.service';
import { InitializeService } from '../_services/initialize/initialize.service';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/filter';

@Injectable()
export class SeoResolve implements Resolve<any>{

  constructor(
    private globalVariable: GlobalVariableService,
    private init: InitializeService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return new Observable<any>(observer => {
      this.init.initUserWebsiteByParamData(null, route.params['account'], +route.params['id']);
      this.init.initSuccess.asObservable()
        .filter(isSuccess => isSuccess)
        .first()
        .subscribe(isSuccess => {
          observer.next(isSuccess);
          observer.complete();
        });
    });
  }
}
