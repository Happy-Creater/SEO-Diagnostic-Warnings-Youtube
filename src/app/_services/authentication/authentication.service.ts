import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as config from '../../config/config';

const AUTH_KEY: string = 'auth';
const REFRESH_TOKEN_KEY: string = 'refresh_token';
const ACCESS_TOKEN_KEY: string = 'access_token';

@Injectable()
export class AuthenticationService {


  constructor(private http: Http) {
  }

  clearData() {
    window.localStorage.removeItem(REFRESH_TOKEN_KEY);
    window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  logout(): void {
    // remove user from local storage to log user out
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.location.href = config.loginUrl;
  }

  setRefreshToken(value: string): void {
    window.localStorage[REFRESH_TOKEN_KEY] = value;
  }

  getRefreshToken() {
    return window.localStorage[REFRESH_TOKEN_KEY];
  }

  setAccessToken(value: string): void {
    window.localStorage[ACCESS_TOKEN_KEY] = value;
  }

  getAccessToken() {
    return window.localStorage[ACCESS_TOKEN_KEY];
  }

  isLogin(): boolean {
    return this.getAccessToken() && this.getRefreshToken();
  }

  refreshToken() {
    let refreshToken = this.getRefreshToken();
    if (refreshToken) {
      let body = `grant_type=refresh_token&refresh_token=${refreshToken}`;
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Authorization', 'Basic ' + btoa(`${config.OAUTH2_USERNAME}:${config.OAUTH2_PASSWORD}`));
      let options = new RequestOptions({headers: headers});
      return this.http.post(config.OAUTH2_URL, body, options)
        .map(response => response.json());
    } else {
      return null;
    }
  }
}
