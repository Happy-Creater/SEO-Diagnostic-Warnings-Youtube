import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalViewComponent } from './global-view/global-view.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ChartModule } from 'angular2-highcharts';
import { CategoryModule } from '../_modules/category/category.module';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { UtilService } from 'app/_services/util/util.service';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { TextElipsisModule } from 'app/_modules/elipsis/text-elipsis.module';
import { TextboxClearableModule } from 'app/_modules/textbox-clearable/textbox-clearable.module';
import { VideoTutorModule } from 'app/_modules/video-tutor/video-tutor.module';
import { FirstTextModule } from 'app/_modules/first-text/first-text.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { QuestionsCommentsModule } from 'app/_modules/questions-comments/questions-comments.module';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		ChartModule,
		NguiAutoCompleteModule,
		VirtualScrollModule,
		CategoryModule,
		ModalModule.forRoot(),
		BootstrapModalModule,
		TextElipsisModule,
		TextboxClearableModule,
		VideoTutorModule,
		FirstTextModule,
		TooltipModule.forRoot(),
		QuestionsCommentsModule,
		TranslateModule
	],
	declarations: [
		GlobalViewComponent,
		HomeComponent
	],
	providers: [
		UtilService
	],
	entryComponents: [
	]
})
export class HomeModule { }
