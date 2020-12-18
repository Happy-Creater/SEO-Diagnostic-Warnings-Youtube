import { NgModule } from '@angular/core';
import { SeoYoutubeOverviewComponent } from './seo-youtube-overview/seo-youtube-overview.component';
import { SeoYoutubeComponent } from './seo-youtube.component';
import { SeoYoutubeRoutingModule } from './seo-youtube-routing.module';
// import { ChannelYoutubeVariableService } from '../../_services/channel_youtube_variable/channel-youtube-variable.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { DownloadPopupModule } from 'app/_modules/download-popup/download-popup.module';
import { ModalStandardModule } from 'app/_modules/modal-standard/modal-standard.module';
import { TableStandardModule } from 'app/_modules/table-standard/table-standard.module';
import { PaginatorModule } from 'app/_modules/paginator/paginator.module';
import { DropdownModule } from 'app/_modules/dropdown/dropdown.module';
// import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap/src/bootstrap';
import { MenuModule } from 'app/_modules/menu/menu.module';
import { ProgressBarModule } from 'app/_modules/progress-bar/progress-bar.module';
import { ProgressbarLoadingModule } from 'app/_modules/progressbar-loading/progressbar-loading.module';
import { ToolTipModule } from 'app/_modules/tooltip/tool-tip.module';
import { BoxLoadingModule } from 'app/_modules/box-loading/box-loading.module';
import { ClickOutsideModule } from 'app/_modules/click-outside/click-outside.module';
import { GaugeCustomChartModule } from 'app/_modules/highchart/gauge-custom-chart/gauge-custom-chart.module';
import { CheckboxControllerModule } from 'app/_modules/checkbox-controller/checkbox-controller.module';
import { TextboxClearableModule } from 'app/_modules/textbox-clearable/textbox-clearable.module';
import { MyDatePickerModule } from 'mydatepicker/dist/my-date-picker.module';
import { CategoryModule } from 'app/_modules/category/category.module';
import { DragScrollModule } from 'angular2-drag-scroll/src/angular2-drag-scroll';
import { VideoTutorModule } from 'app/_modules/video-tutor/video-tutor.module';
import { LightboxModule } from 'angular2-lightbox/lightbox.module';
import { QuestionsCommentsModule } from 'app/_modules/questions-comments/questions-comments.module';
import { ModalModule } from 'ngx-modialog';
import { FormatNumberModule } from 'app/_modules/format-number/format-number.module';
import { FormatSignificationNumberModule } from 'app/_modules/format-number/format-signification-number.module';
import { SeoYoutubeBenchmarkComponent } from './seo-youtube-benchmark/seo-youtube-benchmark.component';
import { NguiAutoCompleteModule } from '@ngui/auto-complete/dist/auto-complete.module';
import { AbbreviateNumberModule } from 'app/_modules/abbreviate-number/abbreviate-number.module';
import { FormatNumberWithKMBModule } from 'app/_modules/format-number/format-number-with-kmb.module';
import { SeoYoutubeOptimizationNewVideosOptComponent } from './seo-youtube-optimization/seo-youtube-optimization-new-videos-opt/seo-youtube-optimization-new-videos-opt.component';
import { SeoYoutubeWarningsComponent } from './seo-youtube-warnings/seo-youtube-warnings.component';
import { SeoYoutubeKeywordRankCheckerComponent } from './seo-youtube-keyword-rank-checker/seo-youtube-keyword-rank-checker.component';
import { TextElipsisModule } from 'app/_modules/elipsis/text-elipsis.module';
import { SeoYoutubeBenchmarkChartComponent } from './seo-youtube-benchmark-chart/seo-youtube-benchmark-chart.component';
import { OfflineComparisonModule } from 'app/_modules/offline-comparison/offline-comparison.module';

@NgModule({
  imports: [
    CommonModule,
    SeoYoutubeRoutingModule,
    FormsModule,
    ChartModule,
    DownloadPopupModule,
    ModalStandardModule,
    ModalModule.forRoot(),
    TableStandardModule,
    PaginatorModule,
    DropdownModule,
    // BootstrapModalModule,
    MenuModule,
    ProgressBarModule,
    ProgressbarLoadingModule,
    ToolTipModule,
    BoxLoadingModule,
    ClickOutsideModule,
    GaugeCustomChartModule,
    CheckboxControllerModule,
    TextboxClearableModule,
    AbbreviateNumberModule,
    NguiAutoCompleteModule,
    MyDatePickerModule,
    CategoryModule,
    DragScrollModule,
    VideoTutorModule,
    LightboxModule,
    QuestionsCommentsModule,
    FormatNumberModule,
    FormatSignificationNumberModule,
    FormatNumberWithKMBModule,
    TextElipsisModule,
    OfflineComparisonModule
  ],
  declarations: [
    SeoYoutubeComponent,
    SeoYoutubeOverviewComponent,
    SeoYoutubeBenchmarkComponent,
    SeoYoutubeOptimizationNewVideosOptComponent,
    SeoYoutubeWarningsComponent,
    SeoYoutubeKeywordRankCheckerComponent,
    SeoYoutubeBenchmarkChartComponent
  ],
  entryComponents: [
  ],
  providers: [
  ],
  bootstrap: [
  ]
})
export class SeoYoutubeModule { }
