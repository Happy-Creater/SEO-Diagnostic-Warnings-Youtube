import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ytScore, ytWarningProblem} from '../../models/youtube_model';
import {TranslateService} from "@ngx-translate/core";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Component({
  selector: 'app-yt-score-detail',
  templateUrl: './yt-score-detail.component.html',
  styleUrls: ['./yt-score-detail.component.css']
})
export class YtScoreDetailComponent implements OnInit, OnChanges {

  @Input() periodWarningProblem: ytWarningProblem[];
  @Input() periodScore: ytScore[];
  @Input() chartType;
  @Input() chartSource;
  @Input() selectedChart: string;

  evolution = {option: null, show: false};
  cumulative = {option: null, show: false};
  distribution = {option: null, show: false};
  categories = [];
  evolutionData = [];
  cumulativeData = [];
  distributionData = {CHANNEL: [], VIDEOS: [], PLAYLISTS: []};
  testOption = null;
  language;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.language = this.translate.getBrowserLang();
    this.warningProblemData(this.chartSource.value);
    this.scoreData(this.chartSource.value);
  }

  scoreData(chartSource) {
    let categories;
    let evolutionData = [];
    let cumulativeData = [];
    let distributionData = {CHANNEL: [], VIDEOS: [], PLAYLISTS: []};
    categories = [];
    if (chartSource !== 'score') {
      return;
    }
    Object.keys(this.periodScore).map((key, index) => {
      const date = new Date(key);
      categories.push(date.toLocaleDateString('en', {day: 'numeric', month: 'short', year: 'numeric'}));
      evolutionData[index] = this.round(this.periodScore[key].globalTechnicalYouTubeScore, 2);
      // tslint:disable-next-line:no-shadowed-variable
      distributionData.CHANNEL.push(this.round(this.periodScore[key].channelTechnicalYoutubeScore, 2));
      distributionData.VIDEOS.push(this.round(this.periodScore[key].videosTechnicalYoutubeScore, 2));
      distributionData.PLAYLISTS.push(this.round(this.periodScore[key].playlistTechnicalYoutubeScore, 2));
    });
    this.categories = categories;
    this.evolutionData = evolutionData;
    this.cumulativeData = [];
    this.distributionData = distributionData;
    if (!this.evolution.show) {
      evolutionData = [];
    }
    if (!this.cumulative.show) {
      cumulativeData = [];
    }
    if (!this.distribution.show) {
      distributionData = {CHANNEL: [], VIDEOS: [], PLAYLISTS: []};
    }
    this.testOption = this.buildMultiGraphOption(categories, evolutionData, cumulativeData, distributionData);
  }

  warningProblemData(chartSource) {
    let categories;
    let evolutionData = [];
    let cumulativeData = [];
    let distributionData = {CHANNEL: [], VIDEOS: [], PLAYLISTS: []};
    categories = [];
    if (chartSource === 'score') {
      this.cumulative.show = false;
      return;
    }
    this.periodWarningProblem.map((value, index) => {
      const date = new Date(value.date);
      categories.push(date.toLocaleDateString('en', {day: 'numeric', month: 'short', year: 'numeric'}));
      if (chartSource === 'warnings') {
        evolutionData[index] = this.round(value.nbrWarnings, 2);
        cumulativeData[index] = this.round(value.nbrWarningsCumulated, 2);
      } else if (chartSource === 'problems') {
        evolutionData[index] = this.round(value.nbrProblem, 2);
      }
      // tslint:disable-next-line:no-shadowed-variable
      value.categories.map((value => {
        if (chartSource === 'warnings') {
          if (value.categoryName === 'Channel') {
            distributionData.CHANNEL.push(this.round(value.nbrWarning, 2));
          } else if (value.categoryName === 'Video') {
            distributionData.VIDEOS.push(this.round(value.nbrWarning, 2));
          } else if (value.categoryName === 'Playlist') {
            distributionData.PLAYLISTS.push(this.round(value.nbrWarning, 2));
          }
        } else if (chartSource === 'problems') {
          if (value.categoryName === 'Channel') {
            distributionData.CHANNEL.push(this.round(value.nbrProblem, 2));
          } else if (value.categoryName === 'Video') {
            distributionData.VIDEOS.push(this.round(value.nbrProblem, 2));
          } else if (value.categoryName === 'Playlist') {
            distributionData.PLAYLISTS.push(this.round(value.nbrProblem, 2));
          }
        }
      }));
    });
    this.categories = categories;
    this.evolutionData = evolutionData;
    this.cumulativeData = cumulativeData;
    this.distributionData = distributionData;
    if (!this.evolution.show) {
      evolutionData = [];
    }
    if (!this.cumulative.show) {
      cumulativeData = [];
    }
    if (!this.distribution.show) {
      distributionData = {CHANNEL: [], VIDEOS: [], PLAYLISTS: []};
    }
    this.testOption = this.buildMultiGraphOption(categories, evolutionData, cumulativeData, distributionData);
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartType']) {
      this.chartType.map(item => {
        if (item.label === 'Evolution') {
          this.evolution.show = item.isActive;
        } else if (item.label === 'Cumulative') {
          this.cumulative.show = item.isActive;
        } else if (item.label === 'Distribution') {
          this.distribution.show = item.isActive;
        }
      });
      this.warningProblemData(this.chartSource.value);
      this.scoreData(this.chartSource.value);
    } else {
      if (changes['periodWarningProblem'] || changes['chartSource'] || changes['selectedChart']) {
        this.warningProblemData(this.chartSource.value);
      }
      if (changes['periodScore'] || changes['chartSource'] || changes['selectedChart']) {
        this.scoreData(this.chartSource.value);
      }
    }
  }

  buildMultiGraphOption(categories, evolutionData, cumulativeData, distributionData) {
    let plotColor;
    plotColor = [];
    let index = 0;
    for (let i = 0; i < categories.length; i++) {
      if (i % 2 === 0 && i < categories.length - 1) {
        plotColor[index++] = {
          from: i,
          to: i + 1,
          color: 'rgba(247, 247, 249, 0.5)'
        };
      }
    }
    let len = 0;
    if (evolutionData.length > 0) {
      len++;
    }
    if (cumulativeData.length > 0) {
      len++;
    }
    if (distributionData.CHANNEL.length > 0 || distributionData.VIDEOS.length > 0 || distributionData.PLAYLISTS.length > 0) {
      len += 3;
    }
    return {
      chart: {
        zoomType: 'xy',
      },
      title: {
        text: null,
      },
      credits: {enabled: false},
      exporting: {enabled: false},
      legend: {
        enabled: (distributionData.CHANNEL.length > 0 || distributionData.VIDEOS.length > 0 || distributionData.PLAYLISTS.length > 0),
        symbolRadius: 0,
      },
      tooltip: {
        zIndex: 99,
        backgroundColor: '#fff',
        borderColor: '#CfCfCf',
        fillOpacity: 1,
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> <br>',
        formatter: function () {
          const date = new Date(this.x);
          const header = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
          if (len === 1) {
            const points = this.points,
              tooltipArray = ['<b>' + header + ': </b>'];
            points.forEach(function (point) {
              tooltipArray.push(' <b>' + point.y + '</b>');
            });
            return tooltipArray;
          }

          return this.points.reduce(function (s, point) {
            const percent = point.percentage === undefined ? '' : ' (' + Math.round(point.percentage * 100) / 100 + '%)';
            return s + '<br/><span style="color:' + point.series.color + '">' + point.series.name + '</span>: <b>' +
              point.y + percent + '</b>';
          }, '<b>' + header + '</b>');

        },
        shared: true,
        useHTML: true,
        dataLabels: {
          enabled: true,
          useHTML: true,
          backgroundColor: '#fff',
          fillOpacity: 1,
        },
      },
      xAxis: [{
        categories: categories,
        labels: {
          formatter: function () {
            const date = new Date(this.value);
            return date.getDate() + ' ' + months[date.getMonth()];
          }
        },
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        },
        gridLineWidth: 0.8,
        plotBands: plotColor,
      }],
      yAxis: [
        { // Evolution / Cumulative Y axis
          min: 0,
          gridLineWidth: 0,
          title: {
            text: null,
          },
          labels: {
            format: '{value}',
          }

        }, { // Distribution Y axis
          title: {
            text: null,
          },
          labels: {
            enabled: true,
          },
          endOnTick: false,
          opposite: true
        }],
      plotOptions: {
        column: {
          stacking: 'percent',
        },
        title: false,
        series: {

          lineWidth: 2,
          fillOpacity: 0.2,

          marker: {
            symbol: 'circle',
            radius: 4,
            states: {
              hover: {
                enabled: true,
                radius: 3
              }
            }
          },

        }
      },
      series: [{
        name: '<span class="wh " style=""><span class="bb-span-b"></span>CHANNEL</span>',
        data: distributionData.CHANNEL,
        type: 'column',
        borderRadius: 3,
        yAxis: 1,
        maxPointWidth: 15,
        color: '#ED723D',
        tooltip: {
          valueSuffix: '({point.percentage:.0f}%)'
        }
      }, {
        name: '<span class="mh " style=""><span class="bb-span-b"></span>VIDEOS</span>',
        data: distributionData.VIDEOS,
        type: 'column',
        borderRadius: 3,
        yAxis: 1,
        maxPointWidth: 15,
        color: '#5DBEFF',
        tooltip: {
          valueSuffix: '({point.percentage:.0f}%)'
        }
      }, {
        type: 'column',
        borderRadius: 3,
        yAxis: 1,
        maxPointWidth: 15,
        name: '<span class="lh " style=""><span class="bb-span"></span>PLAYLISTS</span>',
        data: distributionData.PLAYLISTS,
        color: '#E88ED7',
        tooltip: {
          valueSuffix: '({point.percentage:.0f}%)'
        }
      }, {
        type: 'spline',
        yAxis: 0,
        color: '#519ffb',
        name: 'Evolution',
        data: evolutionData,
        showInLegend: false,
        marker: {
          enabled: true
        },
        tooltip: {
          valueSuffix: ''
        }

      }, {
        type: 'areaspline',
        yAxis: 0,
        name: 'Cumulative',
        color: '#519ffb',
        data: cumulativeData,
        showInLegend: false,
        marker: {
          enabled: true,
          symbol: 'circle'
        },
        tooltip: {
          valueSuffix: ''
        }
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            yAxis: [{
              labels: {
                align: 'right',
                x: 0,
                y: -6
              },
              showLastLabel: false
            }, {
              labels: {
                align: 'left',
                x: 0,
                y: -6
              },
              showLastLabel: false
            }]
          }
        }]
      },
      lang: {noData: 'No data to display.'},
      noData: {
        position: {align: 'center', verticalAlign: 'middle', y: -27},
        style: {
          fontWeight: 'bold',
          fontSize: '20px'
        }
      },
    };
  }

  round(value: number, digit: number) {
    value *= Math.pow(10, digit);
    value = Math.round(value);
    value /= Math.pow(10, digit);
    return value;
  }
}
