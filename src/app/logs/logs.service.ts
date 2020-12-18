import { Injectable } from '@angular/core';
import { RequestService } from '../_services/request/request.service';
import { GlobalVariableService } from '../_services/global_variable/global-variable.service';
import * as config from '../config/config';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'environments/environment';
import { LogsDemoData } from 'assets/mock-demo/logs-demo';

@Injectable()
export class LogsService {

  public allPeriodDemo: BehaviorSubject<any> = new BehaviorSubject(new LogsDemoData().get_all_period);
  public hasScanInPeriodDemo: BehaviorSubject<any> = new BehaviorSubject(new LogsDemoData().has_scan_in_period);

  constructor(
    private http: RequestService,
    private globalVariable: GlobalVariableService) { }

  getAllPeriod() {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('account', this.globalVariable.getActiveAccount());
    urlSearchParams.append('webId', this.globalVariable.getWebId().toString());
    const param = urlSearchParams.toString();
    if (environment.MONETORING_TYPE === 'demo') {
      return this.allPeriodDemo.asObservable().take(1);
    } else {
      return this.http.get(`${config.SERVICES.logs}/logs/get_all_period?` + param);
    }
  }

  hasScanInPeriod(minDate, maxDate) {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('account', this.globalVariable.getActiveAccount());
    urlSearchParams.append('webId', this.globalVariable.getWebId().toString());
    urlSearchParams.append('startDate', minDate);
    urlSearchParams.append('endDate', maxDate);
    const param = urlSearchParams.toString();
    if (environment.MONETORING_TYPE === 'demo') {
      return this.hasScanInPeriodDemo.asObservable().take(1);
    } else {
      return this.http.get(`${config.SERVICES.logs}/logs/has_scan_in_period?` + param);
    }
  }
}
