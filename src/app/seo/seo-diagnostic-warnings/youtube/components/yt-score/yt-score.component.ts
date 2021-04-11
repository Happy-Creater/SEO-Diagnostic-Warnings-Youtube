import {Component, Input, OnInit} from '@angular/core';
import {ytScore, ytScoreItem, ytWarningProblem} from '../../models/youtube_model';
import {DetailsFilterService} from '../../services/details-filter-service.service';

@Component({
  selector: 'app-yt-score',
  templateUrl: './yt-score.component.html',
  styleUrls: ['./yt-score.component.css'],
})
export class YtScoreComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input() latestScore: ytScoreItem;
  @Input() previousScore: ytScoreItem;
  @Input() latestWarningProblem: ytWarningProblem;
  @Input() previousWarningProblem: ytWarningProblem;

  option: Object;
  score: number;
  evolution: number;
  warning: number;
  warningEvolution: number;
  problem: number;
  problemEvolution: number;
  warningClass: string;
  problemClass: string;


  constructor(private detailsFilterService: DetailsFilterService) {
  }

  ngOnInit() {
    this.processData();
  }

  processData() {
    this.score = this.latestScore.globalTechnicalYouTubeScore;
    this.evolution = this.latestScore.globalTechnicalYouTubeScore - this.previousScore.globalTechnicalYouTubeScore;
    this.option = this.buildOption(this.score, this.evolution);
    this.warning = this.latestWarningProblem.nbrWarnings;
    this.warningEvolution = this.warning - this.previousWarningProblem.nbrWarnings;
    this.problem = this.latestWarningProblem.nbrProblem;
    this.problemEvolution = this.problem - this.previousWarningProblem.nbrProblem;
    if (this.warningEvolution < 0) {
      this.warningClass = 'c-green';
    } else if (this.warningEvolution === 0) {
      this.warningClass = 'c-gray';
    } else if (this.warningEvolution > 0) {
      this.warningClass = 'c-red';
    }

    if (this.problemEvolution < 0) {
      this.problemClass = 'c-green';
    } else if (this.problemEvolution === 0) {
      this.problemClass = 'c-gray';
    } else if (this.problemEvolution > 0) {
      this.problemClass = 'c-red';
    }
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
            pointFormat: `<span style="font-size:30px; color: ${score_color}; font-weight: bold;font-family: Proxima Nova Light;">{point.y}</span>` +
              `<div style="margin-top: -2px;"><span style="color:${evl_color};font-size:18px;">&nbsp;&nbsp;{series.name}</span></div>`,
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
                <span style="font-size:18px;">${evolution.toFixed(1) > 0 ? evolution.toFixed(1) : evolution.toFixed(1) * -1}
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

  scroll() {
    this.detailsFilterService.setFilter({
      category: '', labels: ['New', 'Existing', 'Dev', 'Con'],
      problem: null, filterByNew: true, warningHelpMsg: null, show: true
    });
    setTimeout(() => {
      window.scrollTo({top: document.getElementById('Detail-yt').offsetTop - 100, behavior: 'smooth'});
    }, 500);
  }

  scrollNew(evolution: number) {
    let labels = ['New', 'Existing', 'Dev', 'Con'];
    if (evolution > 0) {
      labels = ['New'];
    }
    this.detailsFilterService.setFilter({category: '', labels: labels, problem: null, filterByNew: true, warningHelpMsg: null, show: true});
    setTimeout(() => {
      window.scrollTo({top: document.getElementById('Detail-yt').offsetTop - 100, behavior: 'smooth'});
    }, 500);
  }

  scrollIncreasing(evolution: number) {
    let problem = null;
    if (evolution > 0) {
      problem = 'up';
    }
    this.detailsFilterService.setFilter({
      category: '', labels: ['New', 'Existing', 'Dev', 'Con'],
      problem: problem, filterByNew: true, warningHelpMsg: null, show: true
    });
    setTimeout(() => {
      window.scrollTo({top: document.getElementById('Detail-yt').offsetTop - 100, behavior: 'smooth'});
    }, 500);
  }

}
