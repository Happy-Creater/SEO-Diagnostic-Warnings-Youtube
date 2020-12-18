import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalViewComponent } from './global-view/global-view.component';
import { HomeComponent } from './home.component';

const routes = [
	{
		path: '', component: HomeComponent,
		children: [
			{ path: '', redirectTo: 'global', pathMatch: 'full' },
			{ path: 'global', component: GlobalViewComponent },
			{ path: '**', redirectTo: 'global' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
