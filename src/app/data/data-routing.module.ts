import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data.component';
import { DataReportOverviewComponent } from './data-report-overview/data-report-overview.component';
import { DataDiagnosticOverviewComponent } from './data-diagnostic-overview/data-diagnostic-overview.component';
import { DataOptimizationOverviewComponent } from './data-optimization-overview/data-optimization-overview.component';
import { DataReportWebpagemonetoringComponent } from './data-report-webpagemonetoring/data-report-webpagemonetoring.component';
import { DataDiagnosticChannelsComponent } from 'app/data/data-diagnostic-channels/data-diagnostic-channels.component';
import { DataReportKpisComponent } from 'app/data/data-report-kpis/data-report-kpis.component';
import { DataReportPisComponent } from 'app/data/data-report-pis/data-report-pis.component';
import { DataReportOpisPorteeComponent } from 'app/data/data-report-opis-portee/data-report-opis-portee.component';
import { DataReportOpisFideliteComponent } from 'app/data/data-report-opis-fidelite/data-report-opis-fidelite.component';
import { DataReportOpisConversionComponent } from 'app/data/data-report-opis-conversion/data-report-opis-conversion.component';
import { DataReportGlossaryComponent } from 'app/data/data-report-glossary/data-report-glossary.component';
import { DataReportOpisEngagementComponent } from 'app/data/data-report-opis-engagement/data-report-opis-engagement.component';
import { DataTrackingComponent } from 'app/data/data-tracking/data-tracking.component';

const defaultRedirectTo = 'tracking';

const routes = [
  {
    path: '', component: DataComponent,
    children: [
      { path: '', redirectTo: defaultRedirectTo, pathMatch: 'full' },
      { path: 'tracking', component: DataTrackingComponent },
      { path: 'report-overview', component: DataReportOverviewComponent },
      { path: 'report-webpagemonetoring', component: DataReportWebpagemonetoringComponent },
      { path: 'report-kpis', component: DataReportKpisComponent },
      { path: 'report-pis', component: DataReportPisComponent },
      { path: 'report-opis-portee', component: DataReportOpisPorteeComponent },
      { path: 'report-opis-engagement', component: DataReportOpisEngagementComponent },
      { path: 'report-opis-conversion', component: DataReportOpisConversionComponent },
      { path: 'report-opis-fidelite', component: DataReportOpisFideliteComponent },
      { path: 'report-glossary', component: DataReportGlossaryComponent },
      { path: 'diagnostic-overview', component: DataDiagnosticOverviewComponent },
      { path: 'diagnostic-channels', component: DataDiagnosticChannelsComponent },
      { path: 'optimization-overview', component: DataOptimizationOverviewComponent },
      { path: '**', redirectTo: defaultRedirectTo }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
