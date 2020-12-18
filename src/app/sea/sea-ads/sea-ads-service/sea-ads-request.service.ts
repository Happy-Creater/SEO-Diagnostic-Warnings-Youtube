import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { GlobalVariableService } from "app/_services/global_variable/global-variable.service";
import { RequestService } from "app/_services/request/request.service";
import * as config from 'app/config/config';
import { Subject } from 'rxjs';

@Injectable()
export class SeaAdsRequestService {

  getImageObserver: Subject<any> = new Subject();

  constructor(private globalVariable: GlobalVariableService,
    private request: RequestService) { }

  serviceUrl = `${config.SERVICES.SEA}`

  getCampaigns(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", "get_campaigns");
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getAdGroups(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", "get_adgroups");
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getAds(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", "get_ads");
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  createAd(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let param = `account=${encodeURIComponent(this.globalVariable.getActiveAccount())}`;
    param += `&method=create_ad`;
    param += `&webId=${this.globalVariable.getWebId().toString()}`;
    param += `&item=${encodeURIComponent(JSON.stringify(item))}`;
    return this.request.post(url, param);
    // let params: URLSearchParams = new URLSearchParams();
    // params.append("method", "create_ad");
    // params.append("account", this.globalVariable.getActiveAccount());
    // params.append("webId", this.globalVariable.getWebId().toString());
    // params.append("item", JSON.stringify(item));
    // return this.request.post(url, params.toString().replace("+","%2B"));
  }

  updateAd(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", "update_ad");
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getMainTable(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", "get_main_table");
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getMainTableValue(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", "get_main_table_value");
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getProgress(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", item.progress_method);
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getMatchKeywordsAd(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", "get_match_keywords_ad");
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getAllMatchByAd(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", "get_all_match_by_ad");
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getKeywordDetails(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", "get_keyword_details");
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getBubbleBox(item: any, method: string) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", method);
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getBubbleBoxValue(item: any, method: string) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", method);
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getMatchKeywordsAdValue(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", "get_keyword_detail_value");
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  executeBubbleBox(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", 'get_bubble_box');
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getValue(item: any, method: string) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", method);
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getLastAdCreated(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", 'get_last_ad_create');
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getRecommendation(item: any) {
    let url: string = `${this.serviceUrl}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", 'get_recommendation');
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  getFilterCampaigns(item:any, filter:any){
    let url = `${config.SERVICES.SEA}/ads`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", "get_filter_campaigns");
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("item", JSON.stringify(item));
    params.append("filter", encodeURIComponent(JSON.stringify(filter)));
    return this.request.post(url, params.toString());
  }
}
