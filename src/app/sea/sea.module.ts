import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeaComponent } from './sea.component';
import { GaugeCustomChartModule } from '../_modules/highchart/gauge-custom-chart/gauge-custom-chart.module';
import { SeaRoutingModule } from './sea-routing.module';
import { ChartModule } from 'angular2-highcharts';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { MenuModule } from '../_modules/menu/menu.module';
import { DDCustomModule } from '../_modules/dd-custom/dd-custom.module';
import { ClickOutsideModule } from '../_modules/click-outside/click-outside.module';
import { DropdownModule } from '../_modules/dropdown/dropdown.module';
import { CheckboxControllerModule } from '../_modules/checkbox-controller/checkbox-controller.module';
import { BoxLoadingModule } from '../_modules/box-loading/box-loading.module';
import { TableStandardModule } from '../_modules/table-standard/table-standard.module';
import { ProgressBarModule } from '../_modules/progress-bar/progress-bar.module';
import { DownloadPopupModule } from '../_modules/download-popup/download-popup.module';
import { CategoryModule } from '../_modules/category/category.module';
import { FilterModule } from '../_modules/filter/filter.module';
import { ModalStandardModule } from '../_modules/modal-standard/modal-standard.module';
import { SeaCalendarService } from './_services/sea-calendar.service';
import { SeaCampaignManagerBidGeneratorComponent } from './sea-campaign-manager/sea-campaign-manager-bid-generator/sea-campaign-manager-bid-generator.component';
import { SeaOverviewComponent } from './sea-overview/sea-overview.component';
import { SeaGlobalViewComponent } from './sea-global-view/sea-global-view.component';
import { SeaInformationComponent } from './sea-information/sea-information.component';
import { SeaStructureComponent } from './sea-structure/sea-structure.component';
import { SeaDiagnosticWarningsComponent } from './sea-diagnostic/sea-diagnostic-warnings/sea-diagnostic-warnings.component';
import { SeaKeywordsOpportunitiesComponent } from './sea-keywords/sea-keywords-opportunities/sea-keywords-opportunities.component';
import { SeaKeywordsNegativeKeywordsComponent } from './sea-keywords/sea-keywords-negative-keywords/sea-keywords-negative-keywords.component';
import { SeaKeywordsControllerComponent } from './sea-keywords/sea-keywords-controller/sea-keywords-controller.component';
import { SeaBenchmarkCompetitorsComponent } from './sea-benchmark-competitors/sea-benchmark-competitors.component';
import { SeaReportingComponent } from './sea-reporting/sea-reporting.component';
import { VideoTutorModule } from 'app/_modules/video-tutor/video-tutor.module';
import { SeaAdsComponent } from './sea-ads/sea-ads.component';
import { TextboxClearableModule } from 'app/_modules/textbox-clearable/textbox-clearable.module';
import { PaginatorModule } from 'app/_modules/paginator/paginator.module';
import { SeaCampaignManagerLandingPagesComponent } from './sea-campaign-manager/sea-campaign-manager-landing-pages/sea-campaign-manager-landing-pages.component';

import { TranslateModule } from '@ngx-translate/core';
import { AbbreviateNumberModule } from 'app/_modules/abbreviate-number/abbreviate-number.module';
import { ModalUtilService } from 'app/_services/util/modal-util.service';
import { TextElipsisModule } from 'app/_modules/elipsis/text-elipsis.module';
import { SeoSeaSynergyModule } from './sea-keywords/seo-sea-synergy/seo-sea-synergy.module';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FirstTextModule } from 'app/_modules/first-text/first-text.module';
import { SeaKeywordsSearchtermsComponent } from './sea-keywords/sea-keywords-searchterms/sea-keywords-searchterms.component';
import { LoadingDelayModule } from 'app/_modules/loading-delay/loading-delay.module';
import { SeaGlobalFilterComponent } from './sea-global-filter/sea-global-filter.component';
import { MultiselectDropdownModule } from 'app/_modules/multiselect-dropdown/multiselect-dropdown.module';
import { MyDatePickerModule } from 'mydatepicker';
import { SeaSearchTermsAnalysisModule } from './sea-keywords/sea-keywords-searchterms-analysis/sea-keywords-searchterms-analysis.module';
import { SearchVirtualDropdownModule } from 'app/_modules/search-virtual-dropdown/search-virtual-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SeaRoutingModule,
    ChartModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    GaugeCustomChartModule,
    MenuModule,
    DDCustomModule,
    ClickOutsideModule,
    CheckboxControllerModule,
    DropdownModule,
    BoxLoadingModule,
    TableStandardModule,
    ProgressBarModule,
    DownloadPopupModule,
    CategoryModule,
    FilterModule,
    ModalStandardModule,
    VideoTutorModule,
    TextboxClearableModule,
    PaginatorModule,
    TranslateModule,
    AbbreviateNumberModule,
    TextElipsisModule,
    SeoSeaSynergyModule,
    VirtualScrollModule,
    NguiAutoCompleteModule,
    TooltipModule.forRoot(),
    FirstTextModule,
    LoadingDelayModule,
    MultiselectDropdownModule,
    MyDatePickerModule,
    SeaSearchTermsAnalysisModule,
    SearchVirtualDropdownModule
  ],
  declarations: [
    SeaComponent,
    SeaCampaignManagerBidGeneratorComponent,
    SeaOverviewComponent,
    SeaGlobalViewComponent,
    SeaInformationComponent,
    SeaStructureComponent,
    SeaDiagnosticWarningsComponent,
    SeaKeywordsOpportunitiesComponent,
    SeaKeywordsNegativeKeywordsComponent,
    SeaKeywordsControllerComponent,
    SeaBenchmarkCompetitorsComponent,
    SeaReportingComponent,
    SeaAdsComponent,
    SeaCampaignManagerLandingPagesComponent,
    SeaKeywordsSearchtermsComponent,
    SeaGlobalFilterComponent
  ],
  entryComponents: [],
  providers: [
    SeaCalendarService,
    ModalUtilService
  ]
})
export class SeaModule {
}
