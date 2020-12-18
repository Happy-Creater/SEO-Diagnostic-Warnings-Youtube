import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../_services/authentication/authentication.service';
import { InitializeService } from '../_services/initialize/initialize.service';
import { GlobalVariableService } from '../_services/global_variable/global-variable.service';
@Component({
	selector: 'base-app',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {


	constructor(private activatedRoute: ActivatedRoute,
		private auth: AuthenticationService,
		private globalVariable: GlobalVariableService,
		private init: InitializeService) { }

	ngOnInit() {
		this.initToken();
	}
	initToken() {

		let paramObservable = this.activatedRoute.queryParams.subscribe((params: Params) => {
			// get key from query param
			let token = params['key'];
			if (token) { // this case is from the login page
				window.localStorage.clear();
				window.sessionStorage.clear();
				this.auth.setRefreshToken(token);
				this.auth.refreshToken().subscribe(
					(response1) => {
						let accessToken = response1.access_token;
						let userId = response1.userId;
						let username = response1.username;
						this.auth.setAccessToken(accessToken);
						this.globalVariable.setUserId(userId);
						this.globalVariable.setUsername(username);
						this.init.initUserWebsite("/home");
					},
					(err) => {
						console.log(err);
					}
				);
			} else if (this.auth.isLogin()) {
				this.init.initUserWebsite("/home");
			} else {
				this.auth.logout();
			}

		});
	}

}
