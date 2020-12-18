import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientRequestService {

  constructor(private httpClient: HttpClient) { }

  get(url: string, params: HttpParams = null, timeout: number = null, requestOption = {}) {
    const option = requestOption;
    params = this.cleanParams(params);
    if (params != null) {
      option['params'] = params;
    }
    let header = new HttpHeaders();
    if (timeout != null) {
      header = header.set('timeout', `${timeout}`);
    }
    option['headers'] = header;
    return this.httpClient.get<any>(url, option);
  }

  post(url: string, params: any = null, timeout: number = null, requestOption = {}) {
    const option = requestOption;
    let header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    if (timeout != null) {
      header = header.append('timeout', `${timeout}`);
    }
    option['headers'] = header;
    params = this.cleanParams(params);
    return this.httpClient.post<any>(url, params, option);
  }

  getBlob(url: string, params: HttpParams = null, timeout: number = null): Observable<Blob> {
    return this.get(url, params, timeout, { responseType: "blob" });
  }

  postBlob(url: string, params: any = null, timeout: number = null): Observable<Blob> {
    return this.get(url, params, timeout, { responseType: "blob" });
  }


  cleanParams(params) {
    if (params != null && params instanceof HttpParams) {
      for (const key of params.keys()) {
        if (params.get(key) == null) {
          params = params.delete(key);
        }
      }
    }
    return params;
  }
}
