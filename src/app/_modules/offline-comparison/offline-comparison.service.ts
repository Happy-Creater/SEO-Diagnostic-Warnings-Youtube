import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { RequestService } from '../../_services/request/request.service';
import { GlobalVariableService } from '../../_services/global_variable/global-variable.service';
import { Http, Headers, ResponseContentType, RequestOptions } from '@angular/http';
import { CustomQueryEncoder } from 'app/_services/request/custom-query-encoder';
import { AuthenticationService } from 'app/_services/authentication/authentication.service';
import * as config from 'app/config/config';
import { HttpClientRequestService } from 'app/_services/http_client_request/http-client-request.service';
@Injectable()
export class OfflineComparisonService {

  upperKeywordPath: string = config.API_M + '/topic_detection_upper_keywords_manager/1.0';
  apiRefreshToken: string = 'fa201c5c-3aba-31ee-a6f0-0d87326a11b2';
   
  constructor(
    private request: RequestService, 
    private globalVariable: GlobalVariableService,
    private http : Http,
    private aut : AuthenticationService,
    private httpClient: HttpClientRequestService) {   }
  getUrlSearchParams() {
    return new URLSearchParams('', new CustomQueryEncoder());
  }

  analyze(content, keywords, randomKey) {
    const urlSearchParams = this.getUrlSearchParams();
    urlSearchParams.append('account', this.globalVariable.getActiveAccount());
    urlSearchParams.append('webId', this.globalVariable.getWebId().toString());
    urlSearchParams.append('randomKey', randomKey);
    urlSearchParams.append('content', content);
    urlSearchParams.append('keywords', keywords);
    return this.httpClient.post(`${config.SERVICES.offline_comparison}/offline-comparison/analyze`, urlSearchParams.toString());
  }

    findWord(content,keywords,randomKey) {
        const params = this.getUrlSearchParams();
        params.append('account', this.globalVariable.getActiveAccount());
        params.append('webId', this.globalVariable.getWebId().toString());
        params.append('randomKey', randomKey);
        
        let input = {"content" : content,"keywords":keywords};
        // params.append('input', JSON.stringify(input));
        // console.log(JSON.stringify(input))
        // return this.http.post(`http://localhost:1044/get_green_word_for_offline_comparison?`+params,input);
                // return this.http.post(`https://cluster-api-center.monetoring.com:1118/get_green_word_for_offline_comparison?`+params,input);
       return this.http.post(`${this.upperKeywordPath}/get_green_word_for_offline_comparison?`+params,input);
      }

      findRootWord(language,texts ) {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', `Bearer ${this.apiRefreshToken}`);
        const options = new RequestOptions({ headers: headers });
       return this.http.post(`https://api.monetoring.com/Data-Pre-Processing/LemmatizerService/1.0/WithoutCache/postLemmatizListWithNormelization?language=`+language,texts,options);
      }

      findRootWords(language,texts ) {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', `Bearer ${this.apiRefreshToken}`);
        const options = new RequestOptions({ headers: headers });
       return this.http.post(`https://api.monetoring.com/Data-Pre-Processing/LemmatizerService/1.0/WithoutCache/postLemmatizWithNormelization?language=`+language,texts,options);
      }
      calculateContentScore(wpOptId,kwSize,greenKwSize){
        const params = this.getUrlSearchParams();
        params.append('account', this.globalVariable.getActiveAccount());
        params.append('webId', this.globalVariable.getWebId().toString());
        params.append('wpOptId', wpOptId);
        params.append('greenKw', greenKwSize);
        params.append('kw', kwSize);
        // return this.http.get(`http://localhost:1044/get_content_score_offline_comparison?`+params);
        return this.http.get(`${this.upperKeywordPath}/get_content_score_offline_comparison?`+params);
      }
      getProgress(randomKey,isClearRandomKey){
        const params = this.getUrlSearchParams();
        params.append('account', this.globalVariable.getActiveAccount());
        params.append('webId', this.globalVariable.getWebId().toString());
        params.append('randomKey', randomKey);
        params.append('isClearRandomKey', isClearRandomKey);

        // return this.http.get(`http://localhost:1044/get_progress_find_greenword_for_offline_comparison?`+params);
        // return this.http.get(`https://cluster-api-center.monetoring.com:1118/get_progress_find_greenword_for_offline_comparison?`+params);
        return this.http.get(`${this.upperKeywordPath}/get_progress_find_greenword_for_offline_comparison?`+params);
      }
}