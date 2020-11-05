import { Component, OnInit, ViewChild, OnDestroy, NgModuleFactory, SystemJsNgModuleLoader, Injector, ViewContainerRef ,SimpleChanges} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { InitializeService } from 'app/_services/initialize/initialize.service';
import { DDCustomComponent } from 'app/_modules/dd-custom/dd-custom.component';
import { BoxLoadingDirective } from "app/_modules/box-loading/directive/box-loading.directive";
import { GlobalVariableService } from 'app/_services/global_variable/global-variable.service';
import { environment } from 'environments/environment';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { ChannelYoutubeVariableService } from 'app/_services/channel_youtube_variable/channel-youtube-variable.service';

@Component({
	selector: 'app-seo',
	templateUrl: './seo.component.html',
	styleUrls: ['./seo.component.css'],
	providers: [SystemJsNgModuleLoader, ChannelYoutubeVariableService],
})
export class SeoComponent implements OnInit, OnDestroy {
	/**
	 * Dropdown custom component.
	 */
	@ViewChild(DDCustomComponent)
	ddCustom: DDCustomComponent;

	@ViewChild(BoxLoadingDirective)
	boxloading: BoxLoadingDirective;

	monetoringType: any;
	account;
	websiteId;

	globalListener;
	userRole;

	hideVideo = false;

	constructor(private router: Router,
		private init: InitializeService,
		private activeRoute: ActivatedRoute,
		public global: GlobalVariableService,
		private translate: TranslateService,
		private loader: SystemJsNgModuleLoader,
		private inj: Injector,
		private vcRef: ViewContainerRef,
		private channelYoutube: ChannelYoutubeVariableService,
	) {
		this.userRole = this.global.getUserRole().toLowerCase();
	}

	ngOnInit() {
		this.monetoringType = environment.MONETORING_TYPE;
		this.init.initUserWebsiteByParam(null, this.activeRoute);
		// this.router.events.subscribe(event => {
		// 	if (event instanceof NavigationStart) {
		// 		this.boxloading.showCenter();
		// 	} else if (event instanceof NavigationEnd) {
		// 		//setTimeout(()=>this.boxloading.hide(),3000);
		// 		//this.boxloading.hide();
		// 	}
		// });

		this.globalListener = Observable.combineLatest(
			this.global.getWebsiteChange()
		).subscribe(([websiteItem, dateItem]) => {
			this.account = websiteItem.account;
			this.websiteId = websiteItem.webId;

			this.channelYoutube.init(this.account, this.websiteId);

			this.hideVideo = false;
			// force hide video
			let username = this.global.getUsername();
			if (username == 'qmortel@carglass.fr') {
				this.hideVideo = true;
			}
		});

		this.loader.load('./seo-youtube/seo-youtube.module#SeoYoutubeModule')
			.then((moduleFactory: NgModuleFactory<any>) => {
				const moduleRef = moduleFactory.create(this.inj);
				const entryComponent = (<any>moduleFactory.moduleType).entry;
				const compFactory =
					moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
				this.vcRef.createComponent(compFactory);
			});
	}

	ngOnDestroy(): void {
		if (this.globalListener != undefined) {
			this.globalListener.unsubscribe();
		}
	}
	ngOnChanges(changes: SimpleChanges): void {
	//	this.reload("offsite-opt-blog-automations")
	  }
	/**
	 * Toggle dropdown
	 */
	toggleDropdown() {
		if (this.ddCustom.isVisibleDropdownList()) {
			this.ddCustom.hideDropdownList();
		} else {
			this.ddCustom.showDropdownList();
		}
	}

	getRouteLinkbuilding() {
		if (this.global.account == 'evermaps') {
			return ['./offsite-opt-link-competitors'];
		} else {
			return ['./offsite-opt-linkbuilding'];
		}
	}

	setNormalText(str) {
		let result = str.toLowerCase();
		return result.charAt(0).toUpperCase() + result.slice(1);
	}

	setUpperCaseText(str) {
		return str.toUpperCase();
	}

	setLowerCaseText(str) {
		return str.toLowerCase();
	}

	translateString(str: string) {
		return this.translate.instant(str);
	}
	change(){
	//	location.reload()
	}
}
