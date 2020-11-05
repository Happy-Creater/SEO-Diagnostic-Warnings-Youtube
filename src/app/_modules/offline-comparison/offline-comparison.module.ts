import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineComparisonComponent } from './offline-comparison.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from "app/_modules/progress-bar/progress-bar.module";
import { OfflineComparisonPopupComponent } from './popup/offline-comparison-popup.component';
import { SafeHtmlPipe } from './popup/SafeHtmlPipe';
import { DownloadPopupModule } from '../download-popup/download-popup.module';
import { LoadingDelayModule } from 'app/_modules/loading-delay/loading-delay.module';
import { OfflineComparisonService } from './offline-comparison.service';
import { GaugeCustomChartModule } from '../highchart/gauge-custom-chart/gauge-custom-chart.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProgressBarModule,
        DownloadPopupModule,
        LoadingDelayModule,
        GaugeCustomChartModule

    ],
    declarations: [OfflineComparisonComponent, OfflineComparisonPopupComponent, SafeHtmlPipe],
    entryComponents: [OfflineComparisonPopupComponent],
    exports: [OfflineComparisonComponent],
    providers: [OfflineComparisonService]
})
export class OfflineComparisonModule { }