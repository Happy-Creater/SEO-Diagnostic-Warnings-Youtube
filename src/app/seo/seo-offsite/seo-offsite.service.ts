import { Injectable } from '@angular/core';
import { Response, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { RequestService } from '../../_services/request/request.service';
import { GlobalVariableService } from '../../_services/global_variable/global-variable.service';
import { GlobalDateService } from '../../_services/global_date/global-date.service';
import * as config from '../../config/config';
import { HttpClientRequestService } from 'app/_services/http_client_request/http-client-request.service';
import { HttpParams } from '@angular/common/http';

const SCAN_PROFILES_ID_KEY = 'scanProfilesId';

@Injectable()
export class SeoOffsiteService {

  public scanProfilesIdObservable = new Subject<{ overview: number, refDomains: number, backlinks: number, anchors: number }>();

  constructor(
    private http: HttpClientRequestService,
    private globalVariable: GlobalVariableService,
    private globalDate: GlobalDateService) {
  }

  emitScanProfilesId(scanProfilesId) {
    window.sessionStorage.setItem(SCAN_PROFILES_ID_KEY, JSON.stringify(scanProfilesId));
    this.scanProfilesIdObservable.next(scanProfilesId);
  }

  getScanProfilesId(): { overview: number, refDomains: number, backlinks: number, anchors: number } {
    const obj = window.sessionStorage.getItem(SCAN_PROFILES_ID_KEY);
    const scanProfilesId = obj == null ? { overview: 0, refDomains: 0, backlinks: 0, anchors: 0 } : JSON.parse(obj);
    return scanProfilesId;
  }

  getAllScanProfile() {
    const urlSearchParams = new HttpParams()
      .set('method', 'get_all_scan_profile')
      .set('subDomain', this.globalVariable.getActiveAccount())
      .set('webId', this.globalVariable.getWebId().toString())
      .set('startDate', this.globalDate.getFormatedGlobalDate().start)
      .set('endDate', this.globalDate.getFormatedGlobalDate().end);
    return this.http.get(config.SERVICES.seo_backlink + '/backlink', urlSearchParams);
  }

  getSummary() {
    const urlSearchParams = new HttpParams()
      .set('method', 'get_summary')
      .set('subDomain', this.globalVariable.getActiveAccount())
      .set('webId', this.globalVariable.getWebId().toString())
      .set('startDate', this.globalDate.getFormatedGlobalDate().start)
      .set('endDate', this.globalDate.getFormatedGlobalDate().end);
    return this.http.get(config.SERVICES.seo_backlink + '/backlink', urlSearchParams);
  }

  getOverviewStatistic() {
    const urlSearchParams = new HttpParams()
      .set('method', 'get_overview_statistic')
      .set('subDomain', this.globalVariable.getActiveAccount())
      .set('webId', this.globalVariable.getWebId().toString())
      .set('startDate', this.globalDate.getFormatedGlobalDate().start)
      .set('endDate', this.globalDate.getFormatedGlobalDate().end);
    return this.http.get(config.SERVICES.seo_backlink + '/backlink', urlSearchParams);
  }

  getTopic() {
    const urlSearchParams = new HttpParams()
      .set('method', 'get_topic')
      .set('subDomain', this.globalVariable.getActiveAccount())
      .set('webId', this.globalVariable.getWebId().toString())
      .set('startDate', this.globalDate.getFormatedGlobalDate().start)
      .set('endDate', this.globalDate.getFormatedGlobalDate().end);
    return this.http.get(config.SERVICES.seo_backlink + '/backlink', urlSearchParams);
  }

  genImage() {
    const urlSearchParams = new HttpParams()
      .set('method', 'gen_anchor_image')
      .set('subDomain', this.globalVariable.getActiveAccount())
      .set('webId', this.globalVariable.getWebId().toString())
      .set('item', JSON.stringify({ client: this.globalVariable.getUrl() }));
    return this.http.post(config.SERVICES.seo_backlink + '/backlink', urlSearchParams);
  }

  getRefDomainStatistic() {
    const urlSearchParams = new HttpParams()
      .set('method', 'get_ref_domain_statistic')
      .set('subDomain', this.globalVariable.getActiveAccount())
      .set('webId', this.globalVariable.getWebId().toString())
      .set('startDate', this.globalDate.getFormatedGlobalDate().start)
      .set('endDate', this.globalDate.getFormatedGlobalDate().end);
    return this.http.get(config.SERVICES.seo_backlink + '/backlink', urlSearchParams);
  }

  getBacklinksStatistic() {
    const urlSearchParams = new HttpParams()
      .set('method', 'get_backlinks_statistic')
      .set('subDomain', this.globalVariable.getActiveAccount())
      .set('webId', this.globalVariable.getWebId().toString())
      .set('startDate', this.globalDate.getFormatedGlobalDate().start)
      .set('endDate', this.globalDate.getFormatedGlobalDate().end);
    return this.http.get(config.SERVICES.seo_backlink + '/backlink', urlSearchParams);
  }

  getRefDomain(from) {
    const urlSearchParams = new HttpParams()
      .set('method', 'get_ref_domain')
      .set('subDomain', this.globalVariable.getActiveAccount())
      .set('webId', this.globalVariable.getWebId().toString())
      .set('from', JSON.stringify(from))
      .set('startDate', this.globalDate.getFormatedGlobalDate().start)
      .set('endDate', this.globalDate.getFormatedGlobalDate().end);
    return this.http.get(config.SERVICES.seo_backlink + '/backlink', urlSearchParams);
  }

  getBacklinks(from) {
    const urlSearchParams = new HttpParams()
      .set('method', 'get_backlink')
      .set('subDomain', this.globalVariable.getActiveAccount())
      .set('webId', this.globalVariable.getWebId().toString())
      .set('from', JSON.stringify(from))
      .set('startDate', this.globalDate.getFormatedGlobalDate().start)
      .set('endDate', this.globalDate.getFormatedGlobalDate().end);
    return this.http.get(config.SERVICES.seo_backlink + '/backlink', urlSearchParams);
  }

  getAnchorText(from) {
    const urlSearchParams = new HttpParams()
      .set('method', 'get_anchor_text')
      .set('subDomain', this.globalVariable.getActiveAccount())
      .set('webId', this.globalVariable.getWebId().toString())
      .set('from', JSON.stringify(from))
      .set('startDate', this.globalDate.getFormatedGlobalDate().start)
      .set('endDate', this.globalDate.getFormatedGlobalDate().end);
    return this.http.get(config.SERVICES.seo_backlink + '/backlink', urlSearchParams);
  }

  getAnchorImage() {
    const urlSearchParams = new HttpParams()
      .set('account', this.globalVariable.getActiveAccount())
      .set('client', this.globalVariable.getUrl());
    return this.http.getBlob(`${config.SERVICES.seo_backlink}/backlink/get-anchor-image`, urlSearchParams);
  }

}
