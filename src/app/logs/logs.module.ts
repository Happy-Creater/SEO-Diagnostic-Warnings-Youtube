import { NgModule } from '@angular/core';
import { BoxLoadingModule } from 'app/_modules/box-loading/box-loading.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';
import { CheckboxControllerModule } from 'app/_modules/checkbox-controller/checkbox-controller.module';
import { ClickOutsideModule } from 'app/_modules/click-outside/click-outside.module';
import { MenuModule } from '../_modules/menu/menu.module';
import { ModalModule } from 'ngx-modialog';
import { ProgressBarModule } from 'app/_modules/progress-bar/progress-bar.module';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { ModalStandardModule } from '../_modules/modal-standard/modal-standard.module';
import { DownloadPopupModule } from 'app/_modules/download-popup/download-popup.module';
import { DropdownModule } from '../_modules/dropdown/dropdown.module';
import { TableStandardModule } from 'app/_modules/table-standard/table-standard.module';
import { LogsComponent } from './logs.component';
import { LogsRoutingModule } from './logs-routing.module';
import { LogsGlobalAnalysisComponent } from './logs-global-analysis/logs-global-analysis.component';
import { CategoryModule } from '../_modules/category/category.module';
import { VideoTutorModule } from 'app/_modules/video-tutor/video-tutor.module';
import { TextboxClearableModule } from '../_modules/textbox-clearable/textbox-clearable.module';
import { LogsDiagnosticComponent } from './logs-diagnostic/logs-diagnostic.component';
import { DiagnosticWarningComponent } from './logs-diagnostic/diagnostic-warnings/diagnostic-warnings.component';
import { LogsCrawlBotBehaviorComponent } from './logs-crawl-bot-behavior/logs-crawl-bot-behavior.component';
import { PaginatorModule } from 'app/_modules/paginator/paginator.module';
import { LogsCrossAnalysisComponent } from './logs-cross-analysis/logs-cross-analysis.component';
import { LogsInstantLogsAnalysisComponent } from './logs-instant-logs-analysis/logs-instant-logs-analysis.component';
import { LogsInstantWebpagesearchComponent } from './logs-instant-logs-analysis/logs-instant-webpagesearch/logs-instant-webpagesearch.component';
import { DiagnosticLowCrawledPagesComponent } from './logs-diagnostic/diagnostic-low-crawled-pages/diagnostic-low-crawled-pages.component';

@NgModule({
  imports: [
    BoxLoadingModule,
    BootstrapModalModule,
    ClickOutsideModule,
    CommonModule,
    ChartModule,
    CheckboxControllerModule,
    DropdownModule,
    DownloadPopupModule,
    FormsModule,
    MenuModule,
    ModalModule.forRoot(),
    ModalStandardModule,
    ProgressBarModule,
    TableStandardModule,
    LogsRoutingModule,
    CategoryModule,
    VideoTutorModule,
    TextboxClearableModule,
    PaginatorModule
  ],
  declarations: [
    LogsComponent,
    LogsGlobalAnalysisComponent,
    LogsDiagnosticComponent,
    DiagnosticWarningComponent,
    LogsCrawlBotBehaviorComponent,
    LogsCrossAnalysisComponent,
    LogsInstantLogsAnalysisComponent,
    LogsInstantWebpagesearchComponent,
    DiagnosticLowCrawledPagesComponent,
  ], entryComponents: [
  ]
})
export class LogsModule { }
