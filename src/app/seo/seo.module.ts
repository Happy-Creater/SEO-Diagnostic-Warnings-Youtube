import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoRoutingModule } from './seo-routing.module';
import { SeoComponent } from './seo.component';
import { SeoOverviewComponent } from './seo-overview/seo-overview.component';
import { SeoInformationComponent } from './seo-information/seo-information.component';
import { SeoOffsiteComponent } from './seo-offsite/seo-offsite.component';
import { SeoOffsiteOverviewComponent } from './seo-offsite/seo-offsite-overview/seo-offsite-overview.component';
import { SeoOffsiteDetailsRefdomainsComponent } from './seo-offsite/seo-offsite-details/seo-offsite-details-refdomains/seo-offsite-details-refdomains.component';
import { SeoOffsiteDetailsBacklinksComponent } from './seo-offsite/seo-offsite-details/seo-offsite-details-backlinks/seo-offsite-details-backlinks.component';
import { SeoOffsiteDetailsAnchorsComponent } from './seo-offsite/seo-offsite-details/seo-offsite-details-anchors/seo-offsite-details-anchors.component';
import { SeoToolboxComponent } from './seo-toolbox/seo-toolbox.component';
import { ChartModule } from 'angular2-highcharts';
import { SeoToolbox301Component } from './seo-toolbox/seo-toolbox-301/seo-toolbox-301.component';
import { SeoToolboxWebpageComponent } from './seo-toolbox/seo-toolbox-webpage/seo-toolbox-webpage.component';
import { SeoToolbokKeywordComponent } from './seo-toolbox/seo-toolbox-keyword/seo-toolbox-keyword.component';
import { SeoToolboxRankedComponent } from './seo-toolbox/seo-toolbox-ranked/seo-toolbox-ranked.component';
import { SeoToolboxExportComponent } from './seo-toolbox/seo-toolbox-export/seo-toolbox-export.component';
import { SeoToolboxRedirectionComponent } from './seo-toolbox/seo-toolbox-redirection/seo-toolbox-redirection.component';
import { MenuModule } from '../_modules/menu/menu.module';
import { SeoDiagnosticWarningsComponent } from './seo-diagnostic-warnings/seo-diagnostic-warnings.component';
import { DownloadPopupModule } from 'app/_modules/download-popup/download-popup.module';
import { ModalStandardModule } from 'app/_modules/modal-standard/modal-standard.module';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { TableStandardModule } from 'app/_modules/table-standard/table-standard.module';
import { TextboxClearableModule } from '../_modules/textbox-clearable/textbox-clearable.module';
import { PaginatorModule } from 'app/_modules/paginator/paginator.module';
import { DropdownModule } from 'app/_modules/dropdown/dropdown.module';
import { ProgressBarModule } from 'app/_modules/progress-bar/progress-bar.module';
import { ProgressbarLoadingModule } from '../_modules/progressbar-loading/progressbar-loading.module';
import { ToolTipModule } from 'app/_modules/tooltip/tool-tip.module';
import { BoxLoadingModule } from 'app/_modules/box-loading/box-loading.module';
import { SeoOffsiteOptDetoxComponent } from 'app/seo/seo-offsite/seo-offsite-optimization/seo-offsite-opt-detox/seo-offsite-opt-detox.component';
import { ClickOutsideModule } from 'app/_modules/click-outside/click-outside.module';
import { SeoDiagnosticLoadingTimeComponent } from './seo-diagnostic-loading-time/seo-diagnostic-loading-time.component';
import { GaugeCustomChartModule } from '../_modules/highchart/gauge-custom-chart/gauge-custom-chart.module';

import { SeoBenchmarkOverviewComponent } from './seo-benchmark/seo-benchmark-overview/seo-benchmark-overview.component';
import { SeoBenchmarkChartComponent } from './seo-benchmark/seo-benchmark-chart/seo-benchmark-chart.component';
import { SeoBenchmarkRankingComparisonComponent } from './seo-benchmark/seo-benchmark-ranking-comparison/seo-benchmark-ranking-comparison.component';
import { SeoBenchmarkInstantBenchmarkComponent } from './seo-benchmark/seo-benchmark-instant-benchmark/seo-benchmark-instant-benchmark.component';
import { CheckboxControllerModule } from 'app/_modules/checkbox-controller/checkbox-controller.module';
import { SeoOnsiteComponent } from './seo-onsite/seo-onsite.component';
import { SeoOnsiteNewPagesOptComponent } from './seo-onsite/seo-onsite-new-pages-opt/seo-onsite-new-pages-opt.component';
import { SeoOffsiteOptLinkRecoverComponent } from './seo-offsite/seo-offsite-optimization/seo-offsite-opt-link/seo-offsite-opt-link-recover/seo-offsite-opt-link-recover.component';
import { SeoOffsiteOptLinkCompetitorsComponent } from './seo-offsite/seo-offsite-optimization/seo-offsite-opt-link/seo-offsite-opt-link-competitors/seo-offsite-opt-link-competitors.component';
import { SeoOffsiteOptLinkIntopicComponent } from './seo-offsite/seo-offsite-optimization/seo-offsite-opt-link/seo-offsite-opt-link-intopic/seo-offsite-opt-link-intopic.component';
import { SeoKeywordsOpportunitiesComponent } from './seo-keywords/seo-keywords-opportunities/seo-keywords-opportunities.component';
import { SeoOnsiteLandingPagesOptComponent } from 'app/seo/seo-onsite/seo-onsite-landing-pages-opt/seo-onsite-landing-pages-opt.component';
import { AbbreviateNumberModule } from 'app/_modules/abbreviate-number/abbreviate-number.module';
import { SeoStagingWarningsComponent } from './seo-staging/seo-staging-warnings/seo-staging-warnings.component';
import { SeoStagingRedirectionsComponent } from './seo-staging/seo-staging-redirections/seo-staging-redirections.component';
import { NguiAutoCompleteModule } from '@ngui/auto-complete/dist';
import { SeoStagingWebsiteSelectorComponent } from './seo-staging/seo-staging-website-selector/seo-staging-website-selector.component';
import { SeoKeywordsRankCheckerComponent } from 'app/seo/seo-keywords/seo-keywords-rank-checker/seo-keywords-rank-checker.component';
import { SeoOnsiteInnerlinksComponent } from './seo-onsite/seo-onsite-innerlinks/seo-onsite-innerlinks.component';
import { MyDatePickerModule } from 'mydatepicker';
import { SeoToolboxComparisonComponent } from './seo-toolbox/seo-toolbox-comparison/seo-toolbox-comparison.component';
import { SeoToolboxGenerateSitemapComponent } from './seo-toolbox/seo-toolbox-generate-sitemap/seo-toolbox-generate-sitemap.component';
import { SeoToolboxSitemapUrlsComponent } from './seo-toolbox/seo-toolbox-sitemap-urls/seo-toolbox-sitemap-urls.component';
import { SeoStagingOverviewComponent } from 'app/seo/seo-staging/seo-staging-overview/seo-staging-overview.component';
import { SeoStagingLoadingTimeComponent } from './seo-staging/seo-staging-loading-time/seo-staging-loading-time.component';
import { SeoOnsiteValidateLandingPagesComponent } from './seo-onsite/seo-onsite-validate-landing-pages/seo-onsite-validate-landing-pages.component';
import { CategoryModule } from 'app/_modules/category/category.module';
import { CategoryService } from 'app/_modules/category/service/category.service';
import { SeoToolboxSearchComponent } from './seo-toolbox/seo-toolbox-search/seo-toolbox-search.component';
import { SeoReportingComponent } from './seo-reporting/seo-reporting.component';
import { SeoKeywordsGeoMobileComponent } from './seo-keywords/seo-keywords-geo-mobile/seo-keywords-geo-mobile.component';
import { DragScrollModule } from 'angular2-drag-scroll';
import { VideoTutorModule } from 'app/_modules/video-tutor/video-tutor.module';
import { LightboxModule } from 'angular2-lightbox';
import { SeoMobileFirstWarningsComponent } from './seo-mobile-first/seo-mobile-first-warnings/seo-mobile-first-warnings.component';
import { SeoMobileDisplaySimulatorComponent } from './seo-mobile-first/seo-mobile-display-simulator/seo-mobile-display-simulator.component';
import { SeoMobileFirstLoadingTimeComponent } from './seo-mobile-first/seo-mobile-first-loading-time/seo-mobile-first-loading-time.component';
import { QuestionsCommentsModule } from 'app/_modules/questions-comments/questions-comments.module';
import { SeoMobileFirstOverviewComponent } from './seo-mobile-first/seo-mobile-first-overview/seo-mobile-first-overview.component';
import { SeoMobileFirstGeolocalRankComponent } from 'app/seo/seo-mobile-first/seo-mobile-first-geolocal-rank/seo-mobile-first-geolocal-rank.component';
import { SeoKeywordsGeolocalComponent } from './seo-keywords/seo-keywords-geolocal/seo-keywords-geolocal.component';
import { FormatNumberModule } from 'app/_modules/format-number/format-number.module';
import { FormatSignificationNumberModule } from 'app/_modules/format-number/format-signification-number.module';
import { TranslateModule } from '@ngx-translate/core';
import { MappingTranslateModule } from 'app/_modules/mapping-translate/mapping-translate.module';
import { MappingTranslatePipe } from 'app/_modules/mapping-translate/mapping-translate.pipe';
import { SeoDiagnosticNoRegressionComponent } from './seo-diagnostic/seo-diagnostic-no-regression/seo-diagnostic-no-regression.component';
import { FormatNumberWithKMBModule } from 'app/_modules/format-number/format-number-with-kmb.module';
import { SeoStagingNoRegressionComponent } from './seo-staging/seo-staging-no-regression/seo-staging-no-regression.component';
import { SeoProjectManagementComponent } from './seo-project-management/seo-project-management.component';
import { SeoPiracyExternalContentDuplicateComponent } from './seo-piracy/seo-piracy-external-content-duplicate/seo-piracy-external-content-duplicate.component';
import { SeoPiracyContentOverviewComponent } from './seo-piracy/seo-piracy-content-overview/seo-piracy-content-overview.component';
import { TextElipsisModule } from 'app/_modules/elipsis/text-elipsis.module';
import { ChannelYoutubeVariableService } from 'app/_services/channel_youtube_variable/channel-youtube-variable.service';
import { SeoToolboxContentPiracyComponent } from './seo-toolbox/seo-toolbox-content-piracy/seo-toolbox-content-piracy.component';
import { SeoSeaSynergyModule } from '../sea/sea-keywords/seo-sea-synergy/seo-sea-synergy.module';
import { SeoKeywordsGeoRankOverviewComponent } from './seo-keywords/seo-keywords-geo-rank-overview/seo-keywords-geo-rank-overview.component';
import { LoadingDelayModule } from 'app/_modules/loading-delay/loading-delay.module';

import { SeoOffsiteOptBlogAutomationModule } from './seo-offsite/seo-offsite-optimization/seo-offsite-opt-blog-automation/seo-offsite-opt-blog-automation.module';
import { SeoOnsiteHotContentOptimisationComponent } from './seo-onsite/seo-onsite-hot-content-optimisation/seo-onsite-hot-content-optimisation.component';
import { OfflineComparisonModule } from 'app/_modules/offline-comparison/offline-comparison.module';
import { SeoOffsiteOptLinkTabsComponent } from './seo-offsite/seo-offsite-optimization/seo-offsite-opt-link/seo-offsite-opt-link-tabs/seo-offsite-opt-link-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SeoRoutingModule,
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
    TranslateModule,
    MappingTranslateModule,
    FormatNumberWithKMBModule,
    TextElipsisModule,
    SeoSeaSynergyModule,
    LoadingDelayModule,
    SeoOffsiteOptBlogAutomationModule,
    OfflineComparisonModule

  ],
  declarations: [
    SeoComponent,
    SeoOverviewComponent,
    SeoInformationComponent,
    SeoOffsiteComponent,
    SeoOffsiteOverviewComponent,
    SeoOffsiteDetailsRefdomainsComponent,
    SeoOffsiteDetailsBacklinksComponent,
    SeoOffsiteDetailsAnchorsComponent,
    SeoToolboxComponent,
    SeoToolbox301Component,
    SeoToolboxWebpageComponent,
    SeoToolbokKeywordComponent,
    SeoToolboxRankedComponent,
    SeoToolboxExportComponent,
    SeoToolboxRedirectionComponent,
    // offsite-optimization-detox components
    SeoOffsiteOptDetoxComponent,
    // end offsite-optimization-detox components
    SeoDiagnosticLoadingTimeComponent,
    SeoBenchmarkOverviewComponent,
    SeoBenchmarkChartComponent,
    SeoBenchmarkRankingComparisonComponent,
    SeoBenchmarkInstantBenchmarkComponent,
    SeoOnsiteComponent,
    SeoOnsiteNewPagesOptComponent,
    SeoOffsiteOptLinkRecoverComponent,
    SeoOffsiteOptLinkCompetitorsComponent,
    SeoOffsiteOptLinkIntopicComponent,
    SeoKeywordsOpportunitiesComponent,
    SeoOnsiteLandingPagesOptComponent,
    SeoOnsiteInnerlinksComponent,
    SeoStagingWarningsComponent,
    SeoStagingRedirectionsComponent,
    SeoStagingWebsiteSelectorComponent,
    SeoKeywordsRankCheckerComponent,
    SeoToolboxComparisonComponent,
    SeoToolboxGenerateSitemapComponent,
    SeoToolboxSitemapUrlsComponent,
    SeoStagingOverviewComponent,
    SeoStagingLoadingTimeComponent,
    SeoOnsiteValidateLandingPagesComponent,
    SeoOnsiteValidateLandingPagesComponent,
    SeoToolboxSearchComponent,
    SeoReportingComponent,
    SeoKeywordsGeoMobileComponent,
    SeoMobileFirstWarningsComponent,
    SeoMobileDisplaySimulatorComponent,
    SeoMobileFirstLoadingTimeComponent,
    SeoMobileFirstOverviewComponent,
    SeoMobileFirstGeolocalRankComponent,
    SeoKeywordsGeolocalComponent,
    SeoDiagnosticNoRegressionComponent,
    SeoStagingNoRegressionComponent,
    SeoProjectManagementComponent,
    SeoPiracyExternalContentDuplicateComponent,
    SeoPiracyContentOverviewComponent,
    SeoToolboxContentPiracyComponent,
    SeoKeywordsGeoRankOverviewComponent,
    SeoOnsiteHotContentOptimisationComponent,
    SeoOffsiteOptLinkTabsComponent
  ],
  entryComponents: [
    SeoComponent,
  ],
  providers: [
    CategoryService,
    DecimalPipe,
    MappingTranslatePipe,
    ChannelYoutubeVariableService,
    SeoKeywordsRankCheckerComponent,
    OfflineComparisonModule
  ],
  bootstrap: [
    SeoOnsiteLandingPagesOptComponent
  ]
})
export class SeoModule {}
