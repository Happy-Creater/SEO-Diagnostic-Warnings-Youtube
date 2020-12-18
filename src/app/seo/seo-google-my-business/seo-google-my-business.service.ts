import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GlobalVariableService } from '../../_services/global_variable/global-variable.service';
import * as config from '../../config/config';
import { environment } from 'environments/environment';
import { GMBDemoData } from 'assets/mock-demo/gmb-demo';
import { BehaviorSubject } from 'rxjs';
import { HttpClientRequestService } from 'app/_services/http_client_request/http-client-request.service';
import { HttpParams } from '@angular/common/http';

const SELECTED_ACCOUNT = 'seoGoogleMyBusinessSelectedAccount';

@Injectable()
export class SeoGoogleMyBusinessService {

  public get_accounts_demo: BehaviorSubject<any> = new BehaviorSubject(new GMBDemoData().get_accounts);

  public selectedAccountObservable = new Subject<String>();

  constructor(
    private http: HttpClientRequestService,
    private globalVariable: GlobalVariableService) { }


  emitSelectedAccount(account: string) {
    window.sessionStorage.setItem(SELECTED_ACCOUNT, account);
    this.selectedAccountObservable.next(account);
  }

  getSelectedAccount(): string {
    return window.sessionStorage.getItem(SELECTED_ACCOUNT);
  }

  getAccounts() {
    const urlSearchParams = new HttpParams()
      .set('account', this.globalVariable.getActiveAccount())
      .set('webId', this.globalVariable.getWebId().toString());
    if (environment.MONETORING_TYPE === 'demo') {
      return this.get_accounts_demo.asObservable().take(1);
    } else {
      return this.http.get(`${config.SERVICES.seo_gmb}/gmb/get_accounts`, urlSearchParams);
    }
  }
}
