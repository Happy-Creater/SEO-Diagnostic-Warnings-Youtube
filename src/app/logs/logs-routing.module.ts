import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogsComponent } from 'app/logs/logs.component';
import { LogsGlobalAnalysisComponent } from 'app/logs/logs-global-analysis/logs-global-analysis.component';
import { DiagnosticWarningComponent } from './logs-diagnostic/diagnostic-warnings/diagnostic-warnings.component';
import { environment } from '../../environments/environment';
import { LogsCrawlBotBehaviorComponent } from './logs-crawl-bot-behavior/logs-crawl-bot-behavior.component';
import { LogsCrossAnalysisComponent } from './logs-cross-analysis/logs-cross-analysis.component';
import { LogsInstantWebpagesearchComponent } from './logs-instant-logs-analysis/logs-instant-webpagesearch/logs-instant-webpagesearch.component';
import { DiagnosticLowCrawledPagesComponent } from './logs-diagnostic/diagnostic-low-crawled-pages/diagnostic-low-crawled-pages.component';

const routes = [
    {
        path: '', component: LogsComponent,
        children: [
            { path: '', redirectTo: 'logs-global-analysis', pathMatch: 'full' },
            { path: 'logs-global-analysis', component: LogsGlobalAnalysisComponent },
            { path: 'diagnostic-warnings', component: DiagnosticWarningComponent },
            { path: 'diagnostic-low-crawled-pages', component: DiagnosticLowCrawledPagesComponent },
            { path: 'logs-crawl-bot-behavior', component: LogsCrawlBotBehaviorComponent },
            { path: 'logs-cross-analysis', component: LogsCrossAnalysisComponent },
            { path: 'logs-instant-webpagesearch', component: LogsInstantWebpagesearchComponent },
            { path: '**', redirectTo: 'logs-global-analysis' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogsRoutingModule { }
