import { Component, OnInit, OnChanges, Input, ContentChild } from '@angular/core';

import { BackgroundImage } from './background-image';
import { PlotBandItem } from './plot-band-item';
import { GaugeColorDirective } from './directives/gauge-color/gauge-color.directive';

@Component({
  selector: 'gauge-custom-chart',
  templateUrl: './gauge-custom-chart.component.html',
  styleUrls: ['./gauge-custom-chart.component.css']
})
export class GaugeCustomChartComponent implements OnInit, OnChanges {

  /**
   * Minimum value of gauge chart.
   */
  @Input()
  min: number = 0;
  /**
   * Maximum value of gauge chart.
   */
  @Input()
  max: number = 10;
  /**
   * Value of gauge chart.
   */
  @Input()
  value: number = 0;
  /**
   * Width of gauge chart.
   */
  @Input()
  width: number = 250;
  /**
   * Height of gauge chart.
   */
  @Input()
  height: number | string = 250;
  /**
   * Start angle of pane.
   */
  @Input('start-angle')
  startAngle: number = -90;
  /**
   * End angle of pane.
   */
  @Input('end-angle')
  endAngle: number = 90;
  /**
   * Radius of dial.
   */
  @Input('dial-radius')
  dialRadius: string = '50%';
  /**
   * Background image.
   */
  @Input('background-image')
  backgroundImage: BackgroundImage;
  /**
   * Plot bands.
   */
  @Input('plot-bands')
  plotBands: PlotBandItem[];
  /**
   * Multiple pointer
   */
  @Input('is-multiple-pointer')
  isMultiplePointer = false;
  /**
   * 
   */
  @Input('second-value')
  secondValue: number = 0;
  /**
   * Chart instance.
   */
  chart: any;
  /**
   * Options of Highcharts.
   */
  options: Object;
  /**
   * Gauge color.
   */
  @ContentChild(GaugeColorDirective)
  private gaugeColor: GaugeColorDirective;

  constructor() { }

  ngOnInit() {
    if (this.isMultiplePointer && this.secondValue >= 0) {
      this.initGaugeChartWithMultiplePointer();
    } else {
      this.initGaugeChart();
    }
  }

  ngOnChanges() {
    // update value.
    this.updateValue();
    // update color.
    if ((this.plotBands != undefined) && (this.gaugeColor != undefined)) {
      let color = 'black';
      for (let plotBand of this.plotBands) {
        if ((plotBand.from <= this.value) && (plotBand.to >= this.value)) {
          color = plotBand.color;
          break;
        }
      }
      this.gaugeColor.setColor(color);
    }
  }

  /**
   * Initialize gauge chart.
   */
  initGaugeChart() {
    this.options = {
      chart: {
        type: 'gauge',
        width: this.width,
        height: this.height,
        spacing: [0, 0, 0, 0],
        backgroundColor: 'transparent'
      },
      title: { text: null },
      tooltip: { enabled: false },
      pane: {
        startAngle: this.startAngle,
        endAngle: this.endAngle,
        background: null
      },
      plotOptions: {
        gauge: {
          dataLabels: {
            enabled: false
          },
          dial: {
            radius: this.dialRadius,
            backgroundColor: '#549eff',
            topWidth: 3,
            baseWidth: 3,
            rearLength: '-10%'
          },
          pivot: {
            radius: 5,
            borderWidth: 3,
            borderColor: '#549eff',
            backgroundColor: 'transparent'
          }
        }
      },
      yAxis: {
        min: this.min,
        max: this.max,

        minorTickInterval: 'auto',
        minorTickWidth: 0,
        minorTickLength: 0,
        minorTickPosition: 'inside',

        tickPixelInterval: 0,
        tickWidth: 0,
        tickPosition: 'inside',
        tickLength: 0,
        labels: {
          step: 2,
          rotation: 'auto',
          enabled: false
        },
        title: {
          enabled: false
        }
      },
      series: [{
        data: [this.value]
      }],
      credits: { enabled: false },
      exporting: { enabled: false }
    };
  }

  initGaugeChartWithMultiplePointer() {
    let self = this;
    this.options = {
      chart: {
        type: 'gauge',
        width: this.width,
        height: this.height,
        spacing: [0, 0, 0, 0],
        backgroundColor: 'transparent'
      },
      title: { text: null },
      tooltip: {
        enabled: true,
        useHTML: true,
        followPointer: true,
        shadow: false,
        borderWidth: 0,
        hideDelay: 0,
        backgroundColor: 'transparent',
        style: {
          zIndex: 999999
        },
        positioner: function (labelWidth, labelHeight, point) {
          let val = this.chart.series[1].data[0].y;
          if (val >= 0 && val < 1) {
            return { x: 50, y: 90 };
          } else if (val >= 1 && val < 2) {
            return { x: 55, y: 80 };
          } else if (val >= 2 && val < 3) {
            return { x: 60, y: 75 };
          } else if (val >= 3 && val < 4) {
            return { x: 80, y: 55 };
          } else if (val >= 4 && val < 5) {
            return { x: 95, y: 55 };
          } else if (val >= 5 && val < 6) {
            return { x: 115, y: 53 };
          } else if (val >= 6 && val < 7) {
            return { x: 130, y: 55 };
          } else if (val >= 7 && val < 8) {
            return { x: 140, y: 68 };
          } else if (val >= 8 && val < 9) {
            return { x: 150, y: 75 };
          } else if (val >= 9 && val < 10) {
            return { x: 160, y: 80 };
          } else if (val >= 10) {
            return { x: 160, y: 90 };
          }
        },
        formatter: function () {
          if (this.colorIndex != 1) {
            return false;
          } else {
            return '<b style="color: #8e8888; font-family: Proxima Nova bold; font-size: 14px; z-index: 999999;">' + this.y.toFixed(2).replace('.00', '') + '</b>';
          }
        }
      },
      pane: {
        startAngle: this.startAngle,
        endAngle: this.endAngle,
        background: null
      },
      plotOptions: {
        gauge: {
          dataLabels: {
            enabled: false
          },
          dial: {
            radius: this.dialRadius,
            backgroundColor: '#549eff',
            topWidth: 3,
            baseWidth: 3,
            rearLength: '-10%'
          },
          pivot: {
            radius: 5,
            borderWidth: 3,
            borderColor: '#549eff',
            backgroundColor: 'transparent'
          }
        }
      },
      yAxis: {
        min: this.min,
        max: this.max,

        minorTickInterval: 'auto',
        minorTickWidth: 0,
        minorTickLength: 0,
        minorTickPosition: 'inside',

        tickPixelInterval: 0,
        tickWidth: 0,
        tickPosition: 'inside',
        tickLength: 0,
        labels: {
          step: 2,
          rotation: 'auto',
          enabled: false
        },
        title: {
          enabled: false
        }
      },
      series: [
        {
          data: [this.value],
          dataLabels: {
            enabled: false
          }
        },
        {
          dial: {
            backgroundColor: '#AFABAB',
            topWidth: 1,
            baseWidth: 1,
            rearLength: '-10%'
          },
          cursor: 'pointer',
          data: [this.secondValue],
        }
      ],
      credits: { enabled: false },
      exporting: { enabled: false }
    };
  }

  /**
   * Save instance of chart.
   * @param chartInstance instance of chart
   */
  saveChartInstance(chartInstance) {
    this.chart = chartInstance;
    if (this.backgroundImage != undefined) {
      this.chart.renderer.image(this.backgroundImage.source, this.backgroundImage.x, this.backgroundImage.y, this.backgroundImage.width, this.backgroundImage.height).add();
    }
  }

  /**
   * Update value of gauge chart.
   */
  updateValue() {
    if (this.chart != undefined) {
      let value = this.value > this.max ? this.max : this.value;
      this.chart.series[0].setData([value]);
    }
  }
}
