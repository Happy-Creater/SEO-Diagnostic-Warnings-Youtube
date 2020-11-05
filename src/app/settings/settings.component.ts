import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InitializeService } from '../_services/initialize/initialize.service';
import { GlobalVariableService } from "app/_services/global_variable/global-variable.service";

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	websiteData: Array<Object>;
	USER_ROLE;

	constructor(private init: InitializeService,
		private global: GlobalVariableService,
		private activeRoute: ActivatedRoute) { }

	ngOnInit() {
		this.init.initUserWebsiteByParam(null, this.activeRoute);
		this.USER_ROLE = this.global.getUserRole();
	}

}
