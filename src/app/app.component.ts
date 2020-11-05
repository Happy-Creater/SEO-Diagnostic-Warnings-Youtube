import { Component, OnInit, ViewChild, NgZone, ElementRef, Input } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { AuthenticationService } from './_services/authentication/authentication.service';
import { GlobalVariableService } from './_services/global_variable/global-variable.service';
import { ModalStandardComponent } from './_modules/modal-standard/modal-standard.component';
import { IMyOptions } from 'mydatepicker';
import { InitializeService } from './_services/initialize/initialize.service';
import { GlobalDateService } from './_services/global_date/global-date.service';
import { GlobalDateItem } from "./_services/global_date/global-date-object";
import 'rxjs/add/operator/filter';
import * as config from 'app/config/config';
import { environment } from '../environments/environment';
import { setTimeout } from 'timers';
import { MessageService } from 'app/_services/messages/message-service.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SeaAdsRequestService } from './sea/sea-ads/sea-ads-service/sea-ads-request.service';
import { Subscription } from 'rxjs';
import { SeaService } from './sea/_services/sea.service';
import { HttpClientRequestService } from './_services/http_client_request/http-client-request.service';
import { HttpParams } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { GlobalFilterService } from './sea/sea-global-filter/services/global-filter.service';

import { UserhistoryService } from './_services/userhistory/userhistory.service';
const moment: any = require('moment');
const $ = require('jquery');
const Highcharts = require('highcharts');

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	providers: [SeaAdsRequestService],
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	@ViewChild("periodDialog")
	modalPeriod: ModalStandardComponent;

	@ViewChild("websiteDialog")
	modalWebsite: ModalStandardComponent;

	@ViewChild('searchBox')
	searchBox: ElementRef;

	@Input() statusCalendar: boolean;

	modalOptions = { showHeader: false, showFooter: false, width: "500px" };
	websiteList: Object = {};
	accountList: Array<Object> = [];
	totalAccountList: Array<Object> = [];

	myDatePickerOptions: IMyOptions = {
		dateFormat: 'dd mmm yyyy',
		width: '45%',
		selectionTxtFontSize: "14px",
		sunHighlight: false,
		inline: false,
		openSelectorOnInputClick: true
	};
	current = moment();
	optionsDatepicker: any;
	comp1: Object;
	comp2: Object;
	pero1: Object;
	pero2: Object;

	webId: number;
	url: string;
	account: string;
	username: string;
	showFilterMenu: boolean = false;
	showSettingMenu: boolean = false;
	showProfileMenu: boolean = false;
	disabledDate: boolean = false;
	encodedAccount: string;
	checkedWebId: number;

	// website modal attribute
	modalWebsiteList: Array<Object> = null;
	modalWebsiteAccount: string = null;

	isInit: boolean = false;

	isFirstDateInit = true;

	showFooter = false;

	daterange: GlobalDateItem = {
		start: undefined,
		end: undefined,
		startCompareTo: undefined,
		endCompareTo: undefined
	};

	dateRangeObj;

	currentModule: string;
	firstScanDate: string;
	lastScanDate: string;
	dateRangePreviousScan: GlobalDateItem;

	jqueryEnterKeyPress;
	jquerySpaceKeyPress;

	USER_ROLE;
	ipBlocking: boolean;
	PROFILE_LOGO: SafeResourceUrl = "/assets/images/icon-profile.png";
	profileClass = "img-circle";
	tag_name = "";

	search: string = '';

	completeGetScanDate = false;

	/**
	 * Global filter for SEA
	 */
	campaingService: Subscription;
	globalFilterSettingService: Subscription;
	isSea = false;
	campaigns_dropdown: any = {};
	isHoverGlobalFilter: boolean = false;
	isDisableGlobalFilter: boolean = true;

	customerId: number;
	isEdgeOrIE: boolean;

	//userhistory
	uuid: String
	thisYear = moment(new Date()).format('YYYY');
	constructor(private auth: AuthenticationService,
		private router: Router,
		private globalVariable: GlobalVariableService,
		private globalDate: GlobalDateService,
		private init: InitializeService,
		private request: HttpClientRequestService,
		private ngZone: NgZone,
		private _elementRef: ElementRef,
		private messageService: MessageService,
		private translate: TranslateService,
		private sanitizer: DomSanitizer,
		private service: SeaAdsRequestService,
		private seaService: SeaService,
		private userhistoryService: UserhistoryService,
		private globalFilterService: GlobalFilterService
	) {
		window['appGlobalComponentRef'] = { component: this, zone: ngZone };

		this.dateRangePreviousScan = {
			start: new Date(moment(new Date(this.current.clone().subtract(3, 'month'))).format('YYYY-MM-DD')),
			end: new Date(moment(new Date(this.current)).format('YYYY-MM-DD')),
			startCompareTo: undefined,
			endCompareTo: undefined
		};

		// translate
		translate.setDefaultLang('en');
		translate.use('en');
		translate.onLangChange.asObservable().subscribe((event: LangChangeEvent) => {
			if (this.optionsDatepicker) {
				this.optionsDatepicker = null;
				setTimeout(() => {
					this.optionsDatepicker = this.getOptionsDatepicker();
					this.addRadioButtonDatepicker();
				}, 10);
			}
		});

		// set default highcharts options
		Highcharts.setOptions({
			plotOptions: {
				series: {
					animation: { duration: 500 }
				}
			}
		});
	}

	ngAfterViewInit() {
		/**
		 * Modify 'block-clear' class from global.css for website searching textfield.
		 * (The 'block-clear' class was in 'textbox-clearable' derective.)
		 */
		let blockClear = this._elementRef.nativeElement.parentElement.querySelector('div.block-clear');
		blockClear.style.width = '100%';
		blockClear.style.marginTop = '10px';
		this.uuid = this.userhistoryService.start();
	}

	ngOnInit() {


		this.username = this.globalVariable.getUsername();
		this.globalVariable.usernameChange.subscribe(username => this.username = username);

		// Website Change Listener
		this.globalVariable.websiteChange.subscribe(websiteObj => {
			if (websiteObj) {
				this.webId = websiteObj.webId;
				this.url = websiteObj.url;
				this.account = websiteObj.account;
				this.encodedAccount = btoa(websiteObj.account);
				this.USER_ROLE = this.globalVariable.getUserRole();
				if (!this.firstScanDate && !this.lastScanDate) {
					this.getScanDateBeforeChangeWebsite(websiteObj.account, websiteObj.webId, websiteObj.url, false /* changeWebsite */);
				}
			}
		});
		// update current URL
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				event = event
				this.userhistoryService.update(this.uuid, event)

				//Restore to top of page.
				window.scrollTo(0, 0);
				if (/^\/(?:data|seo|sea|logs|settings|profile|global-search-vision)\/.+/.test(event.url)) {
					this.globalVariable.setLastAccessUrl(event.url);
					this.showFilterMenu = true;
				} else {
					this.showFilterMenu = false;
				}

				if (this.webId) {
					this.setDefaultDateByModule(event);
					this.showFooter = true;
				}

				/**
				 * Set variable 'isSEA' to show global filter.
				 */
				this.isSea = /^\/(?:sea)\/.+/.test(event.url) ? true : false;
				this.disabledDate = this.isSea && event.url.indexOf('searchterms') == -1
				if (this.isSea) {
					this.setDefaultDateByModule(this.router, false);
				}

				// counter hit
				try {
					window['yaCounter46927989'].hit(event.url); // new2
					window['yaCounter48614666'].hit(event.url); // product
				} catch (e) { }


			}
		});
		// Fetch website list
		this.init.websiteUpdate.asObservable()
			.filter(obj => obj !== null)
			.subscribe(obj => {
				this.websiteList = obj.data;
				let tmpAccounts = [];
				for (let entry in this.websiteList) {
					tmpAccounts.push(entry);
				}
				tmpAccounts.sort();
				this.accountList = tmpAccounts;
				this.totalAccountList = tmpAccounts;
				this.isInit = true;
				if (obj.navigate && this.account != null && this.webId != null) {
					this.router.navigate([obj.navigate, this.encodedAccount, this.webId]);
				}

			});

		this.init.initSuccess.asObservable()
			.first(isSuccess => isSuccess)
			.subscribe(isSuccess => {
				const decodeToken = jwt_decode(this.auth.getAccessToken());
				const exp = +decodeToken.exp * 1000;
				setInterval(() => {
					if (+ new Date() > exp) {
						this.auth.logout();
					}
				}, 60000);

			});

		this.init.ipBlocking.subscribe(isBlock => {
			if (isBlock) {
				this.ipBlocking = true;
			}
		});

		/**
		 * Service Unavaiable
		 */
		this.init.serviceUnavaiable.asObservable()
			.filter(unavaiable => unavaiable)
			.subscribe(unavaiable => {
				this.isInit = true;
				this.router.navigate(['/unavaiable'])
			});
		/**
		 * Initial profile.
		 */
		let customerIdListener: Subscription;
		this.globalVariable.getWebsiteChange().subscribe(() => {
			this.userhistoryService.update(this.uuid, "updateweb");
			this.setProfileImage();
			let item = {
				id: this.globalVariable.getUserId()
			}
			this.init.initUserTagName(item).subscribe(response => {
				if (response.tag_name == null) return;
				this.username = response.tag_name.length > 0 ? `${response.tag_name} (${this.globalVariable.getUsername()})` : this.globalVariable.getUsername();
			});

			this.seaService.init();

			if (customerIdListener != undefined) {
				customerIdListener.unsubscribe();
			}

			customerIdListener = this.seaService.getCustomerIdListener()
				.subscribe(customerId => {
					if (customerId != undefined) {
						if (this.customerId != customerId || this.globalVariable.getWebId() != this.checkedWebId) {
							this.checkedWebId = this.webId;
							this.customerId = customerId;
							if (this.campaingService) {
								this.campaingService.unsubscribe();
							}
							if (this.globalFilterSettingService) {
								this.globalFilterSettingService.unsubscribe();
							}
							this.globalFilterService.resetFiltering();

							/**
							 * Campaign for global filter.
							 */
							this.campaigns_dropdown = [];
							this.isDisableGlobalFilter = true;

							this.campaingService = this.service.getCampaigns({ customerId: customerId, status: ["ENABLED"] }).subscribe(data => {
								data.campaigns.forEach(element => {
									this.campaigns_dropdown.push(element);
								});
								this.campaigns_dropdown.sort(this.compare);
								this.globalFilterService.setCampaigns(this.campaigns_dropdown);
								this.globalFilterSettingService = this.globalFilterService.getGlobalFilterSettings({ customerId: customerId }).subscribe(data => {
									let globalSetting = data.globalFilterSetting;
									this.globalFilterService.setIsEnabledOnlyCampaign(globalSetting == undefined || $.isEmptyObject(globalSetting));
									this.isDisableGlobalFilter = false;
								});
								this.globalFilterService.initGlobalFilterObj();
							});
						}
					}
				});
		});

		this.init.onSaveProfile.subscribe(data => {
			let obj = JSON.parse(JSON.stringify(data));
			if (obj.haveImage) {
				this.setProfileImage();
			}
			this.username = obj.tag_name.length > 0 ? `${obj.tag_name} (${this.globalVariable.getUsername()})` : this.globalVariable.getUsername();
		});

		// jquery add event on classChanged
		(function (func) {
			$.fn.addClass = function () { // replace the existing function on $.fn
				func.apply(this, arguments); // invoke the original function
				this.trigger('classChanged'); // trigger the custom event
				return this; // retain jQuery chainability
			}
		})($.fn.addClass); // pass the original function as an argument

		(function (func) {
			$.fn.removeClass = function () {
				func.apply(this, arguments);
				this.trigger('classChanged');
				return this;
			}
		})($.fn.removeClass);
		//
		// jquery add event on show
		(function (func) {
			$.fn.show = function () {
				func.apply(this, arguments);
				this.trigger('show');
				return this;
			}
		})($.fn.show);

		// jquery add event on hide
		(function (func) {
			$.fn.hide = function () {
				func.apply(this, arguments);
				this.trigger('hide');
				return this;
			}
		})($.fn.hide);

		if ((environment.MONETORING_TYPE == 'test' || environment.MONETORING_TYPE == 'normal') && !(location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "")) {
			this.addAnalyticsScript();
		}

		this.messageService.listen().subscribe((m: any) => {
			if (m == 'evaluation') {
				this.optionsDatepicker = this.getOptionsDatepicker();
				this.addRadioButtonDatepicker();
			} else if (m == 'pie') {
				this.optionsDatepicker = null;
			} else if (m == 'refreshSeoCalendar') {
				this.refreshCalendarSEOWhenRedirectSeoWebsite();
			}
		});

		if (document['documentMode'] || /Edge/.test(navigator.userAgent)) {
			this.isEdgeOrIE = true;
		}
	}


	logout() {
		this.userhistoryService.logout();
		this.auth.logout();
	}

	onModalShow() {
		let now = new Date();
		this.comp1 = this.comp2 = this.pero1 = this.pero2 = {
			date: {
				year: now.getFullYear(),
				month: now.getMonth() + 1,
				day: now.getDate()
			}
		};
	}

	selectAccountModal(account: string, selectFromModal = false) {
		this.modalWebsiteAccount = account;
		this.modalWebsiteList = this.search.length > 0 ? account.toLowerCase().indexOf(this.search) > -1 ? this.websiteList[account] : this.websiteList[account].filter(websiteObj => websiteObj.url.toLowerCase().indexOf(this.search) > -1) : this.websiteList[account];
		if (selectFromModal && (!this.modalWebsiteList || this.modalWebsiteList.length === 0)) {
			this.selectWebsiteModal({ webId: 0, url: '' });
		}
	}

	selectWebsiteModal(param) {
		let account = this.modalWebsiteAccount;
		let webId = parseInt(param.webId);
		let url = param.url;
		if (account !== this.account || webId !== this.webId) {
			this.changeWebsite(account, webId, url);
		}
		this.modalWebsite.hide();
	}

	onModalWebsiteShow() {
		setTimeout(() => {
			this.searchBox.nativeElement.focus();
		}, 100);
		if (this.account) {
			this.modalWebsiteList = this.modalWebsiteAccount ? this.search.length > 0 ? this.modalWebsiteAccount.toLowerCase().indexOf(this.search) > -1 ? this.websiteList[this.modalWebsiteAccount] : this.websiteList[this.modalWebsiteAccount].filter(websiteObj => websiteObj.url.toLowerCase().indexOf(this.search) > -1) : this.websiteList[this.modalWebsiteAccount] : this.websiteList[this.account];
			this.modalWebsiteAccount = this.modalWebsiteAccount ? this.modalWebsiteAccount : this.account;
		} else {
			this.modalWebsiteList = null;
			this.modalWebsiteAccount = null;
		}
	}


	showWebsiteDialog(event: MouseEvent) {
		this.search = '';
		this.searchAccountWebsite(this.search);
		this.modalWebsite.setPosition(event.clientY + 20, event.clientX - 500);
		this.modalWebsite.show();
	}

	private getScanDateBeforeChangeWebsite(account: string, webId: number, url: string, changeWebsite = true) {
		this.completeGetScanDate = false;
		try {
			const urlSearchParams = new HttpParams()
				.set('account', account)
				.set('webId', webId.toString());
			this.request.get(`${config.SERVICES.manage_calendar}/calendar/get_scan_date`, urlSearchParams).subscribe(res => {
				if (res.first_date) {
					this.firstScanDate = res.first_date;
				} else {
					this.firstScanDate = moment(new Date()).format('YYYY-MM-DD');
				}
				if (res.last_date) {
					this.lastScanDate = res.last_date;
					this.current = moment(this.lastScanDate);
					this.dateRangePreviousScan = {
						start: new Date(moment(new Date(this.current.clone().subtract(3, 'month'))).format('YYYY-MM-DD')),
						end: new Date(moment(new Date(this.current)).format('YYYY-MM-DD')),
						startCompareTo: undefined,
						endCompareTo: undefined
					};
				} else {
					this.lastScanDate = moment(new Date()).format('YYYY-MM-DD');
				}
				this.setDefaultDateByModule(this.router, changeWebsite);
				if (changeWebsite) {
					this.globalVariable.setWebsiteItem({
						webId: webId,
						url: url,
						account: account
					});
				}
				this.completeGetScanDate = true;
			}, error => {
				this.firstScanDate = moment(new Date()).format('YYYY-MM-DD');
				this.lastScanDate = moment(new Date()).format('YYYY-MM-DD');
				this.setDefaultDateByModule(this.router, changeWebsite);
				if (changeWebsite) {
					this.globalVariable.setWebsiteItem({
						webId: webId,
						url: url,
						account: account
					});
				}
				this.completeGetScanDate = true;
			});
		} catch (e) {
			this.firstScanDate = moment(new Date()).format('YYYY-MM-DD');
			this.lastScanDate = moment(new Date()).format('YYYY-MM-DD');
			this.setDefaultDateByModule(this.router, changeWebsite);
			if (changeWebsite) {
				this.globalVariable.setWebsiteItem({
					webId: webId,
					url: url,
					account: account
				});
			}
		}
	}

	private changeWebsite(account: string, webId: number, url: string): void {
		let mUrl = this.router.url;
		let appRouter = mUrl.replace(RegExp("(/[^/]+).*"), "$1");
		let childRouterTarget = mUrl.replace(RegExp("/[^/]+?/[^/]+?/\\d+?/([a-zA-Z0-9_-]+).*"), "$1");
		// console.log('>>>>>>>>>>>> appRouter = ' + appRouter + ", childRouterTarget=" + childRouterTarget);

		if (appRouter == "/seo" && (childRouterTarget == "youtube" || childRouterTarget == "gmb")) {
			let childRouter = mUrl.replace(RegExp("/[^/]+?/[^/]+?/\\d+?/([a-zA-Z0-9_-]+)"), "$1"); //ex. youtube/rankp-checker
			let arrChildRouter = childRouter.split("/");
			this.router.navigate([appRouter, btoa(account), webId, arrChildRouter[0], arrChildRouter[1]]);
		} else {
			let childRouter = mUrl.replace(RegExp("/[^/]+?/[^/]+?/\\d+?/([a-zA-Z0-9_-]+).*"), "$1");
			this.router.navigate([appRouter, btoa(account), webId, childRouter]);
		}

		this.account = account;
		this.webId = webId;
		this.getScanDateBeforeChangeWebsite(account, webId, url);
		if (this.isSea) {
			this.setDefaultDateByModule(this.router, false);
		}
		//this.router.navigate(['/dummy']);
		// setTimeout(() => this.router.navigate([appRouter, btoa(account), webId, childRouter]), 500);
	}

	setDefaultDateByModule(router, isWebsiteChanged = false) {
		let today = moment(moment(new Date()).format('YYYY-MM-DD'));
		this.dateRangeObj = {
			'threePreviousMonths': [this.current.clone().subtract(3, 'month').date(1), this.current],
			'previousPeriod': [null, null],
			'sixPreviousMonths': [this.current.clone().subtract(6, 'month').date(1), this.current],
			'previousScan': [this.current.clone().subtract(3, 'month'), this.current],
			'beginProject': [new Date(this.firstScanDate), this.current],
			'previousMonth': [this.current.clone().subtract(1, 'month').date(1), this.current],
			'previousYear': [this.current.clone().subtract(1, 'year').month(0).date(1), this.current],
			'lastMonth': [today.clone().subtract(1, 'month').startOf('month'), today.clone().subtract(1, 'month').endOf('month')],
			'last30Days': [today.clone().subtract(30, 'days'), today.clone().subtract(1, 'days')],
			'lastThreeMonths': [today.clone().subtract(3, 'month').startOf('month'), today.clone().subtract(1, 'month').endOf('month')],
			'lastSixMonths': [today.clone().subtract(6, 'month').startOf('month'), today.clone().subtract(1, 'month').endOf('month')],
		};
		if (/^\/(?:home)\/.+/.test(router.url)) {
			if (this.currentModule != 'home') {
				this.currentModule = 'home';
			}
		} else if (/^\/(?:data)\/.+/.test(router.url)) {
			if (this.currentModule != 'data') {
				this.isFirstDateInit = true;
				this.currentModule = 'data';
				this.globalDate.setCurrentModule(this.currentModule);
			}
			const date = this.globalDate.getGlobalDateByModule(this.currentModule);
			if (!date) {
				let endDate = new Date(this.current.clone().subtract(1, 'days'));
				this.daterange.start = new Date(moment(endDate).subtract(29, 'days'));
				this.daterange.end = endDate;
				this.saveSelectedDateCompare(3, undefined, undefined);
			} else {
				this.daterange.start = new Date(date.start);
				this.daterange.end = new Date(date.end);
				this.daterange.startCompareTo = date.startCompareTo ? new Date(date.startCompareTo) : undefined;
				this.daterange.endCompareTo = date.endCompareTo ? new Date(date.endCompareTo) : undefined;
				this.globalDate.setGlobalDate(this.daterange, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
			}
		} else if (/.*\/youtube\/.*/.test(router.url)) {

			if (this.currentModule != 'youtube') {
				this.isFirstDateInit = true;
				this.currentModule = 'youtube';
				this.globalDate.setCurrentModule(this.currentModule);
			}

			if (isWebsiteChanged || this.isFirstDateInit) {
				this.validateDateScanningWebsite(this.account, this.webId, this.url);
			}

		} else if (/.*staging-.*/.test(router.url)) {

			if (this.currentModule != 'staging') {
				//console.log('HELLO B*13');
				this.isFirstDateInit = true;
				this.currentModule = 'staging';
				this.globalDate.setCurrentModule(this.currentModule);
			}
			// const date = this.globalDate.getGlobalDateByModule(this.currentModule);
			// if (!date) {
			// 	//console.log('HELLO B*14');
			// 	this.daterange.start = new Date(this.lastScanDate);
			// 	this.daterange.end = new Date(this.lastScanDate);
			// 	this.globalDate.setGlobalDate(this.dateRangePreviousScan, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
			// 	this.setSelectedRangeGlobalDate(this.globalDate.range.previousScan);
			// } else {
			// 	//console.log('HELLO B*15');
			// 	if (!this.isSelectedPreviousScan()) {
			// 		//console.log('HELLO B*16');
			// 		if (this.globalDate.getSelectedRange() !== this.globalDate.range.customRange) {
			// 			//console.log('HELLO B*17');
			// 			this.daterange.start = this.dateRangeObj[this.globalDate.getSelectedRangeKey()][0];
			// 			this.daterange.end = this.dateRangeObj[this.globalDate.getSelectedRangeKey()][1];
			// 		} else {
			// 			//console.log('HELLO B*18');
			// 			this.daterange.start = new Date(date.start);
			// 			this.daterange.end = new Date(date.end);
			// 		}
			// 		this.globalDate.setGlobalDate(this.daterange, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
			// 	} else {
			// 		//console.log('HELLO B*19');
			// 		this.daterange.start = new Date(this.lastScanDate);
			// 		this.daterange.end = new Date(this.lastScanDate);
			// 		this.globalDate.setGlobalDate(this.dateRangePreviousScan, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
			// 	}
			// }

			if (isWebsiteChanged || this.isFirstDateInit) {
				//console.log('HELLO B*20');
				// //call to init value all date scan(FOR ONLY SEO).
				this.validateDateScanningWebsite(this.account, this.webId, this.url);
			}
		} else if (/^\/(?:seo)\/.+/.test(router.url)) {
			//console.log('HELLO B13');

			if (this.currentModule != 'seo') {
				this.isFirstDateInit = true;
				this.currentModule = 'seo';
				this.globalDate.setCurrentModule(this.currentModule);
			}
			const date = this.globalDate.getGlobalDateByModule(this.currentModule);
			if (!date) {
				this.daterange.start = new Date(this.lastScanDate);
				this.daterange.end = new Date(this.lastScanDate);
				this.globalDate.setGlobalDate(this.dateRangePreviousScan, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				this.setSelectedRangeGlobalDate(this.globalDate.range.previousScan);
			} else {
				if (!this.isSelectedPreviousScan()) {
					if (this.globalDate.getSelectedRange() !== this.globalDate.range.customRange) {
						this.daterange.start = this.dateRangeObj[this.globalDate.getSelectedRangeKey()][0];
						this.daterange.end = this.dateRangeObj[this.globalDate.getSelectedRangeKey()][1];
					} else {
						this.daterange.start = new Date(date.start);
						this.daterange.end = new Date(date.end);
					}
					this.globalDate.setGlobalDate(this.daterange, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				} else {
					this.daterange.start = new Date(this.lastScanDate);
					this.daterange.end = new Date(this.lastScanDate);
					this.globalDate.setGlobalDate(this.dateRangePreviousScan, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				}
			}

			if (isWebsiteChanged || this.isFirstDateInit) {
				// //call to init value all date scan(FOR ONLY SEO).
				this.validateDateScanningWebsite(this.account, this.webId, this.url);
			}

		} else if (/^\/(?:sea)\/.+/.test(router.url)) {
			if (this.currentModule != 'sea') {
				this.isFirstDateInit = true;
				this.currentModule = 'sea';
				this.globalDate.setCurrentModule(this.currentModule);
			}
			const date = this.globalDate.getGlobalDateByModule(this.currentModule);
			if (!date) {
				this.daterange.start = new Date(moment().clone().subtract(1, 'month').startOf('month'));
				this.daterange.end = new Date(moment().clone().subtract(1, 'month').endOf('month'));
				this.globalDate.setGlobalDate(this.daterange, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				this.setSelectedRangeGlobalDate(this.globalDate.seaRange.lastMonth);
			} else {
				this.daterange.start = new Date(date.start);
				this.daterange.end = new Date(date.end);
				this.globalDate.setGlobalDate(this.daterange, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
			}
		} else if (/^\/(?:logs)\/.+/.test(router.url)) {
			if (this.currentModule != 'logs') {
				this.isFirstDateInit = true;
				this.currentModule = 'logs';
				this.globalDate.setCurrentModule(this.currentModule);
			}
			// const date = this.globalDate.getGlobalDateByModule(this.currentModule);
			// if (!date) {
			// 	if (this.account == 'decoclico' && this.webId == 2) { // fix date for decoclico
			// 		this.daterange.start = new Date('2017-12-24');
			// 		this.daterange.end = new Date('2017-12-30');
			// 	} else if (this.account == 'lactalis' && this.webId == 105) { // fix date for https://www.enviedebienmanger.fr/
			// 		this.daterange.start = new Date('2018-04-01');
			// 		this.daterange.end = new Date('2018-04-09');
			// 	} else {
			// 		this.daterange.start = new Date(this.current.clone().subtract(3, 'month').date(1));
			// 		this.daterange.end = new Date();
			// 	}
			// 	this.globalDate.setGlobalDate(this.daterange, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
			// 	this.setSelectedRangeGlobalDate(this.globalDate.range.customRange);
			// } else {
			// 	if (!this.isSelectedPreviousScan()) {
			// 		if (this.globalDate.getSelectedRange() !== this.globalDate.range.customRange) {
			// 			this.daterange.start = this.dateRangeObj[this.globalDate.getSelectedRangeKey()][0];
			// 			this.daterange.end = this.dateRangeObj[this.globalDate.getSelectedRangeKey()][1];
			// 		} else {
			// 			this.daterange.start = new Date(date.start);
			// 			this.daterange.end = new Date(date.end);
			// 		}
			// 		this.globalDate.setGlobalDate(this.daterange, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
			// 	} else {
			// 		this.daterange.start = new Date(this.lastScanDate);
			// 		this.daterange.end = new Date(this.lastScanDate);
			// 		this.globalDate.setGlobalDate(this.dateRangePreviousScan, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
			// 	}
			// }
		} else if (/^\/(?:settings)\/.+/.test(router.url)) {
			if (this.currentModule != 'settings') {
				this.isFirstDateInit = true;
				this.currentModule = 'settings';
				this.globalDate.setCurrentModule(this.currentModule);
			}
			const date = this.globalDate.getGlobalDateByModule(this.currentModule);
			if (!date) {
				this.daterange.start = new Date(this.lastScanDate);
				this.daterange.end = new Date(this.lastScanDate);
				this.globalDate.setGlobalDate(this.dateRangePreviousScan, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				this.setSelectedRangeGlobalDate(this.globalDate.range.previousScan);
			} else {
				if (!this.isSelectedPreviousScan()) {
					if (this.globalDate.getSelectedRange() !== this.globalDate.range.customRange) {
						this.daterange.start = this.dateRangeObj[this.globalDate.getSelectedRangeKey()][0];
						this.daterange.end = this.dateRangeObj[this.globalDate.getSelectedRangeKey()][1];
					} else {
						this.daterange.start = new Date(date.start);
						this.daterange.end = new Date(date.end);
					}
					this.globalDate.setGlobalDate(this.daterange, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				} else {
					this.daterange.start = new Date(this.lastScanDate);
					this.daterange.end = new Date(this.lastScanDate);
					this.globalDate.setGlobalDate(this.dateRangePreviousScan, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				}
			}
		} else if (/^\/(?:profile)\/.+/.test(router.url)) {
			if (this.currentModule != 'profile') {
				this.isFirstDateInit = true;
				this.currentModule = 'profile';
				this.globalDate.setCurrentModule(this.currentModule);
			}
			const date = this.globalDate.getGlobalDateByModule(this.currentModule);
			if (!date) {
				this.daterange.start = new Date(this.current.clone().subtract(3, 'month').date(1));
				this.daterange.end = new Date(this.current);
				this.globalDate.setGlobalDate(this.daterange, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				this.setSelectedRangeGlobalDate(this.globalDate.range.customRange);
			} else {
				if (!this.isSelectedPreviousScan()) {
					if (this.globalDate.getSelectedRange() !== this.globalDate.range.customRange) {
						this.daterange.start = this.dateRangeObj[this.globalDate.getSelectedRangeKey()][0];
						this.daterange.end = this.dateRangeObj[this.globalDate.getSelectedRangeKey()][1];
					} else {
						this.daterange.start = new Date(date.start);
						this.daterange.end = new Date(date.end);
					}
					this.globalDate.setGlobalDate(this.daterange, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				} else {
					this.daterange.start = new Date(this.lastScanDate);
					this.daterange.end = new Date(this.lastScanDate);
					this.globalDate.setGlobalDate(this.dateRangePreviousScan, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				}
			}
		} else if (/^\/(?:global-search-vision)\/.+/.test(router.url)) {
			if (this.currentModule != 'gsv') {
				this.isFirstDateInit = true;
				this.currentModule = 'gsv';
				this.globalDate.setCurrentModule(this.currentModule);
			}
			const date = this.globalDate.getGlobalDateByModule(this.currentModule);
			if (!date) {
				this.daterange.start = new Date(this.lastScanDate);
				this.daterange.end = new Date(this.lastScanDate);
				this.globalDate.setGlobalDate(this.dateRangePreviousScan, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				this.setSelectedRangeGlobalDate(this.globalDate.range.previousScan);
			} else {
				if (!this.isSelectedPreviousScan()) {
					if (this.globalDate.getSelectedRange() !== this.globalDate.range.customRange) {
						this.daterange.start = this.dateRangeObj[this.globalDate.getSelectedRangeKey()][0];
						this.daterange.end = this.dateRangeObj[this.globalDate.getSelectedRangeKey()][1];
					} else {
						this.daterange.start = new Date(date.start);
						this.daterange.end = new Date(date.end);
					}
					this.globalDate.setGlobalDate(this.daterange, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				} else {
					this.daterange.start = new Date(this.lastScanDate);
					this.daterange.end = new Date(this.lastScanDate);
					this.globalDate.setGlobalDate(this.dateRangePreviousScan, this.currentModule, isWebsiteChanged, this.isFirstDateInit);
				}
			}
		}
		this.isFirstDateInit = false;
		this.optionsDatepicker = undefined;
		setTimeout(() => {
			if (/.*benchmark-overview$/.test(router.url)) {
				//Disable the calendar when user enter to SEO > Benchmark > Overview share of visibility
			} else if (/^\/(?:logs)\/.+/.test(router.url)) {
				//Disable while loading last logs date
			} else {
				this.optionsDatepicker = this.getOptionsDatepicker();
				this.addRadioButtonDatepicker();
			}
		}, 100);
	}

	enableAllChoiceDatePicker() {
		let optionsNumber = this.isSea ? 4 : 6;
		for (let i = 0; i < optionsNumber; i++) {
			document.getElementById('tdRadioDatepicker' + i).classList.remove('disabled');
		}
		if (!this.isSea) {
			document.getElementById('tdRadioDatepickerRange').classList.remove('disabled');
			document.getElementById('tdRadioDatepickerPreviousPeriod').classList.remove('disabled');
			document.getElementById('labelDatepickerPreviousPeriod').classList.remove('disabled');
		}
	}

	disableCompareToRange() {
		document.getElementById('tdRadioDatepickerRange').classList.add('disabled');
		document.getElementById('tdRadioDatepickerRange').classList.remove('active');
		$('input[name="radioDatepickerCustom"]').prop('checked', false);
	}

	disablePreviousPeriod() {
		document.getElementById('tdRadioDatepickerPreviousPeriod').classList.add('disabled');
		document.getElementById('tdRadioDatepickerPreviousPeriod').classList.remove('active');
		document.getElementById('labelDatepickerPreviousPeriod').classList.add('disabled');
		document.getElementById('labelDatepickerPreviousPeriod').classList.remove('active');
		$('input[name="radioDatepickerCustom"]').prop('checked', false);
	}

	disableAllCustomRange() {
		for (let i = 0; i < 6; i++) {
			document.getElementById('tdRadioDatepicker' + i).classList.add('disabled');
			document.getElementById('labelDatepicker' + i).classList.remove('active');
		}
		$('input[name="radioDatepicker"]').prop('checked', false);
	}

	showCustomPreviousYear() {
		$('#tdRadioDatepicker5').hide(); $('#tdRadioDatepickerPreviousYear').show();
	}

	hideCustomPreviousYear() {
		$('#tdRadioDatepicker5').show(); $('#tdRadioDatepickerPreviousYear').hide();
	}

	forceActivePreviousScan() {
		if (!$('#labelDatepicker2').hasClass('active')) { $('#labelDatepicker2').addClass('active'); $('#radioDatepicker2').prop('checked', true); }
	}

	addRadioButtonDatepicker() {
		let optionsNumber = this.isSea ? 4 : 6;
		setTimeout(() => {
			try {
				const daterangepicker = document.querySelectorAll('div.daterangepicker');
				if (daterangepicker.length > 0) {
					daterangepicker[0]['style'].zIndex = '9998';
				}
				let daterangepicker_start = $("input[name='daterangepicker_start']");
				if (!daterangepicker_start.hasClass('calendar_daterangepicker_start')) {
					daterangepicker_start.addClass('calendar_daterangepicker_start');
				}
				let daterangepicker_end = $("input[name='daterangepicker_end']");
				if (!daterangepicker_end.hasClass('calendar_daterangepicker_end')) {
					daterangepicker_end.addClass('calendar_daterangepicker_end');
				}
				const ul = document.querySelector('div.daterangepicker.dropdown-menu.ltr.show-calendar.opensleft > div.ranges > ul:nth-child(1)');
				if (ul.innerHTML.indexOf('radioDatepicker') == -1 || this.currentModule == 'staging' || this.currentModule == 'youtube') {
					if (!this.isSea) {
						ul.innerHTML = '\
					<span style="display: inline-block;"><font size="2"><strong>'+ this.translate.instant('GLOBAL_VIEW.Compare_to_') + '</strong></font>\
					<table style="table-layout: fixed;">\
					<tbody>\
					<tr>\
					<td id="tdRadioDatepickerRange" style="text-align: left;"> \
						<span id="spanRadioDatepickerRange"><input id= "radioDatepickerRange" name= "radioDatepickerCustom" disabled type= "radio" class="radioDatepickerRange" >		\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepickerRange" for="radioDatepickerRange" > </label></span><span style="display: inline-block; padding-left: 5px;">			\
						<input class="input-mini form-control custom_daterangepicker_start" name="" style="width: 40%; font-size: 14px; display: inline-block; padding: 5px;" type="text">\
						 <span style="color: rgb(107, 107, 107);">'+ this.translate.instant('GLOBAL_VIEW.to') + '</span> \
						<input class="input-mini form-control custom_daterangepicker_end" name="" style="width: 40%; font-size: 14px; display: inline-block; padding: 5px;" type="text"></span>\
					</td>\
					<td id="tdRadioDatepicker0" style="text-align: left; vertical-align:bottom;"> \
						<input id= "radioDatepicker0" name= "radioDatepicker" disabled type= "radio" class="radioDatepicker0">		\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepicker0" for="radioDatepicker0" > </label><span style="display: inline-block; pointer-events: none;" onclick="return false;">			\
						<li id="labelDatepicker0" style= "width: 100%;" data-range-key="3 previous months" > '+ this.translate.instant('GLOBAL_VIEW.3_Previous_months') + '</li></span >\
					</td>\
					</tr>\
					\
					<tr>\
					<td id="tdRadioDatepickerPreviousPeriod" style="text-align: left;"> \
						<input id="radioDatepickerPreviousPeriod" name= "radioDatepickerCustom" disabled type= "radio" class="radioDatepickerPreviousPeriod">					\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepickerPreviousPeriod" for="radioDatepickerPreviousPeriod" > </label><span style="display: inline-block; pointer-events: none;" onclick="return false;">\
						<li id="labelDatepickerPreviousPeriod" style= "width: 100%;" data-range-key="Custom Range" > '+ this.translate.instant('GLOBAL_VIEW.Previous_period') + '</li></span >			\
					</td>\
					<td id="tdRadioDatepicker1" style="text-align: left;"> \
						<input id="radioDatepicker1" name= "radioDatepicker" disabled type= "radio" class="radioDatepicker1">					\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepicker1" for="radioDatepicker1" > </label><span style="display: inline-block; pointer-events: none;" onclick="return false;">			\
						<li id="labelDatepicker1" style= "width: 100%;" data-range-key="6 previous months" > '+ this.translate.instant('GLOBAL_VIEW.6_Previous_months') + '</li></span >				\
					</td>\
					</tr>\
						\
					<tr>\
					<td id="tdRadioDatepicker2" style="text-align: left;"> \
						<input id="radioDatepicker2" name= "radioDatepicker" disabled type= "radio" class="radioDatepicker2">					\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepicker2" for="radioDatepicker2" > </label><span style="display: inline-block; pointer-events: none;" onclick="return false;">			\
						<li id="labelDatepicker2" style= "width: 100%;" data-range-key="Previous scan" > '+ this.translate.instant('GLOBAL_VIEW.Previous_scan') + '</li></span >				\
					</td>\
					<td id="tdRadioDatepicker3" style="text-align: left;"> \
						<input id="radioDatepicker3" name= "radioDatepicker" disabled type= "radio" class="radioDatepicker3">					\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepicker3" for="radioDatepicker3" > </label><span style="display: inline-block; pointer-events: none;" onclick="return false;">			\
						<li id="labelDatepicker3" style= "width: 100%;" data-range-key="Beginning of the project" > '+ this.translate.instant('GLOBAL_VIEW.Beginning_of_the_project') + '</li></span >		\
					</td>\
					</tr>\
						\
					<tr>\
					<td id="tdRadioDatepicker4" style="text-align: left;"> \
						<input id="radioDatepicker4" name= "radioDatepicker" disabled type= "radio" class="radioDatepicker4">					\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepicker4" for="radioDatepicker4" > </label><span style="display: inline-block; pointer-events: none;" onclick="return false;">			\
						<li id="labelDatepicker4" style= "width: 100%;" data-range-key="Previous month" > '+ this.translate.instant('GLOBAL_VIEW.Previous_month') + '</li></span >			\
					</td>\
					<td id="tdRadioDatepicker5" style="text-align: left;"> \
						<input id="radioDatepicker5" name= "radioDatepicker" disabled type= "radio" class="radioDatepicker5">					\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepicker5" for="radioDatepicker5" > </label><span style="display: inline-block; pointer-events: none;" onclick="return false;">			\
						<li id="labelDatepicker5" style= "width: 100%;" data-range-key="Previous year" > '+ this.translate.instant('GLOBAL_VIEW.Previous_year') + '</li></span>\
					</td>\
					<td id="tdRadioDatepickerPreviousYear" style="text-align: left; display: none;"> \
						<input id="radioDatepickerPreviousYear" name= "radioDatepickerCustom" disabled type= "radio" class="radioDatepickerPreviousYear">					\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepickerPreviousYear" for="radioDatepickerPreviousYear" > </label><span style="display: inline-block; pointer-events: none;" onclick="return false;">			\
						<li id="labelDatepickerPreviousYear" style= "width: 100%;" data-range-key="Custom Range" > '+ this.translate.instant('GLOBAL_VIEW.Previous_year') + '</li></span>\
					</td>\
					</tr>\
					</tbody>\
					</table>\
					<li style= "display: none;" data-range-key="Custom Range">Custom Range</li><br><br>';
					} else {
						ul.innerHTML = '\
					<span style="display: inline-block;">\
					<table style="table-layout: fixed;">\
					<tbody>\
					<tr>\
					<td id="tdRadioDatepicker0" style="text-align: left;"> \
						<input id="radioDatepicker0" name= "radioDatepicker" disabled type= "radio" class="radioDatepicker0">					\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepicker0" for="radioDatepicker0" > </label><span style="display: inline-block; pointer-events: none;" onclick="return false;">			\
						<li id="labelDatepicker0" style= "width: 100%;" data-range-key="Last month" data-cy="Last month"> '+ this.translate.instant('Last month') + '</li></span >				\
					</td>\
					</tr>\
					\
					<tr>\
					<td id="tdRadioDatepicker1" style="text-align: left;"> \
						<input id="radioDatepicker1" name= "radioDatepicker" disabled type= "radio" class="radioDatepicker1">					\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepicker1" for="radioDatepicker1" > </label><span style="display: inline-block; pointer-events: none;" onclick="return false;">			\
						<li id="labelDatepicker1" style= "width: 100%;" data-range-key="Last 30 days" data-cy="Last 30 days"> '+ this.translate.instant('Last 30 days') + '</li></span >			\
					</td>\
					</tr>\
						\
					<tr>\
					<td id="tdRadioDatepicker2" style="text-align: left; vertical-align:bottom;"> \
						<input id= "radioDatepicker2" name= "radioDatepicker" disabled type= "radio" class="radioDatepicker2">		\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepicker2" for="radioDatepicker2" > </label><span style="display: inline-block; pointer-events: none;" onclick="return false;">			\
						<li id="labelDatepicker2" style= "width: 100%;" data-range-key="3 previous months" data-cy="3 Previous months"> '+ this.translate.instant('3 Previous months') + '</li></span >\
					</td>\
					</tr>\
						\
					<tr>\
					<td id="tdRadioDatepicker3" style="text-align: left;"> \
						<input id="radioDatepicker3" name= "radioDatepicker" disabled type= "radio" class="radioDatepicker3">					\
						<label style="cursor: pointer; opacity: 1 !important;" id="circleRadioDatepicker3" for="radioDatepicker3" > </label><span style="display: inline-block; pointer-events: none;" onclick="return false;">			\
						<li id="labelDatepicker3" style= "width: 100%;" data-range-key="6 previous months" data-cy="6 Previous months"> '+ this.translate.instant('6 Previous months') + '</li></span >				\
					</td>\
					</tr>\
					</tbody>\
					</table>';
					}
				}

				//binding event
				for (let i = 0; i < optionsNumber; i++) {
					$('#labelDatepicker' + i).on('classChanged', function () {
						if ($('#radioDatepicker' + i).is(':checked') && !$(this).hasClass('active')) { // change custom range after click on calendar
							$('#radioDatepicker' + i).prop('checked', false);
						}
						if ($('#radioDatepicker' + i).is(':checked')) {
							$(this).css('color', '#519ffb');
						} else {
							$(this).css('color', '#6b6b6b');
						}
					});
					$('#tdRadioDatepicker' + i).click(function () {
						const isSea = new Boolean(window['appGlobalComponentRef'].zone.run(() => {
							return window['appGlobalComponentRef'].component.isSeaPart();
						}));
						if ($('#radioDatepicker' + i).is(':checked') && !isSea) {
							$('#radioDatepicker' + i).prop('checked', false);
							$('#labelDatepicker' + i).removeClass('active');
							return;
						}
						// Simulate date change
						if (i == 2 && !isSea) { // Previous Scan
							const lastScan = new Date(window['appGlobalComponentRef'].zone.run(() => {
								return window['appGlobalComponentRef'].component.getLastScan();
							}));
							$('.calendar_daterangepicker_start').val(moment(lastScan).format('DD-MM-YYYY'));
							$('.calendar_daterangepicker_end').val(moment(lastScan).format('DD-MM-YYYY'));
						} else {
							$('#labelDatepicker' + i).trigger('mouseenter'); // change date
						}
						$('#radioDatepicker' + i).prop('checked', true);
						$('#labelDatepicker' + i).addClass('active');
						for (let j = 0; j < optionsNumber; j++) {
							if (i == j) {
								continue;
							}
							$('#labelDatepicker' + j).removeClass('active');
						}
					});
				}

				$('.custom_daterangepicker_start, .custom_daterangepicker_end').click(function () {
					$('#labelDatepickerPreviousPeriod').removeClass('active');
					$('#labelDatepickerPreviousYear').removeClass('active');
					$('#radioDatepickerRange').prop('checked', true);
					$(this).addClass('active');
					$('.calendar_daterangepicker_start, .calendar_daterangepicker_end').attr('name', '');
					$('.calendar_daterangepicker_start, .calendar_daterangepicker_end').removeClass('active');
					$('.custom_daterangepicker_start').attr('name', 'daterangepicker_start');
					$('.custom_daterangepicker_end').attr('name', 'daterangepicker_end');
					if ($('.custom_daterangepicker_start').val().trim() == ''
						&& $('.custom_daterangepicker_end').val().trim() == '') {
						const dateCompareTo = window['appGlobalComponentRef'].zone.run(() => {
							return window['appGlobalComponentRef'].component.getDateCompareTo();
						});
						const dateStart = new Date(dateCompareTo.startCompareTo ? dateCompareTo.startCompareTo : dateCompareTo.start);
						$('.custom_daterangepicker_start').val(moment(dateStart).format('DD-MM-YYYY'));
						const dateEnd = new Date(dateCompareTo.endCompareTo ? dateCompareTo.endCompareTo : dateCompareTo.end);
						$('.custom_daterangepicker_end').val(moment(dateEnd).format('DD-MM-YYYY'));
					}
				}).focusout(function () {
					$(this).removeClass('active');
				});

				$('.calendar_daterangepicker_start, .calendar_daterangepicker_end').click(function () {
					$('.custom_daterangepicker_start, .custom_daterangepicker_end').attr('name', '');
					$('.custom_daterangepicker_start, .custom_daterangepicker_end').removeClass('active');
					$('.calendar_daterangepicker_start').attr('name', 'daterangepicker_start');
					$('.calendar_daterangepicker_end').attr('name', 'daterangepicker_end');
				}).focusout(function () {
					$(this).removeClass('active');
				});

				// remove class active when use custom date
				// auto apply on click PreviousPeriod and PreviousYear
				$("#spanRadioDatepickerRange, #tdRadioDatepickerPreviousPeriod, #tdRadioDatepickerPreviousYear").click(function () {

					$('#labelDatepickerPreviousPeriod').removeClass('active');
					$('#labelDatepickerPreviousPeriod').css('color', 'rgb(107, 107, 107)');
					$('#labelDatepickerPreviousYear').removeClass('active');
					$('#labelDatepickerPreviousYear').css('color', 'rgb(107, 107, 107)');
					const id = $(this)[0].id;
					if (id == "tdRadioDatepickerPreviousPeriod") {
						if ($('#radioDatepickerPreviousPeriod').is(":checked")) {
							$("input[name='radioDatepickerCustom']").prop('checked', false);
						} else {
							$('#radioDatepickerPreviousPeriod').prop('checked', true);
							$('#labelDatepickerPreviousPeriod').addClass('active');
							$('#labelDatepickerPreviousPeriod').css('color', 'rgb(81, 159, 251)');
						}
					} else if (id == "tdRadioDatepickerPreviousYear") {
						if ($('#radioDatepickerPreviousYear').is(":checked")) {
							$("input[name='radioDatepickerCustom']").prop('checked', false);
						} else {
							$('#radioDatepickerPreviousYear').prop('checked', true);
							$('#labelDatepickerPreviousYear').addClass('active');
							$('#labelDatepickerPreviousYear').css('color', 'rgb(81, 159, 251)');
						}
					} else {
						if ($('#radioDatepickerRange').is(":checked")) {
							$("input[name='radioDatepickerCustom']").prop('checked', false);
						} else {
							$('.custom_daterangepicker_start').click();
						}
					}
				});

				// apply button clicked
				$('div.daterangepicker.dropdown-menu.ltr.show-calendar.opensleft div.ranges div.range_inputs button.applyBtn').click(function () {
					window['appGlobalComponentRef'].zone.run(() => {
						const fn = window['appGlobalComponentRef'].component;

						if (fn.getCurrentModule() == 'data') {

							// clear custom config input
							$('.custom_daterangepicker_start, .custom_daterangepicker_end').attr('name', '');
							$('.custom_daterangepicker_start, .custom_daterangepicker_end').removeClass('active');
							$('.calendar_daterangepicker_start').attr('name', 'daterangepicker_start');
							$('.calendar_daterangepicker_end').attr('name', 'daterangepicker_end');

							let selected = -1;
							if ($('#radioDatepickerRange').is(":checked")) {
								selected = 1;
							} else if ($('#radioDatepickerPreviousPeriod').is(":checked")) {
								selected = 2;
							} else if ($('#radioDatepickerPreviousYear').is(":checked")) {
								selected = 3;
							}
							fn.saveSelectedDateCompare(selected,
								$('.custom_daterangepicker_start').val(),
								$('.custom_daterangepicker_end').val());
						} else {
							let haveChecked = false;
							for (let i = 0; i < optionsNumber; i++) { // click label for change the selected next time open datepicker
								if ($('#radioDatepicker' + i).is(":checked")) {
									$('#labelDatepicker' + i).click();
									fn.setSelectedRangeGlobalDate(i);
									haveChecked = true;
									break;
								}
							}
							if (!haveChecked) {
								fn.setSelectedRangeGlobalDate(fn.getGlobalDateRange().customRange);
							}

							fn.selectedDate(); // save selected
						}

					});
				});

				let isFirstShow = true;
				let isShowCalendar = false;
				$('div.daterangepicker.dropdown-menu.ltr.show-calendar.opensleft').bind('show', function (e) {
					if ($(this).is(':visible') && !isShowCalendar) {

						// disable mouse hover calendar
						$('div.daterangepicker.dropdown-menu.ltr.show-calendar.opensleft div.calendar').off(
							'mouseenter.daterangepicker',
							'td.available',
							$.proxy($('#daterangepickerCalendar').data('daterangepicker').hoverDate, $("#daterangepickerCalendar").data('daterangepicker'))
						);
						isShowCalendar = true;
						window['appGlobalComponentRef'].zone.run(() => {
							const fn = window['appGlobalComponentRef'].component;

							fn.enableAllChoiceDatePicker();
							fn.hideCustomPreviousYear();
							if (fn.getCurrentModule() == 'data') {
								const selected = window.sessionStorage.getItem('global_date_' + fn.getCurrentModule() + '_compare_to_selected');
								if (selected) {
									if (selected == '1') {
										$('#radioDatepickerRange').prop('checked', true);
										$('.custom_daterangepicker_start').click();
									} else if (selected == '2') {
										$('#radioDatepickerPreviousPeriod').prop('checked', true);
									} else if (selected == '3') {
										$('#radioDatepickerPreviousYear').prop('checked', true);
									}
								}
								if ($('#radioDatepickerPreviousPeriod').is(":checked")) {
									$('#labelDatepickerPreviousPeriod').addClass('active');
									$('#labelDatepickerPreviousPeriod').css('color', 'rgb(81, 159, 251)');
									$('#labelDatepickerPreviousYear').css('color', 'rgb(107, 107, 107)');
								} else if ($('#radioDatepickerPreviousYear').is(":checked")) {
									$('#labelDatepickerPreviousYear').addClass('active');
									$('#labelDatepickerPreviousYear').css('color', 'rgb(81, 159, 251)');
									$('#labelDatepickerPreviousPeriod').css('color', 'rgb(107, 107, 107)');
								}
								fn.disableAllCustomRange();
								fn.showCustomPreviousYear();
							} else if (fn.getCurrentModule() == 'youtube') {

								fn.disableCompareToRange();
								fn.disablePreviousPeriod();

							} else if (fn.getCurrentModule() == 'staging') {

								// if (fn.isSelectedPreviousScan()) {
								// 	fn.forceActivePreviousScan();
								// 	const lastScan = new Date(fn.getLastScan());
								// 	$('.calendar_daterangepicker_start').val(moment(lastScan).format('DD-MM-YYYY'));
								// 	$('.calendar_daterangepicker_end').val(moment(lastScan).format('DD-MM-YYYY'));
								// }
								fn.disableCompareToRange();
								fn.disablePreviousPeriod();
							} else if (fn.getCurrentModule() == 'seo') {
								if (fn.isSelectedPreviousScan()) {
									fn.forceActivePreviousScan();
									const lastScan = new Date(fn.getLastScan());
									$('.calendar_daterangepicker_start').val(moment(lastScan).format('DD-MM-YYYY'));
									$('.calendar_daterangepicker_end').val(moment(lastScan).format('DD-MM-YYYY'));
								}
								fn.disableCompareToRange();
								fn.disablePreviousPeriod();
							} else if (fn.getCurrentModule() == 'logs') {
								fn.disableCompareToRange();
								fn.disablePreviousPeriod();
								fn.disableAllCustomRange();
							} else if (fn.getCurrentModule() == 'settings') {
								if (fn.isSelectedPreviousScan()) {
									fn.forceActivePreviousScan();
									const lastScan = new Date(fn.getLastScan());
									$('.calendar_daterangepicker_start').val(moment(lastScan).format('DD-MM-YYYY'));
									$('.calendar_daterangepicker_end').val(moment(lastScan).format('DD-MM-YYYY'));
								}
								fn.disableCompareToRange();
								fn.disablePreviousPeriod();
							} else if (fn.getCurrentModule() == 'profile') {
								if (fn.isSelectedPreviousScan()) {
									fn.forceActivePreviousScan();
									const lastScan = new Date(fn.getLastScan());
									$('.calendar_daterangepicker_start').val(moment(lastScan).format('DD-MM-YYYY'));
									$('.calendar_daterangepicker_end').val(moment(lastScan).format('DD-MM-YYYY'));
								}
								fn.disableCompareToRange();
								fn.disablePreviousPeriod();
							}
							if (fn.getSelectedRangeGlobalDate() == fn.getGlobalDateRange().customRange) { // remove all active if custom range
								for (let i = 0; i < optionsNumber; i++) {
									$('#labelDatepicker' + i).removeClass('active');
								}
							} else {
								for (let i = 0; i < optionsNumber; i++) {
									if (i == fn.getSelectedRangeGlobalDate()) {
										$('#radioDatepicker' + i).prop('checked', true);
										$('#labelDatepicker' + i).addClass('active');
										break;
									}
								}
							}

							// clear custom config input
							$('.custom_daterangepicker_start, .custom_daterangepicker_end').attr('name', '');
							$('.custom_daterangepicker_start, .custom_daterangepicker_end').removeClass('active');
							$('.calendar_daterangepicker_start').attr('name', 'daterangepicker_start');
							$('.calendar_daterangepicker_end').attr('name', 'daterangepicker_end');
							$('.calendar_daterangepicker_start').addClass('active');
						});
					}
				}).bind('hide', function (e) {
					if (!$(this).is(':visible') && isShowCalendar) {
						isShowCalendar = false;
					}
				});

				// let accountCheckScan = this.account;
				// let webIdCheckScan = this.webId;
				// let requestCheckScan = this.request;

				// $("div.calendar-table").mousedown(function (e) {

				// 	const fn = window['appGlobalComponentRef'].component;

				// 	if (fn.getCurrentModule() == 'seo') {
				// 		let currentDatePast = $('.calendar_daterangepicker_start').val();
				// 		if (this.currentDate != currentDatePast) {

				// 			try {
				// 				this.currentDate = $('.calendar_daterangepicker_start').val();
				// 				// //console.log('SELECTING 2: ' + this.currentDate);

				// 				const urlSearchParams = new URLSearchParams();
				// 				urlSearchParams.append('account', accountCheckScan);
				// 				urlSearchParams.append('webId', webIdCheckScan.toString());
				// 				urlSearchParams.append('currentDate', this.currentDate);
				// 				const param = urlSearchParams.toString();

				// 				requestCheckScan.get(`${config.SERVICES.manage_calendar}/calendar/get_scan_date_and_alert_condition?` + param).subscribe(res => {
				// 					/*ADDED: SHOW ALERT FOR NO SCANNING RESULT ON SOME OPTION ON CALENDAR*/

				// 					this.showAlertNoScanPreviousScan = res.previous_scan;
				// 					this.showAlertNoScanPreviousMonth = res.previous_month;
				// 					this.showAlertNoScanPrevious3Month = res.previous_3month;
				// 					this.showAlertNoScanPrevious6Month = res.previous_6month;
				// 					this.showAlertNoScanBeginingOfProject = res.beginning_of_project;
				// 					this.showAlertNoScanPreviousYear = res.previous_year;

				// 					this.showAlertNoScanPreviousScan ? $('#tooltipPreviousScan').css('display', 'none') : $('#tooltipPreviousScan').css('display', 'inline-block');
				// 					this.showAlertNoScanPreviousMonth ? $('#tooltipPreviousMonth').css('display', 'none') : $('#tooltipPreviousMonth').css('display', 'inline-block');
				// 					this.showAlertNoScanPrevious3Month ? $('#tooltipPrevious3Month').css('display', 'none') : $('#tooltipPrevious3Month').css('display', 'inline-block');
				// 					this.showAlertNoScanPrevious6Month ? $('#tooltipPrevious6Month').css('display', 'none') : $('#tooltipPrevious6Month').css('display', 'inline-block');
				// 					this.showAlertNoScanBeginingOfProject ? $('#tooltipBeginingOfProject').css('display', 'none') : $('#tooltipBeginingOfProject').css('display', 'inline-block');
				// 					this.showAlertNoScanPreviousYear ? $('#tooltipPreviousYear').css('display', 'none') : $('#tooltipPreviousYear').css('display', 'inline-block');

				// 				}, error => {
				// 					//console.log('ERROR CHECK SCAN E1');
				// 				});
				// 			} catch (e) {
				// 				//console.log('ERROR CHECK SCAN E2' + e);
				// 			}
				// 		}
				// 	}
				// });

				/* DEFAULT WHEN 1st TIMES CLICK ON CALENDAR */
				$('div.dd-date ').mousedown(function (e) {
					// //console.log(window['mapDateScanEachMonth']);

					const fn = window['appGlobalComponentRef'].component;
					if (fn.getCurrentModule() == 'seo' || fn.getCurrentModule() == 'staging' || fn.getCurrentModule() == 'youtube') {

						const tmpDate = window['appGlobalComponentRef'].component.getOptionsDatepicker();

						if (fn.getCurrentModule() == 'staging' || fn.getCurrentModule() == 'youtube') {
							$('.calendar_daterangepicker_start').val(moment(tmpDate.startDate).format('DD-MM-YYYY'));
							$('.calendar_daterangepicker_end').val(moment(tmpDate.EndDate).format('DD-MM-YYYY'));
						}

						setTimeout(function () {
							//#################
							//### SET VALUE ###
							//#################

							//*** LEFT ***
							$("div.calendar.left .calendar-table table.table-condensed thead tr th.month").filter(function () {
								return true
							}).each(function () {
								let dateMonthTmpLeft = $(this).text();
								// //console.log('Left ' + $(this).text()); //month and year
								Object.keys(window['mapDateScanEachMonth']).forEach(function (k) {
									let keyText = dateMonthTmpLeft.replace(/\s+/g, '-');
									// //console.log(k + " compare: " + keyText);
									if (k === keyText) {

										let myarrA = window['mapDateScanEachMonth'][k];
										// //console.log('match');
										// //console.log(myarrA);
										$("div.calendar.left .calendar-table table.table-condensed tbody tr td.available:not(.off)").filter(function () {
											return true
										}).each(function () {
											// //console.log($(this));
											if ($.inArray($(this).text(), myarrA) > -1) {
												// //console.log('###' + $(this).text());
												// //console.log($(this));
												$(this).addClass('daterangpicker-underscore');
											}
										});
									}
								});
							});
							//*** RIGHT ***/
							$("div.calendar.right .calendar-table table.table-condensed thead tr th.month").filter(function () {
								return true
							}).each(function () {
								let dateMonthTmpLeft = $(this).text();

								Object.keys(window['mapDateScanEachMonth']).forEach(function (k) {
									let keyText = dateMonthTmpLeft.replace(/\s+/g, '-');

									if (k === keyText) {
										let myarrA = window['mapDateScanEachMonth'][k];

										$("div.calendar.right .calendar-table table.table-condensed tbody tr td.available:not(.off)").filter(function () {
											return true
										}).each(function () {
											if ($.inArray($(this).text(), myarrA) > -1) {
												// //console.log('###RIGHT ' + $(this).text());
												$(this).addClass('daterangpicker-underscore');
											}
										});
									}
								});
							});

						}, 500)
					}
					// }
				});

				/************************************************************** */

			} catch (e) { }
		}, 100);
	}

	getOptionsDatepicker() {
		return {
			locale: {
				format: 'DD-MM-YYYY',
				applyLabel: this.translate.instant('GLOBAL_VIEW.Apply'),
				cancelLabel: this.translate.instant('GLOBAL_VIEW.Cancel'),
				daysOfWeek: [
					this.translate.instant('GLOBAL_VIEW.Su'),
					this.translate.instant('GLOBAL_VIEW.Mo'),
					this.translate.instant('GLOBAL_VIEW.Tu'),
					this.translate.instant('GLOBAL_VIEW.We'),
					this.translate.instant('GLOBAL_VIEW.Th'),
					this.translate.instant('GLOBAL_VIEW.Fr'),
					this.translate.instant('GLOBAL_VIEW.Sa')
				],
				monthNames: [
					this.translate.instant('GLOBAL_VIEW.Jan'),
					this.translate.instant('GLOBAL_VIEW.Feb'),
					this.translate.instant('GLOBAL_VIEW.Mar'),
					this.translate.instant('GLOBAL_VIEW.Apr'),
					this.translate.instant('GLOBAL_VIEW.May'),
					this.translate.instant('GLOBAL_VIEW.Jun'),
					this.translate.instant('GLOBAL_VIEW.Jul'),
					this.translate.instant('GLOBAL_VIEW.Aug'),
					this.translate.instant('GLOBAL_VIEW.Sep'),
					this.translate.instant('GLOBAL_VIEW.Oct'),
					this.translate.instant('GLOBAL_VIEW.Nov'),
					this.translate.instant('GLOBAL_VIEW.Dec'),
				]
			},
			applyClass: 'btn-default active',
			alwaysShowCalendars: true,
			autoUpdateInput: false,
			ranges: !this.isSea ?
				{
					'3 previous months': this.dateRangeObj.threePreviousMonths,
					'Previous period': this.dateRangeObj.previousPeriod,
					'6 previous months': this.dateRangeObj.sixPreviousMonths,
					'Previous scan': this.dateRangeObj.previousScan,
					'Beginning of the project': this.dateRangeObj.beginProject,
					'Previous month': this.dateRangeObj.previousMonth,
					'Previous year': this.dateRangeObj.previousYear
				} :
				{
					'Last month': this.dateRangeObj.lastMonth,
					'Last 30 days': this.dateRangeObj.last30Days,
					'3 previous months': this.dateRangeObj.lastThreeMonths,
					'6 previous months': this.dateRangeObj.lastSixMonths
				},
			startDate: this.daterange.start,
			endDate: this.daterange.end
		};
	}

	getCurrentModule() {
		return this.currentModule;
	}

	getDateCompareTo() {
		if (!this.globalDate.getGlobalDateByModule(this.currentModule)) {
			return {
				start: this.daterange.start,
				end: this.daterange.end,
				startCompareTo: this.daterange.startCompareTo,
				endCompareTo: this.daterange.endCompareTo
			};
		} else {
			return this.globalDate.getGlobalDateByModule(this.currentModule);
		}
	}

	saveSelectedDateCompare(selected, dStart, dEnd) {

		let dateCalendarStart = [];
		try { dateCalendarStart = $('.calendar_daterangepicker_start').val().split('-'); } catch (e) { }
		if (dateCalendarStart.length <= 1) {
			dateCalendarStart = (moment(this.daterange.start).format('DD-MM-YYYY')).split('-');
		} else {
			this.daterange.start = new Date(dateCalendarStart[2] + '-' + dateCalendarStart[1] + '-' + dateCalendarStart[0]);
		}

		let dateCalendarEnd = [];
		try { dateCalendarEnd = $('.calendar_daterangepicker_end').val().split('-'); } catch (e) { }
		if (dateCalendarEnd.length <= 1) {
			dateCalendarEnd = (moment(this.daterange.end).format('DD-MM-YYYY')).split('-');
		} else {
			this.daterange.end = new Date(dateCalendarEnd[2] + '-' + dateCalendarEnd[1] + '-' + dateCalendarEnd[0]);
		}

		window.sessionStorage.setItem('global_date_' + this.currentModule + '_compare_to_selected', selected.toString());
		if (selected == 1) {
			const dateStart = dStart.split('-');
			const dateEnd = dEnd.split('-');
			this.globalDate.setGlobalDate({
				start: this.daterange.start,
				end: this.daterange.end,
				startCompareTo: new Date(dateStart[2] + '-' + dateStart[1] + '-' + dateStart[0]),
				endCompareTo: new Date(dateEnd[2] + '-' + dateEnd[1] + '-' + dateEnd[0])
			}, this.currentModule, false, this.isFirstDateInit);
		} else if (selected == 2) { // PreviousPeriod
			const from = new Date(dateCalendarStart[2] + '-' + dateCalendarStart[1] + '-' + dateCalendarStart[0]);
			const to = new Date(dateCalendarEnd[2] + '-' + dateCalendarEnd[1] + '-' + dateCalendarEnd[0]);
			const diff = Math.floor((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
			const cmpTo = new Date(new Date(from).setDate(from.getDate() - 1));
			const cmpFrom = new Date(new Date(cmpTo).setDate(cmpTo.getDate() - diff));
			const cmp: GlobalDateItem = {
				start: this.daterange.start,
				end: this.daterange.end,
				startCompareTo: cmpFrom,
				endCompareTo: cmpTo
			};
			this.globalDate.setGlobalDate(cmp, this.currentModule, false, this.isFirstDateInit);
		} else if (selected == 3) { // PreviousYear
			const from = new Date(dateCalendarStart[2] + '-' + dateCalendarStart[1] + '-' + dateCalendarStart[0]);
			const to = new Date(dateCalendarEnd[2] + '-' + dateCalendarEnd[1] + '-' + dateCalendarEnd[0]);
			this.globalDate.setGlobalDate({
				start: this.daterange.start,
				end: this.daterange.end,
				startCompareTo: new Date(new Date(from).setFullYear(from.getUTCFullYear() - 1)),
				endCompareTo: new Date(new Date(to).setFullYear(to.getUTCFullYear() - 1))
			}, this.currentModule, false, this.isFirstDateInit);
		} else if (selected == -1) {
			this.globalDate.setGlobalDate({
				start: this.daterange.start,
				end: this.daterange.end,
				startCompareTo: undefined,
				endCompareTo: undefined
			}, this.currentModule, false, this.isFirstDateInit);
		}
	}

	selectedDate() {
		let lastScanDate = !this.isSea ? this.lastScanDate : moment(new Date()).format('YYYY-MM-DD');
		if ($('.calendar_daterangepicker_start').val() == moment(lastScanDate).format('DD-MM-YYYY')
			&& $('.calendar_daterangepicker_end').val() == moment(lastScanDate).format('DD-MM-YYYY') && !this.isSea) {
			this.daterange.start = new Date(lastScanDate);
			this.daterange.end = new Date(lastScanDate);
			this.daterange.startCompareTo = undefined;
			this.daterange.endCompareTo = undefined;
			this.globalDate.setGlobalDate(this.dateRangePreviousScan, this.currentModule, false);
		} else {
			const dateStart = $('.calendar_daterangepicker_start').val().split('-');
			const dateEnd = $('.calendar_daterangepicker_end').val().split('-');
			this.daterange.start = new Date(dateStart[2] + '-' + dateStart[1] + '-' + dateStart[0]);
			this.daterange.end = new Date(dateEnd[2] + '-' + dateEnd[1] + '-' + dateEnd[0]);
			this.daterange.startCompareTo = undefined;
			this.daterange.endCompareTo = undefined;
			this.globalDate.setGlobalDate(this.daterange, this.currentModule, false);
		}
	}

	getLastScan() {
		return this.lastScanDate;
	}

	isSeaPart() {
		return this.isSea;
	}

	getGlobalDateRange() {
		return this.globalDate.range;
	}

	getSelectedRangeGlobalDate() {
		return this.globalDate.getSelectedRange();
	}

	setSelectedRangeGlobalDate(state: number) {
		this.globalDate.setSelectedRange(state, this.currentModule);
	}

	isSelectedPreviousScan() {
		return this.globalDate.getIsSelectedPreviousScan(this.currentModule);
	}

	backToTop() {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
	}

	setProfileImage() {
		this.PROFILE_LOGO = "/assets/images/icon-profile.png";
		// this.profileClass = "img-circle";
		let item = {
			username: this.globalVariable.getUsername()
		}
		const urlSearchParams = new HttpParams()
			.set('method', 'get_logo')
			.set('subDomain', this.globalVariable.getActiveAccount())
			.set('item', JSON.stringify(item));
		this.request.get(`${config.SERVICES.manage_user}/setting/user`, urlSearchParams).subscribe(res => {
			if (res.status == 'ok') {
				// this.profileClass = "img-circle";
				this.PROFILE_LOGO = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image;base64,${res.result}`);
			}
		});
	}

	searchAccountWebsite(keyword: string) {
		this.search = keyword.toLowerCase().trim();
		this.accountList = this.totalAccountList.filter(acc => this.filterAccount(acc.toString().toLowerCase()));
		if (this.accountList.length == 0) {
			this.modalWebsiteList = [];
		} else {
			if (keyword.length > 0) {
				this.selectAccountModal(this.accountList[0].toString());
			} else {
				this.selectAccountModal(this.account);
			}
		}
	}

	filterAccount(acc: string) {
		return acc.toString().indexOf(this.search) > -1 || this.websiteList[acc.toString()].filter(websiteObj => websiteObj.url.toString().toLowerCase().indexOf(this.search) > -1).length > 0;
	}

	getLink(element, path: string) {
		return (element.getAttribute('fh') != null) ? ['/home', this.encodedAccount, this.webId] : [path, this.encodedAccount, this.webId];
	}

	getLinkSEO() {
		this.setDefaultDateByModule(this.router, true);
		if (this.account == 'evermaps') {
			this.router.navigate(['/seo', btoa(this.account), this.webId, 'info']);
		} else if ((this.account == 'ige-xao') && (this.username == 'jba@ige-xao.com')) {
			this.router.navigate(['/seo', btoa(this.account), this.webId, 'diagnostic-warnings']);
		} else {
			this.router.navigate(['/seo', btoa(this.account), this.webId]);
		}

		this.globalVariable.setWebsiteItem({
			webId: this.webId,
			url: this.globalVariable.getUrl(),
			account: this.account
		});
	}

	getActive(element) {
		return (element.getAttribute('fh') != null) ? '' : 'active';
	}

	addAnalyticsScript() {
		let id;
		if (environment.MONETORING_TYPE == 'test') {
			id = 46927989;
		} else if (environment.MONETORING_TYPE == 'normal') {
			id = 48614666;
		}
		let counterScript = document.createElement('script');
		counterScript.id = 'analyticsScript';
		counterScript.type = 'text/javascript';
		counterScript.innerHTML = '(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter' + id + ' = new Ya.Metrika({ id:' + id + ', clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true, ut:"noindex" }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");';
		this._elementRef.nativeElement.appendChild(counterScript);
		let counterScriptWatch = document.createElement('noscript');
		counterScriptWatch.id = 'analyticsScriptWatch';
		counterScriptWatch.innerHTML = '<div><img src="https://mc.yandex.ru/watch/' + id + '?ut=noindex" style="position:absolute; left:-9999px;" alt="" /></div>';
		this._elementRef.nativeElement.appendChild(counterScriptWatch);
	}

	validateDateScanningWebsite(account: string, webId: number, url: string) {

		const fn = window['appGlobalComponentRef'].component;

		if (fn.getCurrentModule() == 'seo' || fn.getCurrentModule() == 'staging' || fn.getCurrentModule() == 'youtube' || fn.getCurrentModule() == undefined) {
			// //console.log('A');
			// //console.log('account: ' + account);
			// //console.log('webId: ' + webId);
			const urlSearchParams = new HttpParams()
				.set('account', account)
				.set('webId', webId.toString());
			this.request.get(`${config.SERVICES.manage_calendar}/calendar/get_all_scan_date`, urlSearchParams).subscribe(res => {
				window['mapDateScanEachMonth'] = JSON.parse(res.result);
				// console.log('### 1A ###');
				// console.log(window['mapDateScanEachMonth']);
				this.underlineDateCalendar();
			});
		} else if (fn.getCurrentModule() == 'logs') {
			const urlSearchParams = new HttpParams()
				.set('siteWeb', url);
			this.request.get(`${config.SERVICES.manage_calendar}/calendar/get_all_logs_date`, urlSearchParams).subscribe(res => {
				window['mapDateScanEachMonth'] = JSON.parse(res.result);
				this.underlineDateCalendar();
			});
		} else {
			// //console.log('1B');
			// this.mapDateScanEachMonth = {};
		}

		// this.mapDateScanEachMonth = {
		// 	'Jan-2017': ["1", "15", "20"],
		// 	'Feb-2017': ["2", "15", "20"],
		// 	'Mar-2017': ["3", "15", "20"],
		// 	'Apr-2017': ["4", "15", "20"],
		// 	'May-2017': ["5", "15", "20"],
		// 	'Jun-2017': ["6", "15", "20"],
		// 	'Jul-2017': ["7", "15", "20"],
		// 	'Aug-2017': ["8", "15", "20"],
		// 	'Sep-2017': ["9", "15", "20"],
		// 	'Oct-2017': ["10", "15", "20"],
		// 	'Nov-2017': ["11", "15", "20"],
		// 	'Dec-2017': ["12", "15", "20"],
		// };
	}

	underlineDateCalendar() {
		/*** CREATE UNDERLINE TO EACH DATE THAT HAVE SCANNING ON CALENDAR (ONLY TAB 'SEO') ***/
		//ADD CSS UNDERSCORE
		/* SHOULD BE SEPERATE TO prev available or next available */
		$("div.calendar-table").mousedown(function (e) {

			const fn = window['appGlobalComponentRef'].component;

			if (fn.getCurrentModule() == 'seo' || fn.getCurrentModule() == 'staging' || fn.getCurrentModule() == 'youtube' || fn.getCurrentModule() == 'logs') {
				// var myarr = ["1", "15", "20"];

				setTimeout(function () {
					//*** LEFT ***
					$("div.calendar.left .calendar-table table.table-condensed thead tr th.month").filter(function () {
						return true
					}).each(function () {
						let dateMonthTmpLeft = $(this).text();

						Object.keys(window['mapDateScanEachMonth']).forEach(function (k) {
							let keyText = dateMonthTmpLeft.replace(/\s+/g, '-');
							// //console.log(k + " compare: " + keyText);
							if (k === keyText) {

								let myarrA = window['mapDateScanEachMonth'][k];
								// //console.log('match');
								// //console.log(myarrA);
								$("div.calendar.left .calendar-table table.table-condensed tbody tr td.available:not(.off)").filter(function () {
									return true
								}).each(function () {
									if ($.inArray($(this).text(), myarrA) > -1) {
										$(this).addClass('daterangpicker-underscore');
									}
								});
							}
						});
					});
					//*** RIGHT ***/
					$("div.calendar.right .calendar-table table.table-condensed thead tr th.month").filter(function () {
						return true
					}).each(function () {
						let dateMonthTmpLeft = $(this).text();

						Object.keys(window['mapDateScanEachMonth']).forEach(function (k) {
							let keyText = dateMonthTmpLeft.replace(/\s+/g, '-');

							if (k === keyText) {
								let myarrA = window['mapDateScanEachMonth'][k];

								$("div.calendar.right .calendar-table table.table-condensed tbody tr td.available:not(.off)").filter(function () {
									return true
								}).each(function () {
									if ($.inArray($(this).text(), myarrA) > -1) {
										$(this).addClass('daterangpicker-underscore');
									}
								});
							}
						});
					});

				}, 500)
			}
		});

	}

	calendarLogsMonthOfLastDate(minDate, maxDate, showCalendar, doChange) {
		const min = moment(minDate, 'YYYY-MM-DD');
		const max = moment(maxDate, 'YYYY-MM-DD');
		this.daterange.start = new Date(min);
		this.daterange.end = new Date(max);
		this.optionsDatepicker = undefined;
		if (showCalendar) {
			setTimeout(() => {
				this.optionsDatepicker = this.getOptionsDatepicker();
				this.optionsDatepicker['minDate'] = min;
				this.optionsDatepicker['maxDate'] = max;
				this.addRadioButtonDatepicker();
			}, 0);
		}
		if (doChange) {
			this.globalDate.setGlobalDate(this.daterange, 'logs', false, true);
		}
	}

	/**
	 * For set date on calendar change follow staging websiteId.
	 * @param start 
	 * @param end 
	 */
	calendarStagingMonthOfLastDate(start, end, stagingWebId) {
		this.daterange.start = new Date(start);
		this.daterange.end = new Date(end);

		// this.saveSelectedDateCompare(-1, this.daterange.start, this.daterange.end );

		// const startDate = moment(start, 'DD-MM-YYYY');
		// const lastDate = moment(end, 'DD-MM-YYYY');

		// this.dateRangePreviousScan = {
		// 	start: new Date(moment(new Date(startDate.clone().subtract(3, 'month'))).format('YYYY-MM-DD')),
		// 	end: new Date(moment(new Date(lastDate)).format('YYYY-MM-DD')),
		// 	startCompareTo: undefined,
		// 	endCompareTo: undefined
		// };

		this.optionsDatepicker = undefined;
		setTimeout(() => {
			this.optionsDatepicker = this.getOptionsDatepicker();
		}, 100);
		this.validateDateScanningWebsite(this.account, stagingWebId, null);
		this.addRadioButtonDatepicker();

		this.globalDate.setGlobalDate(this.daterange, 'staging', false, true);

		// this.setSelectedRangeGlobalDate(this.globalDate.range.previousScan);

		// this.globalDate.setGlobalDate(this.daterange, this.currentModule, false, true);
		// this.setSelectedRangeGlobalDate(this.globalDate.range.previousScan);
	}

	/**
	 * For set date on calendar change follow youtube websiteId.
	 * @param start 
	 * @param end 
	 */
	calendarYoutubeMonthOfLastDate(start, end, youtubeWebId) {
		this.daterange.start = new Date(start);
		this.daterange.end = new Date(end);

		this.optionsDatepicker = undefined;
		setTimeout(() => {
			this.optionsDatepicker = this.getOptionsDatepicker();
		}, 100);
		this.validateDateScanningWebsite(this.account, youtubeWebId, null);
		this.addRadioButtonDatepicker();

		this.globalDate.setGlobalDate(this.daterange, 'youtube', false, true);
	}

	refreshCalendarSEOWhenRedirectSeoWebsite() {
		this.changeWebsite(this.account, this.webId, this.url);
		this.validateDateScanningWebsite(this.account, this.webId, this.url);
	}

	compare(str1, str2) {
		if (str1.label < str2.label) {
			return -1;
		}
		if (str1.label > str2.label) {
			return 1;
		}
		return 0;
	}

	resizeCalrendarWidthBox() {
		if (window.innerWidth > 1500) {
			return '20px';
		} else {
			return '5px';
		}
	}

	globalFilterStyle() {
		let style = { 'all': 'unset', 'float': 'left', 'cursor': 'pointer' }
		if (!this.isEdgeOrIE) style['margin-top'] = '20px';
		if (window.innerWidth <= 414) {
			style['margin-top'] = '0px';
			style['margin-left'] = '180px';
		} else {
			let elem = $("#globalfilter");
			let previousLi = elem.parent().prev();
			let offsetDistance = (elem.next().offset().left) - ((previousLi.position().left) + previousLi[0].offsetWidth);
			let offsetWidthIcon = elem[0].offsetWidth;
			let marginRight = 0;
			if (offsetDistance > offsetWidthIcon && (previousLi[0].style.display !== 'none')) {
				marginRight = (offsetDistance / 2) - (offsetWidthIcon / 2);
			}
			style['margin-right'] = marginRight + 'px';
		}
		if (!this.getGlobalFilterEnabledPage() || this.isDisableGlobalFilter) {
			style['pointer-events'] = 'none';
			style['opacity'] = '0.6';
		}
		return style;
	}

	getGlobalFilterEnabledPage() {
		let isSeaOverview = /^\/(?:sea)\/.+\/(?:overview)/.test(this.router.url) ? true : false;
		let isSeaWarnings = /^\/(?:sea)\/.+\/(?:warnings)/.test(this.router.url) ? true : false;
		let isSeaAds = /^\/(?:sea)\/.+\/(?:ads)/.test(this.router.url) ? true : false;
		let isSeaSearchterms = /^\/(?:sea)\/.+\/(?:searchterms)/.test(this.router.url) ? true : false;
		let isSeaController = /^\/(?:sea)\/.+\/(?:controller)/.test(this.router.url) ? true : false;
		return isSeaOverview || isSeaWarnings || isSeaAds || isSeaSearchterms || isSeaController;
	}

	globalFilterIconStyle() {
		let icon = this.globalFilterService.isActive() ? 'icon-filter-new-active-new' : this.isHoverGlobalFilter ? 'icon-filter-new-blue' : 'icon-filter-new';
		let backgroundImage = `url(/assets/images/${!this.getGlobalFilterEnabledPage() ? 'icon-filter-new' : icon}.png)`;
		return {
			'width': '18px',
			'height': '20px',
			'display': 'inline-block',
			'background-image': backgroundImage,
			'background-repeat': 'no-repeat',
			'background-size': '100%'
		};
	}

	globalFilterLabelStyle() {
		let color = this.globalFilterService.isActive() ? '#f69b28' : this.isHoverGlobalFilter ? '#519FFC' : '#6b6b6b';
		return {
			'font-family': 'Proxima Nova Bold',
			'vertical-align': 'top',
			'display': 'inline-block',
			'color': !this.getGlobalFilterEnabledPage() ? '#6b6b6b' : color
		};
	}

	customGlobalFilterDialog() {
		this.globalFilterService.customGlobalFilterDialog();
	}

}
