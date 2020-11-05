import { Injectable, OnDestroy, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Http, Response, URLSearchParams } from '@angular/http';
import { GlobalVariableService } from '../../../_services/global_variable/global-variable.service';
import { RequestService } from '../../../_services/request/request.service';
import * as config from "../../../config/config";
import { environment } from 'environments/environment';
import { SeaService } from 'app/sea/_services/sea.service';
const $ = require('jquery');

@Injectable()
export class CategoryService implements OnDestroy {
  status = 0
  specs = new BehaviorSubject<any>(undefined);
  lock = new BehaviorSubject<boolean>(true);
  validates: any[] = Array(16).fill(false);
  trigger = new BehaviorSubject<string>(undefined);
  globalListener: Subscription;

  constructor(private globalVariable: GlobalVariableService, private requestService: RequestService, private http: Http, private seaService: SeaService) {

    let profile = environment.profile;
    let path = '/assets/specs/category.json';
    if (profile != '') {
      path = '/assets/specs/category.' + profile + '.json';
    }

    this.http.get(path)
      .toPromise()
      .then(response => {
        this.specs.next(response.json());
      });

    this.globalListener = this.globalVariable.getWebsiteChange().subscribe(websiteItem => {
      this.lock.next(true);
      Observable.forkJoin(
        this.validateAnalyzedSEA(websiteItem),
        this.validateAnalyzedData(websiteItem),
        this.validateAnalyzedLogs(websiteItem),
        this.validateHaveStagingWebsite(websiteItem),
        this.validateStatusMobilefirstTab(websiteItem),
        this.validateGeolocDesktop(websiteItem),
        this.validateHaveYoutubeWebsite(websiteItem),
        this.validateGoogleMyBusiness(websiteItem),
        this.validatePiracyContent(websiteItem),
        this.validateSeoSeaSynergy(websiteItem),
        this.validateGlobalSearchVision(websiteItem),
        this.validateLocalUpGmbRankDesktopMobile(websiteItem),
        this.validateLocalUpReviewsSentiment(websiteItem),
        this.validatehotcent(websiteItem),
        this.validateblogautomate(websiteItem),
        this.validateSeaSearchTermsAnalysis(websiteItem),
      ).subscribe((validates) => {
        window['validates_val'] = null; //Clear global value, when user change website.
        this.validates = [];
        this.validates = validates;
        this.lock.next(false);
      });
    });

  }
  ngOnDestroy(): void {
    if (this.globalListener) {
      this.globalListener.unsubscribe();
    }
  }
  /**
   * Returns specification of category.
   */
  getSpecificationCategory(): Promise<any> {
    return new Promise<any>(resolve => {
      this.specs.asObservable()
        .filter(result => (result != undefined))
        .first()
        .subscribe(result => {
          resolve(result);
        });

    });
  }

  /**
   * Validate the SEA part is analyzed or not.
   * @param websiteItem website item
   */
  private validateAnalyzedSEA(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let isAnalyzedSEA = false;
      let account = websiteItem.account;
      let websitesId = websiteItem.webId;
      let url = `${config.SERVICES.SEA}/settings/sea`;
      let item = { username: this.globalVariable.getUsername() };
      let params = new URLSearchParams();
      params.append('method', 'has_account');
      params.append('webId', websitesId.toString());
      params.append('account', account);
      params.append('item', JSON.stringify(item));
      let body = params.toString();
      this.requestService.post(url, body, 10000)
        .subscribe(response => {
          isAnalyzedSEA = (response.hasAccount != undefined) ? response.hasAccount : false;
          observer.next(isAnalyzedSEA);
          observer.complete();
        }, error => {
          observer.next(isAnalyzedSEA);
          observer.complete();
        });
    });
  }

  /**
   * Validate the Data part is analyzed or not.
   * @param websiteItem website item
   */
  private validateAnalyzedData(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let isAnalyzedData = false;
      let params: URLSearchParams = new URLSearchParams();
      params.append('subDomain', websiteItem.account);
      params.append('webId', websiteItem.webId.toString());
      this.requestService.get(`${config.SERVICES.DATA}/data/is_data_tab_enabled`, params, 10000).subscribe(response => {
        if (response.status === 'ok') {
          isAnalyzedData = response.results;
        }
        observer.next(isAnalyzedData);
        observer.complete();
      }, error => {
        observer.next(isAnalyzedData);
        observer.complete();
      });
    });
  }

  /**
   * Validate the Logs part is analyzed or not.
   * @param websiteItem website item
   */
  private validateAnalyzedLogs(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let isAnalyzedLogs = false;
      const params: URLSearchParams = new URLSearchParams();
      params.append('account', websiteItem.account);
      params.append('webId', websiteItem.webId.toString());
      this.requestService.get(`${config.SERVICES.setting_server}/log/is_analyzed_logs`, params, 10000).subscribe(response => {
        if (response) {
          isAnalyzedLogs = response;
        }
        observer.next(isAnalyzedLogs);
        observer.complete();
      }, error => {
        observer.next(isAnalyzedLogs);
        observer.complete();
      });
    });
  }

  private validateHaveStagingWebsite(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let haveStagingWebsite = false;
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('method', 'get_staging_websites');
      urlSearchParams.append('subDomain', websiteItem.account);
      urlSearchParams.append('webId', websiteItem.webId.toString());

      const urlRender = `${config.SERVICES.website_manager}/website/find_staging`;
      this.requestService.get(urlRender, urlSearchParams, 10000).subscribe(stagingWebsiteObj => {

        if (Object.keys(stagingWebsiteObj).length === 0) {
          haveStagingWebsite = false;
        } else {
          haveStagingWebsite = true;
        }
        observer.next(haveStagingWebsite);
        observer.complete();
      }, error => {
        observer.next(haveStagingWebsite);
        observer.complete();
      });

    });
  }

  private validateStatusMobilefirstTab(websiteItem): Observable<boolean> {
    return new Observable<any>(observer => {
      let mobileFirstStatus = "";

      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('method', 'get_status_tab_mobile_first');
      urlSearchParams.append('subDomain', websiteItem.account);
      urlSearchParams.append('webId', websiteItem.webId.toString());

      const urlRender = `${config.SERVICES.website_manager}/website/check_mobile_website`;
      this.requestService.get(urlRender, urlSearchParams, 10000).subscribe(response => {

        mobileFirstStatus = response[0];
        observer.next(mobileFirstStatus);
        observer.complete();
      }, error => {
        observer.next(mobileFirstStatus);
        observer.complete();
      });

    });
  }
  private validateGeolocDesktop(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let result = false;
      const params: URLSearchParams = new URLSearchParams();
      params.append('account', websiteItem.account);
      params.append('webId', websiteItem.webId.toString());
      this.requestService.get(`${config.SERVICES.website_manager}/website/check_seo_keywords_geolocal`, params, 10000)
        .subscribe(response => {
          if (response) {
            result = response;
          }
          observer.next(result);
          observer.complete();
        }, error => {
          observer.next(result);
          observer.complete();
        });
    });
  }

  private validateHaveYoutubeWebsite(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let haveYoutubeWebsite = false;
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('method', 'get_youtube_websites');
      urlSearchParams.append('subDomain', websiteItem.account);
      urlSearchParams.append('webId', websiteItem.webId.toString());

      const urlRender = `${config.SERVICES.website_manager}/website/find_youtube_website`;
      this.requestService.get(urlRender, urlSearchParams, 10000).subscribe(youtubeWebsiteObj => {

        if (Object.keys(youtubeWebsiteObj).length === 0) {
          haveYoutubeWebsite = false;
        } else {
          haveYoutubeWebsite = true;
        }
        observer.next(haveYoutubeWebsite);
        observer.complete();
      }, error => {
        observer.next(haveYoutubeWebsite);
        observer.complete();
      });

    });
  }

  /**
   * Validate the Google My Business is active.
   * @param websiteItem website item
   */
  private validateGoogleMyBusiness(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let isActiveGMB = false;
      const params: URLSearchParams = new URLSearchParams();
      params.append('account', websiteItem.account);
      params.append('webId', websiteItem.webId.toString());
      this.requestService.get(`${config.SERVICES.website_manager}/website/is_active_gmb`, params, 10000).subscribe(response => {
        if (response) {
          isActiveGMB = response;
        }
        observer.next(isActiveGMB);
        observer.complete();
      }, error => {
        observer.next(isActiveGMB);
        observer.complete();
      });
    });
  }


  private validatePiracyContent(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let isActivePiracyContent = false;
      const params: URLSearchParams = new URLSearchParams();
      params.append('account', websiteItem.account);
      params.append('webId', websiteItem.webId.toString());
      this.requestService.get(`${config.SERVICES.piracy_content_duplication_interface}/isActivePiracyContent`, params, 10000).subscribe(response => {
        if (response) {
          isActivePiracyContent = response;
        }
        observer.next(isActivePiracyContent);
        observer.complete();
      }, error => {
        observer.next(isActivePiracyContent);
        observer.complete();
      });
    });
  }

  /**
   * Validate the SEO/SEA Synergy is active.
   * @param websiteItem website item
   */
  private validateSeoSeaSynergy(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let isActiveSeoSeaSynergy = false;
      const params: URLSearchParams = new URLSearchParams();
      params.append('method', "is_seosea_synergy");
      params.append('accountMONETORING', websiteItem.account);
      params.append('url', websiteItem.url);
      this.requestService.get(`${config.SERVICES.SEA}/seo-sea_synergy`, params, 10000).subscribe(response => {
        let result = response.result;
        if (result != undefined && !($.isEmptyObject(result))) {
          if (result.result) {
            isActiveSeoSeaSynergy = result.result;
          }
        }
        observer.next(isActiveSeoSeaSynergy);
        observer.complete();
      }, error => {
        observer.next(isActiveSeoSeaSynergy);
        observer.complete();
      });
    });
  }

  /**
   * Validate the SEA Search Terms Analysis is active.
   * @param websiteItem website item
   */
  private validateSeaSearchTermsAnalysis(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let isActive = false;
      this.seaService.getCustomerId().then(customerId => {
        const params: URLSearchParams = new URLSearchParams();
        let item = {
          databaseName: websiteItem.account,
          websiteId: websiteItem.webId,
          customerId: customerId
        };
        params.append('method', "isactive_analysis");
        params.append("item", encodeURIComponent(JSON.stringify(item)));
        this.requestService.get(`${config.SERVICES.SEA}/searchterms_analysis`, params, 5000).subscribe(response => {
          let result = response.result;
          if (result != undefined && !($.isEmptyObject(result))) {
            if (result.status) {
              isActive = result.status;
            }
          }
          observer.next(isActive);
          observer.complete();
        }, error => {
          observer.next(isActive);
          observer.complete();
        });
      }, error => {
        observer.next(isActive);
        observer.complete();
      });
    });
  }

  private validateGlobalSearchVision(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let isEnableGlobalSearchVision = false;
      const params: URLSearchParams = new URLSearchParams();
      params.append('account', websiteItem.account);
      params.append('webId', websiteItem.webId.toString());
      this.requestService.get(`${config.SERVICES.global_search_vision}/global_search_vision/is_gsv_active`, params, 10000)
        .subscribe(response => {
          if (response) {
            isEnableGlobalSearchVision = response;
          }
          observer.next(isEnableGlobalSearchVision);
          observer.complete();
        }, error => {
          observer.next(isEnableGlobalSearchVision);
          observer.complete();
        });
    });
  }

  private validateLocalUpGmbRankDesktopMobile(websiteItem): Observable<boolean> {
    return new Observable<any>(observer => {
      let isLocalUpGmbRankDesktopMobile = "disable";
      const params: URLSearchParams = new URLSearchParams();

      Observable.forkJoin([
        this.getStatusEnableDesktopRanking(websiteItem),
        this.getStatusEnableMobileRanking(websiteItem)
      ]).subscribe(responseArr => {
        let enableDesktopRanking = responseArr[0];
        let enableMobileRanking = responseArr[1];

        if (enableDesktopRanking == true || enableMobileRanking == true) {
          // console.log('### HELLO INSIDE: ' + enableDesktopRanking + ", " + enableMobileRanking);
          isLocalUpGmbRankDesktopMobile = "appear";
        }
        // console.log('### HELLO TEST: ' + isLocalUpGmbRankDesktopMobile);
        observer.next(isLocalUpGmbRankDesktopMobile);
        observer.complete();
      }, error => {
        observer.next(isLocalUpGmbRankDesktopMobile);
        observer.complete();
      });

    });
  }

  private getStatusEnableDesktopRanking(websiteItem) {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('account', websiteItem.account);
    urlSearchParams.append('webId', websiteItem.webId.toString());
    const param = urlSearchParams.toString();
    return this.requestService.get(`${config.SERVICES.seo_gmb}/ranking/get_status_desktop_ranking?` + urlSearchParams);
  }

  private getStatusEnableMobileRanking(websiteItem) {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('account', websiteItem.account);
    urlSearchParams.append('webId', websiteItem.webId.toString());
    const param = urlSearchParams.toString();
    return this.requestService.get(`${config.SERVICES.seo_gmb}/ranking/get_status_mobile_ranking?` + param);
  }

  private validateLocalUpReviewsSentiment(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let isEnableLocalUpReviewsSentiment = false;
      const params: URLSearchParams = new URLSearchParams();
      params.append('account', websiteItem.account);
      params.append('webId', websiteItem.webId.toString());
      this.requestService.get(`${config.SERVICES.seo_gmb}/sentiment-analysis/get_status_reviews_sentiment`, params, 10000)
        .subscribe(response => {
          if (response) {
            isEnableLocalUpReviewsSentiment = response;
          }
          observer.next(isEnableLocalUpReviewsSentiment);
          observer.complete();
        }, error => {
          observer.next(isEnableLocalUpReviewsSentiment);
          observer.complete();
        });
    });
  }

  /**
   * Returns true if the SEA part is analyzed, otherwise false.
   */
  isAnalyzedSEA(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[0]);
          observer.complete();
        });
    });
  }

  /**
   * Returns true if the Data part is analyzed, otherwise false.
   */
  isAnalyzedData(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[1]);
          observer.complete();
        });
    });
  }

  /**
   * Returns true if the Logs part is analyzed, otherwise false.
   */
  isAnalyzedLogs(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[2]);
          observer.complete();
        });
    });
  }

  /**
   * Returns true if Main website have staging website, otherwise false.
   */
  isAnalyzedSeoStaging(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[3]);
          observer.complete();
        });
    });
  }

  getStatusMobileFirst(): Observable<any> {
    return new Observable<any>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          if (window['validates_val'] != null) {
            this.validates[4] = window['validates_val'].validateStatusMobilefirstTab;
          }
          observer.next(this.validates[4]['status']);
          observer.complete();
        });
    });
  }

  isEnableGeolocDesktop(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          if (window['validates_val'] != null) {
            this.validates[5] = window['validates_val'].validateGeolocDesktop;
          }
          observer.next(this.validates[5]);
          observer.complete();
        });
    });
  }

  isEnableSeoSeaSynergy(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[9]);
          observer.complete();
        });
    });
  }

  isEnableGeolocMobile(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          if (window['validates_val'] != null) {
            this.validates[4] = window['validates_val'].validateStatusMobilefirstTab;
          }
          observer.next(this.validates[4]['enableGeoKw']);
          observer.complete();
        });
    });
  }

  isEnableSeaSearchTermsAnalysis(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[15]);
          observer.complete();
        });
    });
  }

  isAnalyzedSeoYoutube(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[6]);
          observer.complete();
        });
    });
  }

  isActiveGoogleMyBusiness(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[7]);
          observer.complete();
        });
    });
  }

  isActivePiracyContent(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[8]);
          observer.complete();
        });
    });
  }

  isEnableSeoGeoRankOverview(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[5] || this.validates[11] === 'appear');
          observer.complete();
        });
    });
  }


  isEnableGlobalSearchVision(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[10]);
          observer.complete();
        });
    });
  }

  getStatusLocalUpGmbRankDesktopMobile(): Observable<boolean> {

    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          if (window['validates_val'] != null) {
            this.validates[11] = window['validates_val'].validateLocalUpGmbRankDesktopMobile;
          }
          observer.next(this.validates[11]);
          observer.complete();
        });
    });
  }
  isEnableLocalUpReviewsSentiment(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[12]);
          observer.complete();
        });
    });
  }


  getStatushotcontent(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[13]);
          observer.complete();
        });
    });
  }

  getStatusblogautomation(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.lock.asObservable()
        .filter(isLocked => !isLocked)
        .first()
        .subscribe(isLocked => {
          observer.next(this.validates[14]);
          observer.complete();
        });
    });
  }

  reload(name: string) {
    this.trigger.next(name);
    this.lock.next(true);
    this.globalVariable.getWebsiteItem().subscribe(websiteItem => {
      if (name == 'data') {
        this.validateAnalyzedData(websiteItem).toPromise()
          .then(validate => {
            this.validates[1] = validate;
            this.lock.next(false);
          });
      } else if (name == 'seo') {

        /**
         * Reload status enable/disable/... after user change/update setting.
         */
        Observable.forkJoin(
          this.validateStatusMobilefirstTab(websiteItem),
          this.validateGeolocDesktop(websiteItem),
          this.validateLocalUpGmbRankDesktopMobile(websiteItem)
        ).toPromise().then(validates => {
          window['validates_val'] = { validateStatusMobilefirstTab: validates[0], validateGeolocDesktop: validates[1], validateLocalUpGmbRankDesktopMobile: validates[2] };
          this.validates[4] = validates[0];
          this.validates[5] = validates[1];
          this.validates[10] = validates[2];
          this.lock.next(false);
        });
      } else if (name == 'sea') {
        this.validateAnalyzedSEA(websiteItem)
          .toPromise()
          .then(validate => {
            this.validates[0] = validate;
            this.lock.next(false);
          });
      } else if (name == 'sea-words-analysis') {
        this.validateSeaSearchTermsAnalysis(websiteItem)
          .toPromise()
          .then(validate => {
            this.validates[15] = validate;
            this.lock.next(false);
          });
      }
    });
  }

  onReload(): BehaviorSubject<string> {
    return this.trigger;
  }
  settrigger(name) {
    this.trigger.next(name);
  }
  private validatehotcent(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let isenable = false;
      const account = websiteItem.account;
      const params = new URLSearchParams();
      // let url = `http://localhost:8081/New2WebServiceSettingWebSite/setting/websites` + '?';
      let url = `${config.SERVICES.manage_website}/setting/websites` + '?';
      params.append('method', 'get_hot_content');
      params.append('subDomain', account);
      params.append('item', JSON.stringify({ id: websiteItem.webId.toString() }));
      this.requestService.get(url + params.toString()).subscribe(response => {
        if (response.status === 1) {
          isenable = true;
        }
        observer.next(isenable);
        observer.complete();
      }, error => {
        observer.next(isenable);
        observer.complete();
      });
    });
  }

  private validateblogautomate(websiteItem): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let isenable = false;
      const account = this.globalVariable.getActiveAccount();
      const params = new URLSearchParams();
      params.append('method', 'get_blogauto_limit_status');
      params.append('subDomain', account);
      params.append('item', JSON.stringify({ id: this.globalVariable.getWebId().toString() }));
      this.requestService.get(`${config.SERVICES.manage_website}/setting/websites?` + params.toString()).subscribe(response => {
        if (response.status === 1) {
          isenable = true;
        }
        observer.next(isenable);
        observer.complete();
      }, error => {
        observer.next(isenable);
        observer.complete();
      });
    });
  }
}
