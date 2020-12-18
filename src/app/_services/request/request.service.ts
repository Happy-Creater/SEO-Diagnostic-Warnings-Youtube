import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Http, Headers, Response, RequestOptions, ResponseContentType, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/timeout';
import { Observable } from 'rxjs';

@Injectable()
export class RequestService {

  constructor(private auth: AuthenticationService,
    private http: Http) { }

  fetchForResponse(url: string, params = null, timeout: number = null, method = 'GET', isBlob = false): Observable<Response> {
    const headers = new Headers();
    const isGet = method.toUpperCase() === 'GET';
    headers.append('Authorization', `Bearer ${this.auth.getAccessToken()}`);
    if (!isGet) {
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    const options = isBlob ?
      new RequestOptions({ headers: headers, responseType: ResponseContentType.Blob })
      : new RequestOptions({ headers: headers });
    let ins;
    if (isGet) {
      if (params) {
        options.params = params;
      }
      ins = this.http.get(url, options);
    } else {
      ins = this.http.post(url, params, options);
    }
    if (timeout != null) {
      ins = ins.timeout(timeout);
    }
    return ins;
  }

  get(url: string, params: URLSearchParams = null, timeout: number = null) {

    let ins = this.fetchForResponse(url, params, timeout);
    return ins.map(response => response.json());
  }

  post(url: string, body, timeout: number = null) {

    let ins = this.fetchForResponse(url, body, timeout, "POST");
    return ins.map(response => response.json());
  }

  getFile(url: string, timeout: number = null) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', `Bearer ${this.auth.getAccessToken()}`);
    const options = new RequestOptions({
      headers: headers,
    });
    let ins = this.http
      .get(url, new RequestOptions({ headers: headers, responseType: ResponseContentType.Blob }));
    if (timeout != null) {
      ins = ins.timeout(timeout);
    }
    return ins.map((res: Response): Blob => {
      return res.ok ? res.blob() : undefined;
    });
  }

  getImage(url: string, params = null, timeout: number = null, method = 'GET') {
    const ins = this.fetchForResponse(url, params, timeout, method, true);
    return ins.map((res: Response) => res.blob());
  }

}
