import {Component, Input, OnInit} from '@angular/core';
import {GetYoutubeService} from '../get-youtube.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {warningCategory, ytScore, ytScoreItem, ytWarningProblem} from '../models/youtube_model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GetYoutubeService]
})
export class HomeComponent implements OnInit {

  @Input('web_id') webId;
  @Input('account') account;

  unsubscribeAll$ = new Subject();
  ytScores: ytScore[];
  periodScore: ytScore[];
  ytWarningProblems: ytWarningProblem[];
  periodWarningProblem: ytWarningProblem[];
  // periodHistory: {
  //   type: number;
  //   data: ytWarningProblem[];
  // }[];
  latestScore: ytScoreItem;
  previousScore: ytScoreItem;
  latestWarningProblem: ytWarningProblem;
  previousWarningProblem: ytWarningProblem;
  chartSource = {label: 'Number of warnings', value: 'warnings'};
  chartSourceList = [
    {label: 'Number of warnings', value: 'warnings'},
    {label: 'Number of problems', value: 'problems'},
    {label: 'Score', value: 'score'},
  ];
  chartType = {label: 'All labels', isActive: true};
  chartTypeList = [
    {label: 'Evolution', isActive: true},
    {label: 'Cumulative', isActive: false},
    {label: 'Distribution', isActive: false}
  ];
  period = {type: 3, label: 'Last 3 months'};
  periodList = [
    {type: 3, label: 'Last 3 months'},
    {type: 6, label: 'Last 6 months'},
    {type: 12, label: 'Last 12 months'},
    {type: 0, label: 'Since beginning of the project'}
  ];

  constructor(
    private getYtService: GetYoutubeService
  ) {
  }

  ngOnInit() {
    init_tooltip();
    this.loadData();
  }

  loadData() {
    this.getYtService.getScore(71, 'tollens')
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((value => {
        this.ytScores = value;
        this.latestScore = this.getLatestScore();
        this.previousScore = this.getPreviousScore();
        this.getPeriodScore();
      }));

    this.getYtService.getWarning(71, 'tollens')
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((value => {
        this.ytWarningProblems = value;
        this.latestWarningProblem = this.getLatestWarningProblem();
        this.previousWarningProblem = this.getPreviousWarningProblem();
        this.getPeriodWarningProblem();
      }));
  }

  getLatestScore(): ytScoreItem {
    const keys = Object.keys(this.ytScores);
    const len = keys.length;
    return this.ytScores[keys[len - 1]];
  }

  getPreviousScore(): ytScoreItem {
    const keys = Object.keys(this.ytScores);
    const len = keys.length;
    if (len > 1) {
      return this.ytScores[keys[len - 2]];
    }
    const previousData: ytScoreItem = {
      globalTechnicalYouTubeScore: 0,
      channelTechnicalYoutubeScore: 0,
      playlistTechnicalYoutubeScore: 0,
      videosTechnicalYoutubeScore: 0
    };
    return previousData;
  }

  getLatestWarningProblem(): ytWarningProblem {
    const keys = Object.keys(this.ytWarningProblems);
    const len = keys.length;
    return this.ytWarningProblems[keys[len - 1]];
  }

  getPreviousWarningProblem(): ytWarningProblem {
    const keys = Object.keys(this.ytWarningProblems);
    const len = keys.length;
    if (len > 1) {
      return this.ytWarningProblems[keys[len - 2]];
    }
    const previousData: ytWarningProblem = {
      date: '',
      nbrWarnings: 0,
      nbrWarningsCumulated: 0,
      nbrProblem: 0,
      categories: []
    };
    return previousData;
  }

  selectChartSource(index) {
    if (this.chartSourceList[index].value !== 'warnings') {
      this.chartTypeList[1].isActive = false;
      console.log(this.chartTypeList);
    }
    this.chartSource = this.chartSourceList[index];
  }

  setChartType(index: number) {
    if (this.chartTypeList[index].label === 'Cumulative' && this.chartSource.value !== 'warnings') {
      return;
    }
    this.chartTypeList[index].isActive = !this.chartTypeList[index].isActive;
    this.chartTypeList = this.chartTypeList.slice();
  }

  selectPeriod(index: number) {
    this.period = this.periodList[index];
    this.loadData();
  }

  getPeriodScore() {
    const date = new Date();
    date.setMonth(date.getMonth() - this.period.type);
    this.periodScore = [];
    Object.keys(this.ytScores).map((key => {
      const tmpDate = new Date(key);
      if (date <= tmpDate) {
        this.periodScore[key] = this.ytScores[key];
      }
    }));
  };

  getPeriodWarningProblem() {
    const date = new Date();
    let index = 0;
    date.setMonth(date.getMonth() - this.period.type);
    this.periodWarningProblem = [];
    this.ytWarningProblems.map((value => {
      const tmpDate = new Date(value.date);
      if (date <= tmpDate) {
        this.periodWarningProblem[index++] = value;
      }
    }));
    // this.periodHistory.push({
    //   type: this.period.type,
    //   data: this.periodWarningProblem
    // });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }
}
