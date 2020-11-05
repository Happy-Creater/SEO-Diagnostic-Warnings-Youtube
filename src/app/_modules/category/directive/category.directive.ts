import { Directive, Input, ElementRef, Renderer, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { GlobalVariableService } from '../../../_services/global_variable/global-variable.service';
import { RequestService } from '../../../_services/request/request.service';
import * as config from "../../../config/config";
import { CategoryService } from '../service/category.service';
import { setInterval } from 'timers';

@Directive({
  selector: '[category]'
})
export class CategoryDirective implements OnDestroy, AfterViewInit {

  /**
   * Name of category.
   */
  @Input('category')
  name: string;

  /**
   * Global listener.
   */
  globalListener: Subscription;

  categoryListener: Subscription;

  constructor(private request: RequestService, private _elementRef: ElementRef, private _renderer: Renderer, private globalVariable: GlobalVariableService, private router: Router, private categoryService: CategoryService) {
    this.hide();
  }
  status = 0
  hasdo = true
  Enablehotcontent = false;
  ngAfterViewInit(): void {
    this.validateCategory();

    this.categoryListener = this.categoryService.onReload()
      .subscribe(name => {
        if (name == this.name) {
          this.validateCategory();
        }
      });
  }
  ngOnDestroy(): void {
    if (this.globalListener != undefined) {
      this.globalListener.unsubscribe();
    }
    if (this.categoryListener != undefined) {
      this.categoryListener.unsubscribe();
    }


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.name.currentValue === "video-tutor") {
      this.categoryService.settrigger("offsite-opt-blog-automations")
    }
    this.validateCategory();

    // this.SeoComponent.change()
  }

  validateCategory() {
    this.categoryService.getSpecificationCategory()
      .then(specs => {
        this.validateCategoryWithSpecs(specs);
      });
  }

  /**
   * Validate category with specification.
   * @param specs specification of category
   */
  validateCategoryWithSpecs(specs) {
    if (this.globalListener != undefined) {
      this.globalListener.unsubscribe();
    }
    this.globalListener = this.globalVariable.getWebsiteChange().subscribe(websiteItem => {
      let observables: Observable<any>[] = [];
      for (let spec of specs) {
        switch (spec.type) {
          case 'username':
            observables.push(this.validateUsername(spec));
            break;
          case 'account':
            observables.push(this.validateAccount(spec));
            break;
          case 'not-account':
            observables.push(this.validateNotAccount(spec));
            break;
          case 'account & username':
            observables.push(this.validateAccountAndUsername(spec));
            break;
          case 'user-role':
            observables.push(this.validateUserRole(spec));
            break;
          case 'demo':
            observables.push(this.validateDemo(spec));
            break;
          case 'not-demo':
            observables.push(this.validateNotDemo(spec));
            break;
          case 'deactivated':
            observables.push(this.validateDeactivated(spec));
            break;
          case 'deactivated account for user':
            observables.push(this.validateDeactivatedAccountForUser(spec));
            break;
          case 'normal':
            observables.push(this.validateNormal(spec));
            break;
          case 'not-test':
            observables.push(this.validateNotTest(spec));
            break;
          case 'is-mobile-and-is-https':
            observables.push(this.validateIsMobileIsHttps(spec));
            break;
          case 'is-not-mobile':
            observables.push(this.validateIsNotMobile(spec));
            break;
          case 'account & website for user':
            observables.push(this.validateAccountAndWebsiteForUser(spec, websiteItem));
            break;
          case 'account & user-role':
            observables.push(this.validateAccountAndUserRole(spec));
            break;
          case 'offsite-opt-blog-automations':
            observables.push(this.validateblogautomation(spec));
            break;
          case 'seo-onsite-hot-content-optimisation':
            observables.push(this.validatehotcontentOPT(spec, websiteItem));
            break;
        }
      }
      Observable.forkJoin(observables).subscribe((validates) => {
        let isVisibled = true;
        let isDisabled = false;
        let urls = this.router.url.split('/');
        for (let validate of validates) {
          isVisibled = isVisibled && validate.isVisibled;
          isDisabled = isDisabled || validate.isDisabled;
        }

        if (isVisibled) {
          this.show();
          //CLICK CLOSE MENU : MOBILE FIRST
          if (this.name == "seo-mobile-first") {
            let useClick = true;
            if (this.router.url.includes('mobile-first')) {
              /*Nothing*/
            } else {
              this.clickDropMenu("mobile-first");
              useClick = false;
            }

            if (isDisabled && useClick) {
              this.clickDropMenu("mobile-first");
            }
          }
          //CLICK CLOSE MENU : YOUTUBE
          if (this.name == "seo-youtube") {
            let useClick = true;
            if (this.router.url.includes('youtube')) {
              /*Nothing*/
            } else {
              this.clickDropMenu("youtube");
              useClick = false;
            }

            if (isDisabled && useClick) {
              this.clickDropMenu("youtube");
            }
          }

          //CLICK CLOSE MENU : PIRACY CONTENT
          if (this.name == "seo-piracy") {
            let useClick = true;
            if (this.router.url.includes('piracy') && !this.router.url.includes('toolbox-content-piracy')) {
              /*Nothing*/
            } else {
              this.clickDropMenu("piracy");
              useClick = false;
            }

            if (isDisabled && useClick) {
              this.clickDropMenu("piracy");
            }
          }

          //CLICK CLOSE MENU : STAGING
          if (this.name == "seo-staging") {
            let useClick = true;
            if (this.router.url.includes('staging')) {
              /*Nothing*/
            } else {
              this.clickDropMenu("staging");
              useClick = false;
            }

            if (isDisabled && useClick) {
              this.clickDropMenu("staging");
            }
          }
          // CLICK CLOSE MENU : GMB
          if (this.name === 'seo-google-my-business') {
            let useClick = true;
            if (this.router.url.includes('gmb')) {
              /*Nothing*/
            } else {
              this.clickDropMenu('google-bus');
              useClick = false;
            }

            if (isDisabled && useClick) {
              this.clickDropMenu('google-bus');
            }
          }

        } else {
          this.hide();
        }


        if (isDisabled) {
          this.disabled();
          if ((urls.indexOf(this.name) > -1) && (this.name != "seo-staging") && (this.name != "mobile-first") && (this.name != "seo-youtube") && (this.name !== 'seo-google-my-business') && (this.name != "seo-piracy") && (this.name != "sea-keywords-seo-sea-synergy") && (this.name != "seo-keywords-seo-sea-synergy") && (this.name != "sea-words-analysis")) {
            this.globalVariable.isCompletedRoute = true;
            this.router.navigate(['/home', btoa(this.globalVariable.getActiveAccount()), this.globalVariable.getWebId()]);
          } else if ((this.router.url.indexOf('staging') > -1) && (this.name == "seo-staging")) {
            this.router.navigate(['/seo', btoa(this.globalVariable.getActiveAccount()), this.globalVariable.getWebId()]);
          } else if ((this.router.url.indexOf('mobile-first') > -1) && (this.name == "seo-mobile-first")) {
            this.router.navigate(['/seo', btoa(this.globalVariable.getActiveAccount()), this.globalVariable.getWebId()]);
          } else if (this.router.url.indexOf("mobile-first-display-simulator") > -1 && this.name == "is-mobile-and-is-https") {
            this.router.navigate(['/seo', btoa(this.globalVariable.getActiveAccount()), this.globalVariable.getWebId()]);
          } else if ((this.router.url.indexOf('mobile-first') > -1)
            && (this.router.url.indexOf('seo-mobile-first-geolocal-rank') === -1)
            && (this.name == "is-not-mobile")) {
            this.router.navigate(['/seo', btoa(this.globalVariable.getActiveAccount()), this.globalVariable.getWebId()]);
          } else if ((this.router.url.indexOf('youtube') > -1) && (this.name == "seo-youtube")) {
            this.router.navigate(['/seo', btoa(this.globalVariable.getActiveAccount()), this.globalVariable.getWebId()]);
          } else if ((this.router.url.indexOf('gmb') > -1) && (this.name === 'seo-google-my-business')) {
            this.router.navigate(['/seo', btoa(this.globalVariable.getActiveAccount()), this.globalVariable.getWebId()]);
          } else if ((this.router.url.indexOf('piracy') > -1) && !(this.router.url.indexOf('toolbox-content-piracy') > -1) && (this.name == "seo-piracy")) {
            this.router.navigate(['/seo', btoa(this.globalVariable.getActiveAccount()), this.globalVariable.getWebId()]);
          } else if ((this.router.url.indexOf('sea-keywords-seo-sea-synergy') > -1) && (this.name == "sea-keywords-seo-sea-synergy") && (!this.globalVariable.isCompletedRoute)) {
            this.router.navigate(['/sea', btoa(this.globalVariable.getActiveAccount()), this.globalVariable.getWebId()]);
            this.globalVariable.isCompletedRoute = false;
          } else if ((this.router.url.indexOf('seo-keywords-seo-sea-synergy') > -1) && (this.name == "seo-keywords-seo-sea-synergy") && (!this.globalVariable.isCompletedRoute)) {
            this.router.navigate(['/seo', btoa(this.globalVariable.getActiveAccount()), this.globalVariable.getWebId()]);
            this.globalVariable.isCompletedRoute = false;
          } else if ((this.router.url.indexOf('global-search-vision') > -1) && (this.name === 'gsv')) {
            this.router.navigate(['/seo', btoa(this.globalVariable.getActiveAccount()), this.globalVariable.getWebId()]);
          } else if ((this.router.url.indexOf('sea-words-analysis') > -1) && (this.name == "sea-words-analysis") && (!this.globalVariable.isCompletedRoute)) {
            this.router.navigate(['/sea', btoa(this.globalVariable.getActiveAccount()), this.globalVariable.getWebId()]);
            this.globalVariable.isCompletedRoute = false;
          }
        } else {
          this.enabled();
        }
      });
    });

  }



  /**
   * Intersect between two arrays.
   * @param a array a
   * @param b array b
   */
  intersect(a, b) {
    return a.filter((n) => {
      return b.indexOf(n) > -1;
    });
  }

  /**
   * Return username.
   */
  getUsername(): Observable<string> {
    return new Observable<string>(observer => {
      let username = this.globalVariable.getUsername();
      if (username != undefined) {
        observer.next(username);
        observer.complete();
      } else {
        let interval = setInterval(() => {
          username = this.globalVariable.getUsername();
          if (username != undefined) {
            observer.next(username);
            observer.complete();
            clearInterval(interval);
          }
        }, 500);
      }
    });
  }

  /**
   * Validate username.
   * @param spec specification of category
   */
  validateUsername(spec): Observable<any> {
    let isVisibled = false;
    let isDisabled = false;
    return new Observable<any>(observer => {
      this.getUsername().subscribe(username => {
        if (spec.values.indexOf(username) > -1) {
          isVisibled = !this.startsWith(spec.invisibled);
          isDisabled = this.equals(spec.disabled);
        } else {
          isVisibled = true;
          isDisabled = false;
        }
        observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
        observer.complete();
      });
    });
  }

  getAccount(): Observable<string> {
    return new Observable<string>(observer => {
      let account = this.globalVariable.getActiveAccount();
      if (account != undefined) {
        observer.next(account);
        observer.complete();
      } else {
        let interval = setInterval(() => {
          account = this.globalVariable.getActiveAccount();
          if (account != undefined) {
            observer.next(account);
            observer.complete();
            clearInterval(interval);
          }
        }, 500);
      }
    });
  }



  validateAccount(spec): Observable<any> {
    let isVisibled = false;
    let isDisabled = false;
    return new Observable<any>(observer => {
      this.getAccount().subscribe(account => {
        if (spec.values.indexOf(account) > -1) {
          isVisibled = !this.startsWith(spec.invisibled);
          isDisabled = this.equals(spec.disabled);
        } else {
          isVisibled = true;
          isDisabled = false;
        }
        observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
        observer.complete();
      });
    });
  }

  validateNotAccount(spec): Observable<any> {
    let isVisibled = false;
    let isDisabled = false;
    return new Observable<any>(observer => {
      this.getAccount().subscribe(account => {
        if (spec.values.indexOf(account) == -1) {
          isVisibled = !this.startsWith(spec.invisibled);
          isDisabled = this.equals(spec.disabled);
        } else {
          isVisibled = true;
          isDisabled = false;
        }
        observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
        observer.complete();
      });
    });
  }

  validateAccountAndUserRole(spec): Observable<any> {
    return new Observable<any>(observer => {
      Observable.forkJoin(
        this.getAccount(),
        this.getUserRole()
      )
        .finally(() => observer.complete())
        .subscribe(([account, userRole]) => {
          let isDisabled = false;
          if (spec.values.indexOf(account) !== -1 && spec.values.indexOf(userRole) !== -1) {
            isDisabled = this.equals(spec.disabled);
          }

          observer.next({ isVisibled: true, isDisabled: isDisabled });
        });
    });
  }

  validateAccountAndUsername(spec): Observable<any> {
    let isVisibled = false;
    let isDisabled = false;
    return new Observable<any>(observer => {
      Observable.forkJoin(
        this.getAccount(),
        this.getUsername()
      ).subscribe(([account, username]) => {
        if ((spec.values[0] == account) && (spec.values[1] == username)) {
          isVisibled = !this.startsWith(spec.invisibled);
          isDisabled = this.equals(spec.disabled);
        } else {
          isVisibled = true;
          isDisabled = false;
        }
        observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
        observer.complete();
      });
    });
  }

  validateAccountAndWebsiteForUser(spec, websiteItem): Observable<any> {
    let isVisibled = true;
    let isDisabled = false;
    return new Observable<any>(observer => {
      Observable.forkJoin(
        this.getAccount(),
        this.getUserRole(),
        this.getUsername()
      ).subscribe(([account, userRole, username]) => {
        for (let value of spec.values) {
          if (value.account == account) {
            let websites = value.websites;
            if ((websites.indexOf(websiteItem.url) != -1) && (userRole == 'USER') && ((value.notUsernames == undefined) || (value.notUsernames.indexOf(username) == -1))) {
              isDisabled = this.startsWith(spec.disabled);
            }
            break;
          }
        }
        observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
        observer.complete();
      });
    });
  }

  /**
   * Returns user role.
   */
  getUserRole(): Observable<string> {
    return new Observable<string>(observer => {
      let userRole = this.globalVariable.getUserRole();
      if (userRole != undefined) {
        observer.next(userRole);
        observer.complete();
      } else {
        let interval = setInterval(() => {
          userRole = this.globalVariable.getUserRole();
          if (userRole != undefined) {
            observer.next(userRole);
            observer.complete();
            clearInterval(interval);
          }
        }, 500);
      }
    });
  }

  /**
   * Validate user role.
   * @param spec specification of category
   */
  validateUserRole(spec): Observable<any> {
    let isVisibled = false;
    let isDisabled = false;
    return new Observable<any>(observer => {
      this.getUserRole().subscribe(userRole => {
        if (spec.values.indexOf(userRole) > -1) {
          isVisibled = !this.startsWith(spec.invisibled);
          isDisabled = this.equals(spec.disabled)
        } else {
          isVisibled = true;
          isDisabled = false;
        }
        observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
        observer.complete();
      });
    });
  }

  /**
   * Validate demo.
   * @param spec specification of category
   */
  validateDemo(spec): Observable<any> {
    let isVisibled = true;
    let isDisabled = false;
    return new Observable<any>(observer => {
      if (environment.MONETORING_TYPE == 'demo') {
        isVisibled = !this.startsWith(spec.invisibled);
        isDisabled = this.equals(spec.disabled);
      }
      observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
      observer.complete();
    });
  }

  /**
   * Validate not demo.
   * @param spec specification of category
   */
  validateNotDemo(spec): Observable<any> {
    let isVisibled = true;
    let isDisabled = false;
    return new Observable<any>(observer => {
      if (environment.MONETORING_TYPE != 'demo') {
        isVisibled = !this.startsWith(spec.invisibled);
        isDisabled = this.equals(spec.disabled);
      }
      observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
      observer.complete();
    });
  }

  /**
   * Validate normal.
   * @param spec specification of category
   */
  validateNormal(spec): Observable<any> {
    let isVisibled = true;
    let isDisabled = false;
    return new Observable<any>(observer => {
      if (environment.MONETORING_TYPE == 'normal') {
        isVisibled = !this.startsWith(spec.invisibled);
        isDisabled = this.equals(spec.disabled);
      }
      observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
      observer.complete();
    });
  }

  /**
   * Validate not test.
   * @param spec specification of category
   */
  validateNotTest(spec): Observable<any> {
    let isVisibled = true;
    let isDisabled = false;
    return new Observable<any>(observer => {
      if (environment.MONETORING_TYPE != 'test') {
        isVisibled = !this.startsWith(spec.invisibled);
        isDisabled = this.equals(spec.disabled);
      }
      observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
      observer.complete();
    });
  }

  /**
   * Validate deactivated.
   * @param spec specification of category
   */
  validateDeactivated(spec): Observable<any> {
    let isDisabled = false;
    return new Observable<any>(observer => {
      if (environment.MONETORING_TYPE != 'demo') {
        let observable;
        let observableSpecificStatus;
        if (spec.values.indexOf('sea') > -1) {
          observable = this.categoryService.isAnalyzedSEA();
        } else if (spec.values.indexOf('data') > -1) {
          observable = this.categoryService.isAnalyzedData();
        } else if (spec.values.indexOf('logs') > -1) {
          observable = this.categoryService.isAnalyzedLogs();
        } else if (spec.values.indexOf('gsv') > -1) {
          observable = this.categoryService.isEnableGlobalSearchVision();
        } else if (spec.values.indexOf('seo-staging') > -1) {
          observable = this.categoryService.isAnalyzedSeoStaging();
        } else if (spec.values.indexOf('seo-mobile-first') > -1) {
          observableSpecificStatus = this.categoryService.getStatusMobileFirst();
        } else if (spec.values.indexOf('seo-keywords-geolocal') > -1) {
          observable = this.categoryService.isEnableGeolocDesktop();
        } else if (spec.values.indexOf('seo-mobile-first-geolocal-rank') > -1) {
          observable = this.categoryService.isEnableGeolocMobile();
        } else if (spec.values.indexOf('seo-youtube') > -1) {
          observable = this.categoryService.isAnalyzedSeoYoutube();
        } else if (spec.values.indexOf('seo-google-my-business') > -1) {
          observable = this.categoryService.isActiveGoogleMyBusiness();
        } else if (spec.values.indexOf('seo-piracy') > -1) {
          observable = this.categoryService.isActivePiracyContent();
        } else if (spec.values.indexOf('sea-keywords-seo-sea-synergy') > -1) {
          observable = this.categoryService.isEnableSeoSeaSynergy();
        } else if (spec.values.indexOf('seo-keywords-seo-sea-synergy') > -1) {
          observable = this.categoryService.isEnableSeoSeaSynergy();
        } else if (spec.values.indexOf('seo-keywords-geo-rank-overview') > -1) {
          observable = this.categoryService.isEnableSeoGeoRankOverview();
        } else if (spec.values.indexOf('seo-gmb-ranking') > -1) {
          observableSpecificStatus = this.categoryService.getStatusLocalUpGmbRankDesktopMobile();
        } else if (spec.values.indexOf('seo-gmb-sentiment-analysis') > -1) {
          observable = this.categoryService.isEnableLocalUpReviewsSentiment();
        } else if (spec.values.indexOf('sea-words-analysis') > -1) {
          observable = this.categoryService.isEnableSeaSearchTermsAnalysis();
        }

        if (observable != undefined && observableSpecificStatus == undefined) {
          observable.subscribe(isAnalyzed => {
            isDisabled = !isAnalyzed && this.equals(spec.disabled);

            observer.next({ isVisibled: true, isDisabled: isDisabled });
            observer.complete();
          });
        } else if (observableSpecificStatus != undefined) {
          observableSpecificStatus.subscribe(statusSpecific => {
            let isVisibled = true;
            if (statusSpecific == "disappear") {
              isVisibled = false || !this.startsWith(spec.invisibled);
              isDisabled = true && this.startsWith(spec.disabled);
            } else if (statusSpecific == "appear") {
              isVisibled = true || !this.startsWith(spec.invisibled);
              isDisabled = false && this.startsWith(spec.disabled);
            } else if (statusSpecific == "disable") {
              isVisibled = true || !this.startsWith(spec.invisibled);
              isDisabled = true && this.startsWith(spec.disabled);
            }

            observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
            observer.complete();
          });
        } else {
          observer.next({ isVisibled: true, isDisabled: false });
          observer.complete();
        }
      } else {
        observer.next({ isVisibled: true, isDisabled: false });
        observer.complete();
      }
    });
  }

  validateDeactivatedAccountForUser(spec): Observable<any> {
    let isVisibled = true;
    let isDisabled = false;
    return new Observable<any>(observer => {
      Observable.forkJoin(this.getAccount(), this.getUserRole())
        .finally(() => observer.complete())
        .subscribe(([account, userRole]) => {
          if (userRole == 'USER') {
            isDisabled = (spec.values.indexOf(account) > -1) && this.startsWith(spec.disabled);
          }
          observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
        });
    });
  }

  validateIsMobileIsHttps(spec): Observable<any> {
    return new Observable<any>(observer => {

      if (this.name.indexOf('is-mobile-and-is-https') > -1) {
        let observableSpecificStatus = this.categoryService.getStatusMobileFirst();
        if (observableSpecificStatus != undefined) {
          observableSpecificStatus.subscribe(statusSpecific => {
            let isVisibled = true;
            let isDisabled = false;
            if (statusSpecific == "disappear") {
              isVisibled = false || !this.startsWith(spec.invisibled);
              isDisabled = false && this.startsWith(spec.disabled);
            } else if (statusSpecific == "appear") {
              isVisibled = true || !this.startsWith(spec.invisibled);
              isDisabled = false && this.startsWith(spec.disabled);
            } else if (statusSpecific == "disable") {
              isVisibled = true || !this.startsWith(spec.invisibled);
              isDisabled = true && this.startsWith(spec.disabled);
            }

            /**
             * Main condition active only https with mobile responsive.
             */
            if (!(this.globalVariable.getUrl().startsWith('https'))) {
              isVisibled = false || this.equals(spec.invisibled);
              isDisabled = true;
            }

            /**
             * Sub condition hide the when it's not mobile responsive (force by Geolocal condition)
             */
            if (statusSpecific == "enalbeGeoKw") {
              isVisibled = false
              isDisabled = true;
            }

            observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
            observer.complete();
          });
        }
      } else {
        let isVisibled = true;
        let isDisabled = false;
        // isVisibled = false || this.equals(spec.invisibled);
        // isDisabled = true && this.equals(spec.disabled);

        observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
        observer.complete();
      }

    });
  }

  validateIsNotMobile(spec): Observable<any> {
    return new Observable<any>(observer => {

      if (this.name.indexOf('is-not-mobile') > -1) {
        let observableSpecificStatus = this.categoryService.getStatusMobileFirst();
        if (observableSpecificStatus != undefined) {
          observableSpecificStatus.subscribe(statusSpecific => {
            let isVisibled = true;
            let isDisabled = false;
            if (statusSpecific == "disappear") {
              isVisibled = false || !this.startsWith(spec.invisibled);
              isDisabled = false && this.startsWith(spec.disabled);
            } else if (statusSpecific == "appear") {
              isVisibled = true || !this.startsWith(spec.invisibled);
              isDisabled = false && this.startsWith(spec.disabled);
            } else if (statusSpecific == "disable") {
              isVisibled = true || !this.startsWith(spec.invisibled);
              isDisabled = true && this.startsWith(spec.disabled);
            } else if (statusSpecific == "enalbeGeoKw") {
              isVisibled = false;
              isDisabled = true;
            }

            observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
            observer.complete();
          });
        }
      } else {
        let isVisibled = true;
        let isDisabled = false;
        // isVisibled = false || this.equals(spec.invisibled);
        // isDisabled = true && this.equals(spec.disabled);

        observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
        observer.complete();
      }

    });
  }

  /**
   * Returns true if list of names are start with name of category, otherwise false.
   * @param names list of names
   */
  startsWith(names: string[]): boolean {
    for (let name of names) {
      if (this.name.startsWith(name)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Returns true if list of names are equal with name of category, otherwise false.
   * @param names list of names
   */
  equals(names: string[]): boolean {
    for (let name of names) {
      if (this.name == name) {
        return true;
      }
    }
    return false;
  }

  /**
   * Show element.
   */
  show() {
    this._elementRef.nativeElement.parentElement.style.display = 'inline-block';
    this._elementRef.nativeElement.parentElement.removeAttribute('fd');
  }

  /**
   * Hide element.
   */
  hide() {
    this._elementRef.nativeElement.parentElement.style.display = 'none';
    this._renderer.setElementAttribute(this._elementRef.nativeElement.parentElement, 'fd', '');
  }

  /**
   * Remove class disabled of element.
   */
  enabled() {
    this._renderer.setElementClass(this._elementRef.nativeElement, 'disabled', false);
    this._elementRef.nativeElement.removeAttribute('fh');
  }

  /**
   * Add class disabled of element.
   */
  disabled() {
    this._renderer.setElementClass(this._elementRef.nativeElement, 'disabled', true);
    this._renderer.setElementAttribute(this._elementRef.nativeElement, 'fh', '');
  }

  clickDropMenu(id) {
    let p = this._elementRef.nativeElement.querySelector('a span.glyphicon-menu-up');

    if (p == null) {
      var evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0,
        false, false, false, false, 0, null);

      var cb = document.getElementById(id);
      cb.dispatchEvent(evt);
    }
  }
  validatehotcontentOPT(spec, websiteItem): Observable<any> {
    let isVisibled = true;
    let isDisabled = false;
    return new Observable<any>(observer => {
      let observableSpecificStatus = this.categoryService.getStatushotcontent();
      observableSpecificStatus.subscribe(res => {
        if (observableSpecificStatus != null) {
          if (!res) {
            isVisibled = true || !this.startsWith(spec.invisibled);
            isDisabled = true && this.startsWith(spec.disabled);
          }
        } else {
          isVisibled = true || !this.startsWith(spec.invisibled);
          isDisabled = true && this.startsWith(spec.disabled);

        }
        observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
        observer.complete();
      })
    });

  }

  validateblogautomation(spec): Observable<any> {
    let isVisibled = true;
    let isDisabled = false;
    return new Observable<any>(observer => {
      let observableSpecificStatus = this.categoryService.getStatusblogautomation();
      observableSpecificStatus.subscribe(res => {
        if (observableSpecificStatus != null) {
          if (!res) {
            isVisibled = true || !this.startsWith(spec.invisibled);
            isDisabled = true && this.startsWith(spec.disabled);
          }
        } else {
          isVisibled = true || !this.startsWith(spec.invisibled);
          isDisabled = true && this.startsWith(spec.disabled);

        }
        observer.next({ isVisibled: isVisibled, isDisabled: isDisabled });
        observer.complete();
      });
    });

  }
}
