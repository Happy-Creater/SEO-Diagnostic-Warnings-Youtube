import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ytScore, ytWarningProblem} from './models/youtube_model';

@Injectable()
export class GetYoutubeService {

  base_url: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.base_url = 'https://api.monetoring.com/youtubeseowarning/1.0/new/';
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Authorization', 'Bearer ' + '8e639670-0530-30f6-9f35-a21d0946be59');
    this.headers = this.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    this.headers = this.headers.set('Access-Control-Allow-Methods', 'GET');
    this.headers = this.headers.set('Access-Control-Allow-Origin', '*');
  }

  getScore(websiteYoutubeId: number, account: string, dateStart?: string, dateEnd?: string): Observable<ytScore[]> {
    let params = new HttpParams()
      .append('websiteYoutubeId', websiteYoutubeId + '')
      .append('account', account);
    if (dateStart) {
      params = params.append('dateStart', dateStart);
    }
    if (dateEnd) {
      params = params.append('dateEnd', dateEnd);
    }
    return this.http.get<ytScore[]>(this.base_url + 'GetYoutubeScore', {params: params, headers: this.headers});
  }

  getWarning(websiteYoutubeId: number, account: string, dateStart?: string, dateEnd?: string): Observable<ytWarningProblem[]> {
    let params = new HttpParams()
      .append('websiteYoutubeId', websiteYoutubeId + '')
      .append('account', account);
    if (dateStart) {
      params = params.append('dateStart', dateStart);
    }
    if (dateEnd) {
      params = params.append('dateEnd', dateEnd);
    }
    return this.http.get<ytWarningProblem[]>(this.base_url + 'WarningsProblemSum', {params: params, headers: this.headers});
  }
}
