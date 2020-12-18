import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoComponent } from './seo.component';
import { SeoOverviewComponent } from './seo-overview/seo-overview.component';
import { SeoInformationComponent } from './seo-information/seo-information.component';
import { SeoToolboxComponent } from './seo-toolbox/seo-toolbox.component';
import { SeoToolbox301Component } from './seo-toolbox/seo-toolbox-301/seo-toolbox-301.component';
import { SeoToolboxWebpageComponent } from './seo-toolbox/seo-toolbox-webpage/seo-toolbox-webpage.component';
import { SeoToolbokKeywordComponent } from './seo-toolbox/seo-toolbox-keyword/seo-toolbox-keyword.component';
import { SeoToolboxRankedComponent } from './seo-toolbox/seo-toolbox-ranked/seo-toolbox-ranked.component';
import { SeoToolboxExportComponent } from './seo-toolbox/seo-toolbox-export/seo-toolbox-export.component';
import { SeoToolboxRedirectionComponent } from './seo-toolbox/seo-toolbox-redirection/seo-toolbox-redirection.component';
import { SeoDiagnosticWarningsComponent } from "app/seo/seo-diagnostic-warnings/seo-diagnostic-warnings.component";

import { SeoBenchmarkChartComponent } from "app/seo/seo-benchmark/seo-benchmark-chart/seo-benchmark-chart.component";
import { SeoBenchmarkOverviewComponent } from "app/seo/seo-benchmark/seo-benchmark-overview/seo-benchmark-overview.component";
import { SeoBenchmarkInstantBenchmarkComponent } from "app/seo/seo-benchmark/seo-benchmark-instant-benchmark/seo-benchmark-instant-benchmark.component";
import { SeoBenchmarkRankingComparisonComponent } from "app/seo/seo-benchmark/seo-benchmark-ranking-comparison/seo-benchmark-ranking-comparison.component";

import { SeoOffsiteOverviewComponent } from "app/seo/seo-offsite/seo-offsite-overview/seo-offsite-overview.component";
import { SeoOffsiteDetailsRefdomainsComponent } from "app/seo/seo-offsite/seo-offsite-details/seo-offsite-details-refdomains/seo-offsite-details-refdomains.component";
import { SeoOffsiteDetailsBacklinksComponent } from "app/seo/seo-offsite/seo-offsite-details/seo-offsite-details-backlinks/seo-offsite-details-backlinks.component";
import { SeoOffsiteDetailsAnchorsComponent } from "app/seo/seo-offsite/seo-offsite-details/seo-offsite-details-anchors/seo-offsite-details-anchors.component";
import { SeoOffsiteOptDetoxComponent } from "app/seo/seo-offsite/seo-offsite-optimization/seo-offsite-opt-detox/seo-offsite-opt-detox.component";
import { SeoDiagnosticLoadingTimeComponent } from "./seo-diagnostic-loading-time/seo-diagnostic-loading-time.component";
import { SeoOnsiteNewPagesOptComponent } from "app/seo/seo-onsite/seo-onsite-new-pages-opt/seo-onsite-new-pages-opt.component";
import { SeoOffsiteOptLinkRecoverComponent } from "app/seo/seo-offsite/seo-offsite-optimization/seo-offsite-opt-link/seo-offsite-opt-link-recover/seo-offsite-opt-link-recover.component";
import { SeoOffsiteOptLinkCompetitorsComponent } from "app/seo/seo-offsite/seo-offsite-optimization/seo-offsite-opt-link/seo-offsite-opt-link-competitors/seo-offsite-opt-link-competitors.component";
import { SeoOffsiteOptLinkIntopicComponent } from "app/seo/seo-offsite/seo-offsite-optimization/seo-offsite-opt-link/seo-offsite-opt-link-intopic/seo-offsite-opt-link-intopic.component";
import { SeoKeywordsOpportunitiesComponent } from './seo-keywords/seo-keywords-opportunities/seo-keywords-opportunities.component';
import { SeoOnsiteLandingPagesOptComponent } from "app/seo/seo-onsite/seo-onsite-landing-pages-opt/seo-onsite-landing-pages-opt.component";
import { SeoOnsiteInnerlinksComponent } from "app/seo/seo-onsite/seo-onsite-innerlinks/seo-onsite-innerlinks.component";
import { SeoStagingWarningsComponent } from "app/seo/seo-staging/seo-staging-warnings/seo-staging-warnings.component";
import { SeoKeywordsRankCheckerComponent } from "app/seo/seo-keywords/seo-keywords-rank-checker/seo-keywords-rank-checker.component";
import { SeoToolboxComparisonComponent } from "app/seo/seo-toolbox/seo-toolbox-comparison/seo-toolbox-comparison.component";
import { SeoToolboxGenerateSitemapComponent } from "app/seo/seo-toolbox/seo-toolbox-generate-sitemap/seo-toolbox-generate-sitemap.component";
import { SeoToolboxSitemapUrlsComponent } from "app/seo/seo-toolbox/seo-toolbox-sitemap-urls/seo-toolbox-sitemap-urls.component";
import { SeoStagingOverviewComponent } from "app/seo/seo-staging/seo-staging-overview/seo-staging-overview.component";
import { SeoStagingLoadingTimeComponent } from "app/seo/seo-staging/seo-staging-loading-time/seo-staging-loading-time.component";
import { SeoOnsiteValidateLandingPagesComponent } from "app/seo/seo-onsite/seo-onsite-validate-landing-pages/seo-onsite-validate-landing-pages.component";
import { SeoToolboxSearchComponent } from 'app/seo/seo-toolbox/seo-toolbox-search/seo-toolbox-search.component';
import { SeoReportingComponent } from 'app/seo/seo-reporting/seo-reporting.component';
import { SeoMobileFirstGeolocalRankComponent } from 'app/seo/seo-mobile-first/seo-mobile-first-geolocal-rank/seo-mobile-first-geolocal-rank.component';
import { SeoMobileFirstWarningsComponent } from './seo-mobile-first/seo-mobile-first-warnings/seo-mobile-first-warnings.component';
import { SeoMobileDisplaySimulatorComponent } from './seo-mobile-first/seo-mobile-display-simulator/seo-mobile-display-simulator.component';
import { SeoMobileFirstLoadingTimeComponent } from 'app/seo/seo-mobile-first/seo-mobile-first-loading-time/seo-mobile-first-loading-time.component';
import { SeoMobileFirstOverviewComponent } from './seo-mobile-first/seo-mobile-first-overview/seo-mobile-first-overview.component';
import { SeoKeywordsGeolocalComponent } from 'app/seo/seo-keywords/seo-keywords-geolocal/seo-keywords-geolocal.component';
import { SeoDiagnosticNoRegressionComponent } from './seo-diagnostic/seo-diagnostic-no-regression/seo-diagnostic-no-regression.component';
import { SeoStagingNoRegressionComponent } from './seo-staging/seo-staging-no-regression/seo-staging-no-regression.component';
import { SeoProjectManagementComponent } from './seo-project-management/seo-project-management.component';
import { SeoPiracyExternalContentDuplicateComponent } from './seo-piracy/seo-piracy-external-content-duplicate/seo-piracy-external-content-duplicate.component';
import { SeoPiracyContentOverviewComponent } from './seo-piracy/seo-piracy-content-overview/seo-piracy-content-overview.component';
import { SeoToolboxContentPiracyComponent } from './seo-toolbox/seo-toolbox-content-piracy/seo-toolbox-content-piracy.component';
import { SeoOnsiteHotContentOptimisationComponent } from './seo-onsite/seo-onsite-hot-content-optimisation/seo-onsite-hot-content-optimisation.component';
import { SeoSeaSynergyComponent } from '.././sea/sea-keywords/seo-sea-synergy/seo-sea-synergy.component';
import { SeoKeywordsGeoRankOverviewComponent } from './seo-keywords/seo-keywords-geo-rank-overview/seo-keywords-geo-rank-overview.component';

const routes = [
	{
		path: '', component: SeoComponent,
		children: [
			{ path: '', redirectTo: 'overview', pathMatch: 'full' },
			{ path: 'overview', component: SeoOverviewComponent },
			{ path: 'info', component: SeoInformationComponent },
			{ path: 'diagnostic-warnings', component: SeoDiagnosticWarningsComponent },
			{ path: 'diagnostic-no-regression', component: SeoDiagnosticNoRegressionComponent },
			{ path: 'diagnostic-loadingtime', component: SeoDiagnosticLoadingTimeComponent },
			{ path: 'offsite', redirectTo: 'offsite-overview', pathMatch: 'full' },
			{ path: 'offsite-overview', component: SeoOffsiteOverviewComponent },
			{ path: 'offsite-details', redirectTo: 'offsite-details-refdomains', pathMatch: 'full' },
			{ path: 'offsite-details-refdomains', component: SeoOffsiteDetailsRefdomainsComponent },
			{ path: 'offsite-details-backlinks', component: SeoOffsiteDetailsBacklinksComponent },
			{ path: 'offsite-details-anchors', component: SeoOffsiteDetailsAnchorsComponent },
			{ path: 'offsite-opt-detox', component: SeoOffsiteOptDetoxComponent },
			{ path: 'offsite-opt-linkbuilding', redirectTo: 'offsite-opt-link-intopic', pathMatch: 'full' },
			{ path: 'offsite-opt-link-recover', component: SeoOffsiteOptLinkRecoverComponent },
			{ path: 'offsite-opt-link-competitors', component: SeoOffsiteOptLinkCompetitorsComponent },
			{ path: 'offsite-opt-link-intopic', component: SeoOffsiteOptLinkIntopicComponent },
			{ path: 'offsite-opt-blog-automation', loadChildren: './seo-offsite/seo-offsite-optimization/seo-offsite-opt-blog-automation/seo-offsite-opt-blog-automation.module#SeoOffsiteOptBlogAutomationModule' },
			{ path: 'onsite-landing-page-opt', component: SeoOnsiteLandingPagesOptComponent },
			{ path: 'onsite-new-pages-opt', component: SeoOnsiteNewPagesOptComponent },
			{ path: 'onsite-innerlinks', redirectTo: 'onsite-inner-optimizer', pathMatch: 'full' },
			{ path: 'onsite-inner-overview', component: SeoOnsiteInnerlinksComponent },
			{ path: 'onsite-inner-explorer', component: SeoOnsiteInnerlinksComponent },
			{ path: 'onsite-inner-optimizer', component: SeoOnsiteInnerlinksComponent },
			{ path: 'onsite-hot-content-optimisation', component: SeoOnsiteHotContentOptimisationComponent },
			{ path: 'toolbox', component: SeoToolboxComponent },
			{ path: 'toolbox-301', component: SeoToolbox301Component },
			{ path: 'toolbox-webpage', component: SeoToolboxWebpageComponent },
			{ path: 'toolbox-keyword-power', component: SeoToolbokKeywordComponent },
			{ path: 'toolbox-ranked', component: SeoToolboxRankedComponent },
			{ path: 'toolbox-export', component: SeoToolboxExportComponent },
			{ path: 'toolbox-redirection', component: SeoToolboxRedirectionComponent },
			{
				path: 'seo-keywords-opportunities',
				component: SeoKeywordsOpportunitiesComponent,
			},
			{ path: 'seo-keywords-seo-sea-synergy', component: SeoSeaSynergyComponent },
			{
				path: 'seo-keywords-rank-checker',
				component: SeoKeywordsRankCheckerComponent,
			},
			{ path: 'seo-keywords-geolocal', component: SeoKeywordsGeolocalComponent },
			{ path: 'seo-keywords-geo-rank-overview', component: SeoKeywordsGeoRankOverviewComponent },
			{
				path: 'onsite-validate-langing-pages',
				component: SeoOnsiteValidateLandingPagesComponent,
			},
			{ path: 'benchmark-overview', component: SeoBenchmarkOverviewComponent },
			{ path: 'benchmark-chart', component: SeoBenchmarkChartComponent },
			{ path: 'benchmark-instant-benchmark', component: SeoBenchmarkInstantBenchmarkComponent },
			{ path: 'benchmark-ranking-comparison', component: SeoBenchmarkRankingComparisonComponent },
			{ path: 'staging-overview', component: SeoStagingOverviewComponent },
			{ path: 'staging-diagnostic-warnings', component: SeoStagingWarningsComponent },
			{ path: 'staging-diagnostic-loading-time', component: SeoStagingLoadingTimeComponent },
			{ path: 'staging-diagnostic-no-regression', component: SeoStagingNoRegressionComponent },
			// { path: 'staging-301-redirection', component: SeoStagingRedirectionsDemoComponent },
			{ path: 'toolbox-comparison', component: SeoToolboxComparisonComponent },
			{ path: 'toolbox-content-piracy', component: SeoToolboxContentPiracyComponent },
			{ path: 'toolbox-generate-sitemap', component: SeoToolboxGenerateSitemapComponent },
			{ path: 'toolbox-sitemap-urls', component: SeoToolboxSitemapUrlsComponent },
			{ path: 'toolbox-search', component: SeoToolboxSearchComponent },
			{ path: 'reporting', component: SeoReportingComponent },
			{ path: 'mobile-first-overview', component: SeoMobileFirstOverviewComponent },
			{ path: 'seo-mobile-first-geolocal-rank', component: SeoMobileFirstGeolocalRankComponent },
			{ path: 'mobile-first-warnings', component: SeoMobileFirstWarningsComponent },
			{ path: 'mobile-first-display-simulator', component: SeoMobileDisplaySimulatorComponent },
			{ path: 'mobile-first-loading-time', component: SeoMobileFirstLoadingTimeComponent },
			{ path: 'youtube', loadChildren: './seo-youtube/seo-youtube.module#SeoYoutubeModule' },
			{ path: 'project-management', component: SeoProjectManagementComponent },
			{ path: 'gmb', loadChildren: './seo-google-my-business/seo-google-my-business.module#SeoGoogleMyBusinessModule' },
			{ path: 'piracyexternal-content-overview', component: SeoPiracyContentOverviewComponent },
			{ path: 'piracyexternal-content-duplication', component: SeoPiracyExternalContentDuplicateComponent },
			{ path: '**', redirectTo: 'overview' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SeoRoutingModule { }
