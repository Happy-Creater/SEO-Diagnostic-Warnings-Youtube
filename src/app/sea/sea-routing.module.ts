import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeaComponent } from './sea.component';
import { SeaGlobalViewComponent } from './sea-global-view/sea-global-view.component';
import { SeaOverviewComponent } from './sea-overview/sea-overview.component';
import { SeaInformationComponent } from './sea-information/sea-information.component';
import { SeaStructureComponent } from './sea-structure/sea-structure.component';
import { SeaDiagnosticWarningsComponent } from './sea-diagnostic/sea-diagnostic-warnings/sea-diagnostic-warnings.component';
import { SeaKeywordsOpportunitiesComponent } from './sea-keywords/sea-keywords-opportunities/sea-keywords-opportunities.component';
import { SeaKeywordsSearchtermsComponent } from './sea-keywords/sea-keywords-searchterms/sea-keywords-searchterms.component';
import { SeaKeywordsNegativeKeywordsComponent } from './sea-keywords/sea-keywords-negative-keywords/sea-keywords-negative-keywords.component';
import { SeaKeywordsControllerComponent } from './sea-keywords/sea-keywords-controller/sea-keywords-controller.component';
import { SeaCampaignManagerLandingPagesComponent } from './sea-campaign-manager/sea-campaign-manager-landing-pages/sea-campaign-manager-landing-pages.component';
import { SeaCampaignManagerBidGeneratorComponent } from './sea-campaign-manager/sea-campaign-manager-bid-generator/sea-campaign-manager-bid-generator.component';
import { SeaBenchmarkCompetitorsComponent } from './sea-benchmark-competitors/sea-benchmark-competitors.component';
import { SeaReportingComponent } from 'app/sea/sea-reporting/sea-reporting.component';
import { SeaAdsComponent } from 'app/sea/sea-ads/sea-ads.component';
import { SeoSeaSynergyComponent } from './sea-keywords/seo-sea-synergy/seo-sea-synergy.component';
import { SeaKeywordsSearchtermsAnalysisComponent } from './sea-keywords/sea-keywords-searchterms-analysis/sea-keywords-searchterms-analysis.component';

const routes = [
  {
    path: '', component: SeaComponent,
    children: [
      { path: '', redirectTo: 'global-view', pathMatch: 'full' },
      { path: 'global-view', component: SeaGlobalViewComponent },
      { path: 'overview', component: SeaOverviewComponent },
      { path: 'information', component: SeaInformationComponent },
      { path: 'structure', component: SeaStructureComponent },
      {
        path: 'warnings',
        loadChildren: '../seo/seo-diagnostic-warnings/seo-diagnostic-warnings.module#SeoDiagnosticWarningsModule',
      },
      { path: 'searchterms', component: SeaKeywordsSearchtermsComponent },
      { path: 'opportunities', component: SeaKeywordsOpportunitiesComponent },
      { path: 'sea-keywords-seo-sea-synergy', component: SeoSeaSynergyComponent },
      { path: 'negative-keywords', component: SeaKeywordsNegativeKeywordsComponent },
      { path: 'controller', component: SeaKeywordsControllerComponent },
      { path: 'landing-pages', component: SeaCampaignManagerLandingPagesComponent },
      { path: 'bid-generator', component: SeaCampaignManagerBidGeneratorComponent },
      { path: 'benchmark-competitors', component: SeaBenchmarkCompetitorsComponent },
      { path: 'reporting', component: SeaReportingComponent },
      { path: 'ads', component: SeaAdsComponent },
      { path: 'sea-words-analysis', component: SeaKeywordsSearchtermsAnalysisComponent },
      { path: '**', redirectTo: 'global-view' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeaRoutingModule { }
