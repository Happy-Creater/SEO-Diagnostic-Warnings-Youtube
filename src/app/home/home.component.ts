import { Component, OnInit, OnDestroy } from '@angular/core';
import { InitializeService } from '../_services/initialize/initialize.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';
import { GlobalVariableService } from 'app/_services/global_variable/global-variable.service';
import 'rxjs/add/operator/filter';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


	websiteData: Array<Object>;
	encodedAccount: string;
	webId: number;
	account: string;
	username: string;
	listener;

	eventQuestionPopup;

	constructor(private init: InitializeService,
		private activeRoute: ActivatedRoute,
		private globalVariable: GlobalVariableService) { }

	ngOnInit() {
		this.init.initUserWebsiteByParam(null, this.activeRoute);

		// Website Change Listener
		this.listener = this.globalVariable.websiteChange.asObservable()
			.filter(websiteObj => websiteObj !== null)
			.subscribe(websiteObj => {
				this.webId = websiteObj.webId;
				this.encodedAccount = btoa(websiteObj.account);
				this.account = websiteObj.account;
				this.username = this.globalVariable.getUsername();
			});
	}

	ngOnDestroy(): void {
		this.listener.unsubscribe();
	}

	getLink(element, path: string) {
		return (element.getAttribute('fh') != null) ? ['/home', this.encodedAccount, this.webId] : [path, this.encodedAccount, this.webId];
	}

	getLinkSEO() {
		if (this.account == 'evermaps') {
			return ['/seo', this.encodedAccount, this.webId, 'info'];
		} else if ((this.account == 'ige-xao') && (this.username == 'jba@ige-xao.com')) {
			return ['/seo', this.encodedAccount, this.webId, 'diagnostic-warnings'];
		} else {
			return ['/seo', this.encodedAccount, this.webId];
		}
	}

	getActive(element) {
		return (element.getAttribute('fh') != null) ? '' : 'active';
	}
}
