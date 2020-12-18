import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoGoogleMyBusinessComponent } from './seo-google-my-business.component';
import { SeoGmbOverviewComponent } from './seo-gmb-overview/seo-gmb-overview.component';
import { SeoGmbDiagnosticWarningsComponent } from './seo-gmb-diagnostic-warnings/seo-gmb-diagnostic-warnings.component';
import { SeoGmbLocDetailsComponent } from './seo-gmb-loc-details/seo-gmb-loc-details.component';
import { SeoGmbCustAutomationComponent } from './seo-gmb-cust-automation/seo-gmb-cust-automation.component';
import { SeoGmbRankingComponent } from './seo-gmb-ranking/seo-gmb-ranking.component';
import { SeoGmbReportComponent } from './seo-gmb-report/seo-gmb-report.component';
import { SeoGmbShareVisibilityComponent } from './seo-gmb-share-visibility/seo-gmb-share-visibility.component';
import { SeoGmbSentimentAnalysisComponent } from './seo-gmb-sentiment-analysis/seo-gmb-sentiment-analysis.component';

const routes = [
  {
    path: '', component: SeoGoogleMyBusinessComponent,
    children: [
      { path: 'gmb-overview', component: SeoGmbOverviewComponent },
      { path: 'gmb-diagnostic-warnings', component: SeoGmbDiagnosticWarningsComponent },
      { path: 'gmb-loc-details', component: SeoGmbLocDetailsComponent },
      { path: 'gmb-cust-automation', component: SeoGmbCustAutomationComponent },
      { path: 'gmb-ranking', component: SeoGmbRankingComponent },
      { path: 'gmb-report', component: SeoGmbReportComponent },
      { path: 'gmb-share-visibility', component: SeoGmbShareVisibilityComponent },
      { path: 'gmb-sentiment-analysis', component: SeoGmbSentimentAnalysisComponent },
      { path: '**', redirectTo: 'gmb-overview' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeoGoogleMyBusinessRoutingModule { }
