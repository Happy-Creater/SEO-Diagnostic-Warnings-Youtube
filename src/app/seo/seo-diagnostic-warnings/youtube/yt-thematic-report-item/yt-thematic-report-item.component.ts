import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ytScoreItem, ytWarningProblem} from '../models/youtube_model';
import {DetailsFilterService} from '../details-filter-service.service';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Component({
  selector: 'app-yt-thematic-report-item',
  templateUrl: './yt-thematic-report-item.component.html',
  styleUrls: ['./yt-thematic-report-item.component.css'],
  providers: [DetailsFilterService]
})
export class YtThematicReportItemComponent implements OnInit {

  @Input() categoryName;
  @Input() latestWarningProblem: ytWarningProblem;
  @Input() previousWarningProblem: ytWarningProblem;
  @Input() latestScore: ytScoreItem;
  @Input() previousScore: ytScoreItem;
  @Input() warningProblem: ytWarningProblem[];
  @Output() graphData = new EventEmitter();
  @Output() changeData = new EventEmitter();

  option: Object;
  smallGraphOption: Object;
  bigGraphOption: Object;
  warning = 0;
  problem = 0;
  score = 0;
  warningEvolution = 0;
  problemEvolution = 0;
  scoreEvolution = 0;
  warningClass;
  problemClass;
  warningCaret;
  problemCaret;
  nameValues = {
    'CHANNEL': 'Channel',
    'VIDEOS': 'Video',
    'PLAYLISTS': 'Playlist'
  };

  constructor(private detailsFilter: DetailsFilterService) {
  }

  ngOnInit() {
    this.processData();
  }

  processData() {
    this.processScore();
    this.processGraph();
    this.latestWarningProblem.categories.map(value => {
      if (value.categoryName === this.nameValues[this.categoryName]) {
        this.warning = value.nbrWarning;
        this.problem = value.nbrProblem;
        return;
      }
    });
    let prevWarning = 0;
    let prevProblem = 0;
    this.previousWarningProblem.categories.map(value => {
      if (value.categoryName === this.nameValues[this.categoryName]) {
        prevWarning = value.nbrWarning;
        prevProblem = value.nbrProblem;
        return;
      }
    });
    this.warningEvolution = this.warning - prevWarning;
    this.problemEvolution = this.problem - prevProblem;
    this.processColor();
  }

  processScore() {
    switch (this.categoryName) {
      case 'CHANNEL':
        this.score = this.latestScore.channelTechnicalYoutubeScore;
        this.scoreEvolution = this.score - this.previousScore.channelTechnicalYoutubeScore;
        break;
      case 'VIDEOS':
        this.score = this.latestScore.videosTechnicalYoutubeScore;
        this.scoreEvolution = this.score - this.previousScore.videosTechnicalYoutubeScore;
        break;
      case 'PLAYLISTS':
        this.score = this.latestScore.playlistTechnicalYoutubeScore;
        this.scoreEvolution = this.score - this.previousScore.playlistTechnicalYoutubeScore;
        break;
    }
    this.option = this.buildOption(this.score, this.scoreEvolution);
  }

  processColor() {
    if (this.warningEvolution > 0) {
      this.warningClass = 'c-red';
      this.warningCaret = 'fa-caret-up';
    } else if (this.warningEvolution === 0) {
      this.warningClass = 'c-gray';
      this.warningCaret = 'fa-caret-right';
    } else if (this.warningEvolution < 0) {
      this.warningClass = 'c-green';
      this.warningCaret = 'fa-caret-down';
    }
    if (this.problemEvolution > 0) {
      this.problemClass = 'c-red';
      this.problemCaret = 'fa-caret-up';
    } else if (this.problemEvolution === 0) {
      this.problemClass = 'c-gray';
      this.problemCaret = 'fa-caret-right';
    } else if (this.problemEvolution < 0) {
      this.problemClass = 'c-green';
      this.problemCaret = 'fa-caret-down';
    }
  }

  processGraph() {
    let smallGraphData = [];
    let categories = [];
    let index = 0;
    this.warningProblem.map((value) => {
      const date = new Date(value.date);

      value.categories.map(category => {
        if (category.categoryName === this.nameValues[this.categoryName]) {
          categories[index] = date.getDate() + ' ' + months[date.getMonth()];
          smallGraphData[index++] = category.nbrWarning;
          return;
        }
      });
    });
    this.smallGraphOption = this.buildSmallGraph(smallGraphData);
    this.bigGraphOption = this.buildBigGraph(0, categories, smallGraphData);
  }

  emitGraphData() {
    this.graphData.emit({option: this.bigGraphOption, name: this.categoryName});
  }

  changeGraphData() {
    this.changeData.emit({option: this.bigGraphOption, name: this.categoryName});
  }

  buildOption(score, evolution) {
    score = score * 100;
    score = Math.ceil(score);
    score = score / 100;
    evolution = evolution * 100;
    evolution = Math.ceil(evolution);
    evolution = evolution / 100;
    let evl_color, back_color, score_color;
    if (evolution > 0) {
      evl_color = '#FF0D12';
    } else if (evolution < 0) {
      evl_color = '#3dd674';
    } else if (evolution === 0) {
      evl_color = '#6D6D6C';
    }

    if (score >= 0 && score < 4) {
      score_color = '#ff0d12';
      back_color = '#786c6c';
    } else if (score >= 4 && score < 6) {
      score_color = 'orange';
      back_color = 'rgb(255,72,0,0.1)';
    } else if (score >= 6 && score < 8) {
      score_color = 'rgb(239,239,33)';
      back_color = 'rgba(255,255,0,0.2)';
    } else if (score >= 8 && score <= 10) {
      back_color = '#dcefec';
      score_color = '#3dd674';
    }

    return {
      chart: {
        type: 'solidgauge',
        height: '160px',
        events: {
          render: function () {
          }
        }
      },

      title: {
        text: '',
        //                text: 'Overall score',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          fontFamily: 'Proxima Nova Light',
          color: '#6b6b6b'
        },
        align: 'left'
      },
      tooltip: {enabled: false},

      yAxis: {
        min: 0,
        max: 10,
        lineWidth: 0,
        tickPositions: []
      },

      plotOptions: {
        solidgauge: {
          borderWidth: '12px',
          dataLabels: {
            enabled: true,
            y: -30,
            borderWidth: 0,
            backgroundColor: 'none',
            useHTML: true,
            shadow: false,
            style: {
              fontSize: '20px',
              lineHeight: '30px'
            },
            // tslint:disable-next-line:max-line-length
            pointFormat: `<span style="font-size:20px; color: ${score_color}; font-weight: bold;font-family: Proxima Nova Light;">{point.y}</span>` +
              `<br><span style="color:${evl_color};font-size:15px;">{series.name}</span>`,
            positioner: function (labelWidth) {
              return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 30
              };
            }
          },
          linecap: 'round',
          stickyTracking: true
        }
      },
      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{
          outerRadius: '105%',
          innerRadius: '88%',
          backgroundColor: back_color,
          borderWidth: 0
        }]
      },

      series: [{
        // tslint:disable-next-line:max-line-length
        name: `<i class="fa ${evolution > 0 ? 'fa-caret-up' : (evolution === 0 ? 'fa-caret-right' : 'fa-caret-down')}" aria-hidden="false"></i>
                <span style="font-size:14px;">${evolution.toFixed(1) > 0 ? evolution.toFixed(1) : evolution.toFixed(1) * -1}
                </span>`,
        data: [{
          color: score_color,
          radius: '112%',
          innerRadius: '80%',
          y: score
        }]
      }],
      exporting: {enabled: false},
      credits: {enabled: false},
      lang: {noData: 'No data to display.'},
      noData: {position: {align: 'center', verticalAlign: 'middle'}},
    };
  }

  buildSmallGraph(data) {
    return {
      chart: {
        type: 'area',
        zoomType: 'x',
        height: 70,
        width: 110,
        maxPadding: 0,
        panning: false,
        gridLineWidth: 0,
        panKey: false,
        scrollablePlotArea: {
          maxWidth: 70
        }
      },
      exporting: {enabled: false},

      title: {
        text: null
      },

      credits: {
        enabled: false
      },


      xAxis: {
        gridLineWidth: 0,
        labels: {
          enabled: false
        },
        title: {
          text: null
        },

      },

      yAxis: {
        gridLineWidth: 0,
        endOnTick: false,
        maxPadding: 0.1,
        title: {
          text: null
        },
        labels: {
          enabled: false
        },
      },

      plotOptions: {
        series: {
          states: {
            hover: {
              enabled: true,
              lineWidth: 1
            }
          }
        }
      },


      tooltip: false,

      legend: {
        enabled: false
      },

      series: [{
        accessibility: {
          keyboardNavigation: {
            enabled: false
          },

        },
        lineWidth: 1,
        title: null,
        showline: false,
        showgrid: false,
        data: data,
        lineColor: '#004a97',
        color: 'transparent',
        fillOpacity: 0.5,
        name: null,
        hover: {
          lineWidth: 1
        },
        marker: {
          enabled: false
        },
        threshold: null
      }],
      lang: {noData: 'No data to display.'},
      noData: {position: {align: 'center', verticalAlign: 'top'}},
    };
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
        tickPositions: [0, Math.ceil(categories.length / 5), Math.ceil(categories.length / 5) * 2,
          Math.ceil(categories.length / 5) * 3, Math.ceil(categories.length / 5) * 4, categories.length - 1],
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
        name: 'Score',
        color: '#519ffb',
        data: data
      }],
      lang: {noData: 'No data to display.'},
      noData: {position: {align: 'center', verticalAlign: 'middle'}},
      exporting: {enabled: false},
    };
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (changes['warningProblem']) {
      this.processGraph();
      this.changeGraphData();
    }
  }

  scroll() {
    // this.detailsFilter.setFilter({ category: this.namesValue[this.name], labels: [], problem: null, show: true });
    setTimeout(() => {
      window.scrollTo({top: document.getElementById('Detail-yt').offsetTop - 100, behavior: 'smooth'});
    }, 500);
  }
}
