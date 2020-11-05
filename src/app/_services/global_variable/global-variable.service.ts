import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { WebsiteItem } from './website-item';

const USER_ID_KEY: string = "userId";
const USERNAME_KEY: string = "username";
const USER_ROLE_KEY: string = "user_role";

@Injectable()
export class GlobalVariableService {

  webId: number;
  account: string;
  url: string;
  lastAccessUrl: string;
  isCompletedRoute: boolean = false;

  websiteChange: BehaviorSubject<WebsiteItem> = new BehaviorSubject(null);
  accountList: BehaviorSubject<Array<string>> = new BehaviorSubject(null);
  lastAccessUrlChange: Subject<string> = new Subject();
  usernameChange: Subject<string> = new Subject();

  constructor() { }

  setUserId(userId: number): void {
    window.localStorage.setItem(USER_ID_KEY, userId == null ? null : userId.toString());
  }

  getUserId(): number {
    const userId = window.localStorage.getItem(USER_ID_KEY);
    return userId == null ? null : +userId;
  }

  setUsername(username: string): void {
    window.localStorage.setItem(USERNAME_KEY, username);
    this.usernameChange.next(username);
  }

  getUsername(): string {
    return window.localStorage.getItem(USERNAME_KEY);
  }
  setUserRole(role: string): void {
    window.localStorage.setItem(USER_ROLE_KEY, role);
  }

  getUserRole(): string {
    return window.localStorage.getItem(USER_ROLE_KEY);
  }

  getActiveAccount(): string {
    return this.account;
  }

  getWebId(): number {
    return this.webId;
  }

  getUrl(): string {
    return this.url;
  }

  getIsCompletedRoute(): boolean {
    return this.isCompletedRoute;
  }

  getLastAccessUrl(): string {
    return this.lastAccessUrl;
  }
  setLastAccessUrl(lastAccessUrl: string): void {
    this.lastAccessUrl = lastAccessUrl;
    this.lastAccessUrlChange.next(lastAccessUrl);
  }

  setWebsiteItem(websiteItem: WebsiteItem): void {
    this.webId = websiteItem.webId;
    this.account = websiteItem.account;
    this.url = websiteItem.url;
    this.websiteChange.next({
      webId: this.webId,
      account: this.account,
      url: this.url
    });
  }

  getWebsiteItem(): Observable<WebsiteItem> {
    return this.websiteChange.asObservable()
      .filter((websiteItem) => (websiteItem != null) && (this.webId === websiteItem.webId) && (this.account === websiteItem.account))
      .take(1);
  }

  getWebsiteChange(): Observable<WebsiteItem> {
    return this.websiteChange.asObservable()
      .filter((websiteItem) => (websiteItem != null) && (this.webId === websiteItem.webId) && (this.account === websiteItem.account));
  }

  setAccountList(arr: Array<string>) {
    this.accountList.next(arr);
  }

  getAccountList(): Array<string> {
    return this.accountList.getValue();
  }
}
