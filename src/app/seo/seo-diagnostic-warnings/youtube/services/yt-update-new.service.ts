import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class YtUpdateNewService {

  base_url: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.base_url = 'http://localhost:1022/youtubeseo/new/';
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Authorization', 'Bearer ' + '8e639670-0530-30f6-9f35-a21d0946be59');
    this.headers = this.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    this.headers = this.headers.set('Access-Control-Allow-Methods', 'GET');
    this.headers = this.headers.set('Access-Control-Allow-Origin', '*');
  }

  updateMetric(websiteYoutubeId: number, account: string, scanDate: string, name: string) {
    const params = new HttpParams()
      .append('websiteYoutubeId', websiteYoutubeId + '')
      .append('account', account)
      .append('scanDate', scanDate)
      .append('name', name);
    return this.http.get(this.base_url + 'updateWarningMetric', {params: params, headers: this.headers});
  }
}
