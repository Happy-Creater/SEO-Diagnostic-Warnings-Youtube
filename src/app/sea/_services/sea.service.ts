import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { URLSearchParams } from '@angular/http';
import { GlobalVariableService } from 'app/_services/global_variable/global-variable.service';
import { RequestService } from 'app/_services/request/request.service';
import * as config from '../../config/config';
import { SessionStorageHandler } from 'app/_inherit/session-storage-handler';
import { SeaRequest } from './sea-request';

const SEA_SERVICE = 'sea-service';

@Injectable()
export class SeaService extends SessionStorageHandler {

  customerId: BehaviorSubject<number>;
  websitesId: number;
  account: string;
  globalAccounts: any[];

  lockAccounts = new BehaviorSubject<boolean>(true);
  lockUsers = new BehaviorSubject<boolean>(true);

  constructor(private globalVariable: GlobalVariableService, private request: RequestService) {
    super();
  }

  initSession() {
    this.customerId = new BehaviorSubject<number>(undefined);
    let sessionStorage = this.getSessionItem(SEA_SERVICE);
    if (sessionStorage != undefined) {
      let session = JSON.parse(sessionStorage);
      this.customerId.next(session.customerId);
      this.websitesId = session.websitesId;
      this.account = session.account;
    }
  }

  saveSession() {
    let session = {
      customerId: this.customerId.getValue(),
      websitesId: this.websitesId,
      account: this.account
    };
    this.setSessionItem(SEA_SERVICE, JSON.stringify(session));
  }

  init() {
    this.loadGlobalAccounts();
  }

  postRequest(url): SeaRequest {
    return new SeaRequest(url)
      .setAccount(this.globalVariable.getActiveAccount())
      .setWebId(this.globalVariable.getWebId())
      .setRequestService(this.request)
      .setMethod("POST");
  }

  postRequestSEA(path: string): SeaRequest {
    return this.postRequest(config.SERVICES.SEA + path);
  }

  getRequest(url: string, item?: any): SeaRequest {
    return new SeaRequest(url)
      .setAccount(this.globalVariable.getActiveAccount())
      .setWebId(this.globalVariable.getWebId())
      .setRequestService(this.request)
      .setMethod("GET");
  }

  getRequestSEA(path: string): SeaRequest {
    return this.getRequest(config.SERVICES.SEA + path);
  }

  loadGlobalAccounts() {
    this.lockAccounts.next(true);
    let params = new URLSearchParams();
    params.append('username', this.globalVariable.getUsername());
    this.postRequestSEA('/globalView/accounts')
      .setParams(params)
      .asObservable()
      .finally(() => this.lockAccounts.next(false))
      .subscribe(response => {
        this.globalAccounts = response;
        if (this.globalAccounts.length > 0) {
          if ((this.customerId.getValue() == undefined) || ((this.websitesId == undefined) || (this.websitesId != this.globalVariable.getWebId())) || ((this.account == undefined) || (this.account != this.globalVariable.getActiveAccount()))) {
            this.websitesId = this.globalVariable.getWebId();
            this.account = this.globalVariable.getActiveAccount();
            this.setCustomerId(this.globalAccounts[0].customerId);
          } else {
            this.refreshCache(this.customerId.getValue());
          }
        } else {
          this.setCustomerId(undefined);
        }
      });
  }

  refreshCache(customerId: number) {
    if (customerId) {
      let params = new URLSearchParams();
      params.append('cId', customerId.toString());
      this.postRequestSEA('/cache/refresh')
        .setParams(params)
        .asObservable()
        .subscribe();
    }
  }

  getGlobalAccounts(): Promise<any[]> {
    return new Promise<any[]>(resolve => {
      this.lockAccounts.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          resolve(this.globalAccounts);
        });
    });
  }

  getCustomerIdListener(): Observable<number> {
    return this.customerId.asObservable();
  }

  getCustomerId(): Promise<number> {
    return new Promise<number>(resolve => {
      this.lockAccounts.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          resolve(this.customerId.getValue());
        });
    });
  }

  setCustomerId(customerId: number) {
    this.customerId.next(customerId);
    this.refreshCache(customerId);
    this.saveSession();
  }
}
