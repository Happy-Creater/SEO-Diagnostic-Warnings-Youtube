import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { DownloadPopupModule } from 'app/_modules/download-popup/download-popup.module';
import { ModalStandardModule } from 'app/_modules/modal-standard/modal-standard.module';
import { TableStandardModule } from 'app/_modules/table-standard/table-standard.module';
import { PaginatorModule } from 'app/_modules/paginator/paginator.module';
import { DropdownModule } from 'app/_modules/dropdown/dropdown.module';
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
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { FormatNumberWithKMBModule } from 'app/_modules/format-number/format-number-with-kmb.module';
import { DDCustomModule } from 'app/_modules/dd-custom/dd-custom.module';
import { SeoGoogleMyBusinessRoutingModule } from './seo-google-my-business-routing.module';
import { SeoGoogleMyBusinessComponent } from './seo-google-my-business.component';
import { SeoGmbOverviewComponent } from './seo-gmb-overview/seo-gmb-overview.component';
import { SeoGmbDiagnosticWarningsComponent } from './seo-gmb-diagnostic-warnings/seo-gmb-diagnostic-warnings.component';
import { SeoGmbLocDetailsComponent } from './seo-gmb-loc-details/seo-gmb-loc-details.component';
import { SeoGmbCustAutomationComponent } from './seo-gmb-cust-automation/seo-gmb-cust-automation.component';
import { SeoGmbRankingComponent } from './seo-gmb-ranking/seo-gmb-ranking.component';
import { AbbreviateNumberModule } from 'app/_modules/abbreviate-number/abbreviate-number.module';
import { SeoGmbReportComponent } from './seo-gmb-report/seo-gmb-report.component';
import { FileDropModule } from 'ngx-file-drop';
import { FormatSignificationNumberModule } from 'app/_modules/format-number/format-signification-number.module';
import { SeoGmbShareVisibilityComponent } from './seo-gmb-share-visibility/seo-gmb-share-visibility.component';
import { SeoGmbSentimentAnalysisComponent } from './seo-gmb-sentiment-analysis/seo-gmb-sentiment-analysis.component';
import { LoadingDelayModule } from 'app/_modules/loading-delay/loading-delay.module';
import { SeoGmbAccountSelectComponent } from './seo-gmb-account-select/seo-gmb-account-select.component';

@NgModule({
  imports: [
    CommonModule,
    SeoGoogleMyBusinessRoutingModule,
    FormsModule,
    ChartModule,
    DownloadPopupModule,
    ModalStandardModule,
    ModalModule.forRoot(),
    TableStandardModule,
    PaginatorModule,
    DropdownModule,
    BootstrapModalModule,
    MenuModule,
    ProgressBarModule,
    ProgressbarLoadingModule,
    ToolTipModule,
    BoxLoadingModule,
    ClickOutsideModule,
    GaugeCustomChartModule,
    CheckboxControllerModule,
    TextboxClearableModule,
    MyDatePickerModule,
    CategoryModule,
    DragScrollModule,
    VideoTutorModule,
    LightboxModule,
    QuestionsCommentsModule,
    FormatNumberWithKMBModule,
    DDCustomModule,
    AbbreviateNumberModule,
    FileDropModule,
    FormatSignificationNumberModule,
    LoadingDelayModule
  ],
  declarations: [
    SeoGoogleMyBusinessComponent,
    SeoGmbOverviewComponent,
    SeoGmbDiagnosticWarningsComponent,
    SeoGmbLocDetailsComponent,
    SeoGmbCustAutomationComponent,
    SeoGmbRankingComponent,
    SeoGmbReportComponent,
    SeoGmbShareVisibilityComponent,
    SeoGmbSentimentAnalysisComponent,
    SeoGmbAccountSelectComponent],
  entryComponents: [
  ],
  providers: [
  ],
  bootstrap: [
  ]
})
export class SeoGoogleMyBusinessModule { }
