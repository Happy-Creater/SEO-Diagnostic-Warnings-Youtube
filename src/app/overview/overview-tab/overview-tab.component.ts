import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-overview-tab',
	templateUrl: './overview-tab.component.html',
	styleUrls: ['./overview-tab.component.css']
})
export class OverviewTabComponent implements OnInit {

	activeTab:string;

	constructor() { }

	ngOnInit() {
		this.activeTab = 'seo';
	}

	updateActiveTab(seleted:string):void{
		this.activeTab = seleted;
	}

	isActiveTab(tab:string):boolean{
		return this.activeTab === tab;
	}
}
