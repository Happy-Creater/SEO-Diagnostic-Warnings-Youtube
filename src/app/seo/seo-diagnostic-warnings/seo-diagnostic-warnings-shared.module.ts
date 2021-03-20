import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LightboxModule} from 'angular2-lightbox/lightbox.module';
import {LoadingDelayModule} from 'app/_modules/loading-delay/loading-delay.module';
import {DownloadPopupModule} from 'app/_modules/download-popup/download-popup.module';
import {DropdownModule} from 'app/_modules/dropdown/dropdown.module';
import {ChartModule} from 'angular2-highcharts';
import {ModalStandardModule} from 'app/_modules/modal-standard/modal-standard.module';
import {QuestionsCommentsModule} from 'app/_modules/questions-comments/questions-comments.module';
import { HomeComponent } from './youtube/home/home.component';
import { YtScoreComponent } from './youtube/yt-score/yt-score.component';
import { YtScoreDetailComponent } from './youtube/yt-score-detail/yt-score-detail.component';
import { NumberFormatPipe } from './youtube/number-format.pipe';
import { CaretClassPipe } from './youtube/caret-class.pipe';
import { MonthStringPipe } from './youtube/month-string.pipe';
import { YtThematicReportComponent } from './youtube/yt-thematic-report/yt-thematic-report.component';
import { YtTopWarningsComponent } from './youtube/yt-top-warnings/yt-top-warnings.component';
import { YtThematicReportItemComponent } from './youtube/yt-thematic-report-item/yt-thematic-report-item.component';
import { YtDetailsComponent } from './youtube/yt-details/yt-details.component';
import {TranslateModule} from '@ngx-translate/core';
import {DetailsFilterService} from './youtube/details-filter-service.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LightboxModule,
    LoadingDelayModule,
    DownloadPopupModule,
    DropdownModule,
    ChartModule,
    ModalStandardModule,
    QuestionsCommentsModule,
    TranslateModule
  ],
  declarations: [HomeComponent, YtScoreComponent, YtScoreDetailComponent, NumberFormatPipe, CaretClassPipe, MonthStringPipe, YtThematicReportComponent, YtTopWarningsComponent, YtThematicReportItemComponent, YtDetailsComponent],
  entryComponents: [],
  providers: [
    DetailsFilterService
  ],
  exports: [
    HomeComponent
  ]
})
export class SeoDiagnosticWarningsSharedModule {
}
