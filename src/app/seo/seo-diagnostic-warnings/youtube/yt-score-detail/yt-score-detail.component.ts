import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ytScore, ytWarningProblem} from '../models/youtube_model';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Component({
  selector: 'app-yt-score-detail',
  templateUrl: './yt-score-detail.component.html',
  styleUrls: ['./yt-score-detail.component.css']
})
export class YtScoreDetailComponent implements OnInit {

  @Input() periodWarningProblem: ytWarningProblem[];
  @Input() periodScore: ytScore[];
  @Input() chartType;
  @Input() chartSource;
  @Input() selectedChart: string;

  evolution = {option: null, show: false};
  cumulative = {option: null, show: false};
  distribution = {option: null, show: false};
  categories = [];
  evolutionData= [];
  cumulativeData = [];
  distributionData = {CHANNEL: [], VIDEOS: [], PLAYLISTS: []};
  testOption = null;

  constructor() {
  }

  ngOnInit() {
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
      categories[index] = date.getDate() + ' ' + months[date.getMonth()];
      evolutionData[index] = this.periodScore[key].globalTechnicalYouTubeScore;
      // tslint:disable-next-line:no-shadowed-variable
      distributionData.CHANNEL.push(this.periodScore[key].channelTechnicalYoutubeScore);
      distributionData.VIDEOS.push(this.periodScore[key].videosTechnicalYoutubeScore);
      distributionData.PLAYLISTS.push(this.periodScore[key].playlistTechnicalYoutubeScore);
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
    // if (this.selectedChart === 'Evolution') {
    //   this.evolution.option = this.buildBigGraph(0, categories, evolutionData);
    // } else if (this.selectedChart === 'Cumulative') {
    //   this.cumulative.option = this.buildBigGraph(0, categories, cumulativeData);
    // } else if (this.selectedChart === 'Distribution') {
    //   this.distribution.option = this.buildDistributionOption(categories, distributionData);
    // }
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
      categories[index] = date.getDate() + ' ' + months[date.getMonth()];
      if (chartSource === 'warnings') {
        evolutionData[index] = value.nbrWarnings;
        cumulativeData[index] = value.nbrWarningsCumulated;
      } else if (chartSource === 'problems') {
        evolutionData[index] = value.nbrProblem;
      }
      // tslint:disable-next-line:no-shadowed-variable
      value.categories.map((value => {
        if (chartSource === 'warnings') {
          if (value.categoryName === 'Channel') {
            distributionData.CHANNEL.push(value.nbrWarning);
          } else if (value.categoryName === 'Video') {
            distributionData.VIDEOS.push(value.nbrWarning);
          } else if (value.categoryName === 'Playlist') {
            distributionData.PLAYLISTS.push(value.nbrWarning);
          }
        } else if (chartSource === 'problems') {
          if (value.categoryName === 'Channel') {
            distributionData.CHANNEL.push(value.nbrProblem);
          } else if (value.categoryName === 'Video') {
            distributionData.VIDEOS.push(value.nbrProblem);
          } else if (value.categoryName === 'Playlist') {
            distributionData.PLAYLISTS.push(value.nbrProblem);
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

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges (changes: SimpleChanges) {
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
      if (changes['periodWarningProblem'] || changes['chartSource'] || changes['selectedChart'] ) {
        this.warningProblemData(this.chartSource.value);
      }
      if (changes['periodScore'] || changes['chartSource'] || changes['selectedChart'] ) {
        this.scoreData(this.chartSource.value);
      }
    }
  }

  buildBigGraph(fill, categories, data) {
    return {
      chart: {
        type: 'areaspline',
        height: '265px',
        marginLeft: 20
      },
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      subtitle: {
        enabled: false
      },
      xAxis: {
        categories: categories,
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        },
        // tslint:disable-next-line:max-line-length
        tickPositions: [0, Math.ceil(categories.length / 5),
          Math.ceil(categories.length / 5) * 2, Math.ceil(categories.length / 5) * 3,
          Math.ceil(categories.length / 5) * 4, categories.length - 1],
        gridLineWidth: 0.8,
        plotBands: [

          {
            from: Math.ceil(categories.length / 5),
            to: Math.ceil(categories.length / 5) * 2,
            color: 'rgba(247, 247, 249, 0.8)'
          },
          {
            from: Math.ceil(categories.length / 5) * 3,
            to: Math.ceil(categories.length / 5) * 4,
            color: 'rgba(247, 247, 249, 0.8)'
          }
        ],

      },
      yAxis: {
        title: {
          enabled: false
        },
        visible: true,
        min: 0,
        gridLineDashStyle: 'longdash',
        gridLineWidth: 0,
        labels: {
          align: 'left',
          x: -20,
          y: 0
        }

      },
      tooltip: {
        crosshairs: [false, false],
        shared: true,
        animation: true,

      },
      plotOptions: {
        title: false,
        series: {

          lineWidth: 2,
          fillOpacity: fill,

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
      legend: {
        enabled: false,
      },
      series: [{
        name: this.chartSource.value.replace(/\b./g, function (a) {
          return a.toUpperCase();
        }),
        color: '#519ffb',
        data: data
      }],
      lang: {noData: 'No data to display.'},
      noData: {
        position: {align: 'center', verticalAlign: 'middle', y: -27},
        style: {
          fontWeight: 'bold',
          fontSize: '20px'
        }
      },
      exporting: {enabled: false},
    };
  }

  buildDistributionOption(categories, data) {
    return {
      chart: {
        type: 'column',
        height: '265px',
        zoomType: 'x'
      },
      title: {text: null},
      credits: {enabled: false},
      exporting: {enabled: false},
      xAxis: {categories: categories},
      yAxis: {
        min: 0,
        title: {
          text: null
        },
        gridLineWidth: 0.8,
        opposite: true
      },
      tooltip: {
        zIndex: 99,
        backgroundColor: '#fff',
        fillOpacity: 1,
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true,
        useHTML: true,
        dataLabels: {
          enabled: true,
          useHTML: true,
          backgroundColor: '#fff',
          fillOpacity: 1,
        },

      },
      legend: {
        enabled: true,
        align: 'center',
        shadow: false,
        useHTML: true,
        y: 0,
        itemMarginBottom: 0,
        verticalAlign: 'bottom',
      },
      plotOptions: {
        column: {
          stacking: 'percent',
        },

      },
      series: [{
        name: '<span class="wh " style=""><span class="bb-span-b"></span>CHANNEL</span>',
        data: data.CHANNEL,
        color: '#ED723D',
        dataLabels: {
          width: 50,
        }

      }, {
        name: '<span class="mh " style=""><span class="bb-span-b"></span>VIDEOS</span>',
        data: data.VIDEOS,
        color: '#5DBEFF',
        dataLabels: {
          width: 50,
        }
      }, {
        name: '<span class="lh " style=""><span class="bb-span"></span>PLAYLISTS</span>',
        data: data.PLAYLISTS,
        color: '#E88ED7',
        dataLabels: {
          width: 50,
        }
      }

      ],
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

  buildMultiGraphOption(categories, evolutionData, cumulativeData, distributionData) {
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
        enabled: false,
      },
      tooltip: {
        zIndex: 99,
        backgroundColor: '#fff',
        fillOpacity: 1,
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> <br>',
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
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        },
        // tslint:disable-next-line:max-line-length
        tickPositions: [0, Math.ceil(categories.length / 5),
          Math.ceil(categories.length / 5) * 2, Math.ceil(categories.length / 5) * 3,
          Math.ceil(categories.length / 5) * 4, categories.length - 1],
        gridLineWidth: 0.8,
        plotBands: [

          {
            from: Math.ceil(categories.length / 5),
            to: Math.ceil(categories.length / 5) * 2,
            color: 'rgba(247, 247, 249, 0.8)'
          },
          {
            from: Math.ceil(categories.length / 5) * 3,
            to: Math.ceil(categories.length / 5) * 4,
            color: 'rgba(247, 247, 249, 0.8)'
          }
        ],
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
        }, ],
      plotOptions: {
        column: {
          stacking: 'percent',
        },
      },
      series: [{
        name: '<span class="wh " style=""><span class="bb-span-b"></span>CHANNEL</span>',
        data: distributionData.CHANNEL,
        type: 'column',
        yAxis: 1,
        color: '#ED723D',
        tooltip: {
          valueSuffix: '({point.percentage:.0f}%)'
        }
      }, {
        name: '<span class="mh " style=""><span class="bb-span-b"></span>VIDEOS</span>',
        data: distributionData.VIDEOS,
        type: 'column',
        yAxis: 1,
        color: '#5DBEFF',
        tooltip: {
          valueSuffix: '({point.percentage:.0f}%)'
        }
      }, {
        type: 'column',
        yAxis: 1,
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
        name: 'evolution',
        data: evolutionData,
        marker: {
          enabled: false
        },
        tooltip: {
          valueSuffix: ''
        }

      }, {
        type: 'spline',
        yAxis: 0,
        name: 'cumulative',
        color: '#519ffb',
        data: cumulativeData,
        marker: {
          enabled: false
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


}
