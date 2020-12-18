import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'angular2-highcharts'
import { GaugeColorDirective } from './directives/gauge-color/gauge-color.directive';
import { GaugeCustomChartComponent } from './gauge-custom-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [GaugeColorDirective, GaugeCustomChartComponent],
  exports: [GaugeColorDirective, GaugeCustomChartComponent]
})
export class GaugeCustomChartModule { }
