import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeHomeComponent } from './components/home/home.component';
import { YtScoreComponent } from './components/yt-score/yt-score.component';
import { YtScoreDetailComponent } from './components/yt-score-detail/yt-score-detail.component';
import { YtThematicReportComponent } from './components/yt-thematic-report/yt-thematic-report.component';
import { YtTopWarningsComponent } from './components/yt-top-warnings/yt-top-warnings.component';
import { YtThematicReportItemComponent } from './components/yt-thematic-report-item/yt-thematic-report-item.component';
import { YtDetailsComponent } from './components/yt-details/yt-details.component';
import { ChartModule } from 'angular2-highcharts';
import { TranslateModule } from '@ngx-translate/core';
import { NumberFormatPipe } from './pipe/number-format.pipe';
import { CaretClassPipe } from './pipe/caret-class.pipe';
import { MonthStringPipe } from './pipe/month-string.pipe';
import { DetailsFilterService } from './services/details-filter-service.service';
import {LoadingDelayModule} from "../../../_modules/loading-delay/loading-delay.module";

@NgModule({
    imports: [
        CommonModule,
        ChartModule,
        TranslateModule,
        LoadingDelayModule,
    ],
  declarations: [
    YoutubeHomeComponent,
    YtScoreComponent,
    YtScoreDetailComponent,
    YtThematicReportComponent,
    YtTopWarningsComponent,
    YtThematicReportItemComponent,
    YtDetailsComponent,
    NumberFormatPipe,
    CaretClassPipe,
    MonthStringPipe,
  ],
  exports: [
    YoutubeHomeComponent,
  ],
  providers: [
    DetailsFilterService
  ]
})
export class YoutubeModule { }
