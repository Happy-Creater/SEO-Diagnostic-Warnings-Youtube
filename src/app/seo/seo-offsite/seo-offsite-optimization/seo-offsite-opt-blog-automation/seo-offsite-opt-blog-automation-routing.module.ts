import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoOffsiteOptBlogAutomationComponent } from './seo-offsite-opt-blog-automation.component';
import { SeoComponent } from '../../../seo.component'


const routes = [
	{
		path: '', component: SeoOffsiteOptBlogAutomationComponent
	},
	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SeoOffsiteOptBlogAutomationRoutingModule { }
