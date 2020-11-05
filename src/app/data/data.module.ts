import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataRoutingModule } from './data-routing.module';
import { ChartModule } from 'angular2-highcharts';
import { DataComponent } from './data.component';
import { FormsModule } from "@angular/forms";
import { DataReportOverviewComponent } from './data-report-overview/data-report-overview.component';
import { DataDiagnosticOverviewComponent } from './data-diagnostic-overview/data-diagnostic-overview.component';
import { DataOptimizationOverviewComponent } from './data-optimization-overview/data-optimization-overview.component';
import { MenuModule } from "app/_modules/menu/menu.module";
import { DataReportWebpagemonetoringComponent } from './data-report-webpagemonetoring/data-report-webpagemonetoring.component';
import { DropdownModule } from "app/_modules/dropdown/dropdown.module";
import { DDCustomModule } from "app/_modules/dd-custom/dd-custom.module";
import { ClickOutsideModule } from "app/_modules/click-outside/click-outside.module";
import { PaginatorModule } from "app/_modules/paginator/paginator.module";
import { TableStandardModule } from "app/_modules/table-standard/table-standard.module";
import { BoxLoadingModule } from "app/_modules/box-loading/box-loading.module";
import { TextMaskModule } from 'angular2-text-mask';
import { DataDiagnosticChannelsComponent } from './data-diagnostic-channels/data-diagnostic-channels.component';
import { CategoryModule } from '../_modules/category/category.module';
import { VideoTutorModule } from 'app/_modules/video-tutor/video-tutor.module';
import { TranslateModule } from '@ngx-translate/core';
import { DataReportKpisComponent } from './data-report-kpis/data-report-kpis.component';
import { DataReportPisComponent } from './data-report-pis/data-report-pis.component';
import { DataReportOpisPorteeComponent } from './data-report-opis-portee/data-report-opis-portee.component';
import { DataReportOpisEngagementComponent } from './data-report-opis-engagement/data-report-opis-engagement.component';
import { DataReportOpisConversionComponent } from './data-report-opis-conversion/data-report-opis-conversion.component';
import { DataReportOpisFideliteComponent } from './data-report-opis-fidelite/data-report-opis-fidelite.component';
import { DataReportGlossaryComponent } from './data-report-glossary/data-report-glossary.component';
import { DataTrackingComponent } from './data-tracking/data-tracking.component';
import { ModalStandardModule } from 'app/_modules/modal-standard/modal-standard.module';
import { BsDropdownModule } from 'app/_modules/bs-dropdown/bs-dropdown.module';
import { DownloadPopupModule } from 'app/_modules/download-popup/download-popup.module';
import { GaugeCustomChartModule } from 'app/_modules/highchart/gauge-custom-chart/gauge-custom-chart.module';

@NgModule({
  imports: [
    CommonModule,
    DataRoutingModule,
    FormsModule,
    ChartModule,
    DropdownModule,
    DDCustomModule,
    BsDropdownModule,
    ClickOutsideModule,
    PaginatorModule,
    DataRoutingModule,
    TableStandardModule,
    MenuModule,
    BoxLoadingModule,
    TextMaskModule,
    CategoryModule,
    VideoTutorModule,
    TranslateModule,
    ModalStandardModule,
    DownloadPopupModule,
    GaugeCustomChartModule
  ],
  declarations: [
    DataComponent,
    DataReportOverviewComponent,
    DataDiagnosticOverviewComponent,
    DataOptimizationOverviewComponent,
    DataReportWebpagemonetoringComponent,
    DataDiagnosticChannelsComponent,
    DataReportKpisComponent,
    DataReportPisComponent,
    DataReportOpisPorteeComponent,
    DataReportOpisEngagementComponent,
    DataReportOpisConversionComponent,
    DataReportOpisFideliteComponent,
    DataReportGlossaryComponent,
    DataTrackingComponent
  ]
})
export class DataModule { }
