import { Injectable } from '@angular/core';
import { GlobalVariableService } from '../global_variable/global-variable.service';
import * as config from '../../config/config';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { InitializeWebsiteItem } from './initialize-item';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/first';
import { URLSearchParams } from '@angular/http';
import { AuthenticationService } from 'app/_services/authentication/authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientRequestService } from '../http_client_request/http-client-request.service';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class InitializeService {

  private isInitWebsite: boolean = false;

  initSuccess: BehaviorSubject<boolean> = new BehaviorSubject(false);
  serviceUnavaiable: BehaviorSubject<boolean> = new BehaviorSubject(false);
  ipBlocking: Subject<boolean> = new Subject();
  onSaveProfile: BehaviorSubject<object> = new BehaviorSubject({ tag_name: "", haveImage: false });
  websiteUpdate: BehaviorSubject<InitializeWebsiteItem> = new BehaviorSubject(null);
  adGroupIds: BehaviorSubject<object> = new BehaviorSubject(null);

  constructor(
    private globalVariable: GlobalVariableService,
    private auth: AuthenticationService,
    private translate: TranslateService,
    private httpClientRequest: HttpClientRequestService) { }

  initUserWebsiteByParamData(navigetePath: string, account: string, webId: number) {
    if (!this.isInitWebsite) {
      this.globalVariable.account = atob(account);
      this.globalVariable.webId = webId;
      this.initUserWebsite(navigetePath);
    }

  }

  initUserWebsiteByParam(navigetePath: string, activatedRoute: ActivatedRoute): void {
    if (!this.isInitWebsite) {
      activatedRoute.params.first().subscribe((params: Params) => {
        let webId = +params['id'];
        let account = atob(params['account']);
        this.globalVariable.account = account;
        this.globalVariable.webId = webId;
        this.initUserWebsite(navigetePath);
      });
    }
  }

  initUserWebsite(navigetePath: string, forceInit = false): void {
    if (!this.isInitWebsite || forceInit) {
      this.isInitWebsite = true;
      let userId = this.globalVariable.getUserId();
      const usrManagerParams = new HttpParams().set('id', `${userId}`).set('type', `${config.MONETORING_TYPE}`);
      this.httpClientRequest.get(`${config.SERVICES.user_manager}/users/get`, usrManagerParams)
        .subscribe((response2) => {
          if (response2.status === 'fail') {
            this.serviceUnavaiable.next(true);
            return;
          }
          let role = response2.role;
          this.globalVariable.setUserRole(role);
          let accounts: Array<string> = response2.accounts;
          let isSelectWebsite = false;
          this.globalVariable.setAccountList(accounts);
          /**
           * checking IP address access.
           * if IP is blocked, Redirect to authorized page.
           */
          if (response2.ipBlocking && accounts.length == 0) {
            this.ipBlocking.next(true);
          }
          if (accounts.length == 0) {
            return;
          }

          if (response2.language) {
            this.translate.use(response2.language);
          }
          /**
           * use return because if no any account angular code below is error.
           */

          const url = `${config.SERVICES.website_manager}/website/find-by-account`;
          let searchParams = new HttpParams();
          searchParams = searchParams.set('role', this.globalVariable.getUserRole());
          searchParams = searchParams.set('username', this.globalVariable.getUsername());
          searchParams = searchParams.set('account', accounts.join(', '));

          this.httpClientRequest.post(url, searchParams)
            .subscribe((response3) => {
              let isFirst: boolean = true;
              let tmpObj = {};
              let currentAccount = this.globalVariable.getActiveAccount();
              let currentWebId = this.globalVariable.getWebId();
              for (let i of response3) {
                let mAccount = i.account;
                tmpObj[mAccount] = [];
                for (let j of i.websites) {
                  let webId = j.webId;
                  let url = j.url;
                  let selected: boolean = false;
                  if (currentWebId == null || currentAccount == null) {
                    if (isFirst) {
                      this.globalVariable.setWebsiteItem({
                        webId: webId,
                        account: mAccount,
                        url: url
                      });
                      isFirst = false;
                      selected = true;
                      isSelectWebsite = true;
                    }
                  } else if (currentAccount === mAccount && currentWebId === webId) {
                    this.globalVariable.setWebsiteItem({
                      webId: webId,
                      account: mAccount,
                      url: url
                    });
                    selected = true;
                    isSelectWebsite = true;
                  }
                  let tmp = {
                    webId: webId,
                    url: url,
                    consults: j.consults,
                    global_alert_msg: j.global_alert_msg,
                    global_score: j.global_score
                  };
                  // if (!tmpObj.hasOwnProperty(mAccount)) {
                  //   tmpObj[mAccount] = [];
                  // }
                  tmpObj[mAccount].push(tmp);
                }
                if (currentAccount === mAccount && (!i.websites || i.websites.length === 0)) {
                  const webId = 0;
                  const url = '';
                  this.globalVariable.setWebsiteItem({
                    webId: webId,
                    account: mAccount,
                    url: url
                  });
                  isSelectWebsite = true;
                  let tmp = {
                    webId: webId,
                    url: url,
                    consults: [],
                    global_alert_msg: {},
                    global_score: {}
                  };
                  tmpObj[mAccount].push(tmp);
                }
              }

              // if (JSON.stringify(tmpObj) == '{}') {
              //   this.ipBlocking.next(true);
              // }
              if (!isSelectWebsite && accounts.length) {
                this.globalVariable.setWebsiteItem({
                  webId: 0,
                  account: accounts[0],
                  url: ''
                });
              }
              this.websiteUpdate.next({ data: tmpObj, navigate: navigetePath });
              this.initSuccess.next(true);
            });

        }, error => {
          if (error.status === 401) {
            this.auth.logout();
          } else {
            this.serviceUnavaiable.next(true);
          }
        });
    }
  }

  initUserTagName(item) {
    const urlSearchParams = new HttpParams()
      .set('method', 'get_tag_name')
      .set('subDomain', this.globalVariable.getActiveAccount())
      .set('item', JSON.stringify(item));
    return this.httpClientRequest.get(`${config.SERVICES.manage_user}/setting/user` , urlSearchParams);
  }
}
