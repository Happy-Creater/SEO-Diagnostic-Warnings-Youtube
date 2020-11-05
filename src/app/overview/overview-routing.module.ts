import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OverviewSeoComponent } from './overview-seo/overview-seo.component';
import { OverviewSeaComponent } from './overview-sea/overview-sea.component';
import { OverviewDataComponent } from './overview-data/overview-data.component';
import { OverviewTabComponent } from './overview-tab/overview-tab.component';
import { OverviewComponent } from './overview.component';

const routes=[

	{ 
		path: '',component:OverviewComponent,
		children:[
			{
				path:'',component:OverviewTabComponent,outlet:'overview_outlet'
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class OverviewRoutingModule { }
