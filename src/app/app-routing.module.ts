import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { BaseComponent } from './base/base.component';
import { DummyComponent } from './dummy/dummy.component';
import { ProfileComponent } from './profile/profile.component';
import { ChartComponent } from './chart/chart.component';
import { UnavaiableComponent } from './unavaiable/unavaiable.component';

const routes = [

	{ path: 'base', component: BaseComponent },
	{ path: 'dummy', component: DummyComponent },
	{ path: 'unavailable', component: UnavaiableComponent },
	{ path: 'chart', component: ChartComponent },
	
	{
		path: 'home/:account/:id',
		loadChildren: './home/home.module#HomeModule',
		canLoad: [AuthGuard]
	},
	{
		path: 'seo/:account/:id',
		loadChildren: './seo/seo.module#SeoModule',
		canLoad: [AuthGuard]
	},
	{
		path: 'sea/:account/:id',
		loadChildren: './sea/sea.module#SeaModule',
		canLoad: [AuthGuard]
	},
	{
		path: 'data/:account/:id',
		loadChildren: './data/data.module#DataModule',
		canLoad: [AuthGuard]
	},
	{
		path: 'settings/:account/:id',
		loadChildren: './settings/settings.module#SettingsModule',
		canLoad: [AuthGuard]
	},
	{
		path: 'logs/:account/:id',
		loadChildren: './logs/logs.module#LogsModule',
		canLoad: [AuthGuard]
	},
	{
		path: 'profile/:account/:id',
		loadChildren: './profile/profile.module#ProfileModule',
		canLoad: [AuthGuard]
	},
	{
		path: 'global-search-vision/:account/:id',
		loadChildren: './gsv/gsv.module#GsvModule',
		canLoad: [AuthGuard]
	},

	//{ path: '', redirectTo: 'base' ,pathMatch: 'full'},
	// otherwise redirect to home

	{ path: '**', redirectTo: 'base' }

];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
