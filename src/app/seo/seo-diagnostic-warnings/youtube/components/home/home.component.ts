import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GetYoutubeService} from '../../services/get-youtube.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {chartTypeItem, pagedItem, warningTable, ytScore, ytScoreItem, ytWarningProblem} from '../../models/youtube_model';
import {YtUpdateNewService} from '../../services/yt-update-new.service';
import {GlobalVariableService} from '../../../../../_services/global_variable/global-variable.service';
import {Observable} from 'rxjs/Observable';
declare var $: any;

@Component({
  selector: 'app-youtube-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../css-new-seo-diagnostic-warning/style.css',
    '../../css-new-seo-diagnostic-warning/custom_warning.css',
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [GetYoutubeService, YtUpdateNewService]
})
export class YoutubeHomeComponent implements OnInit, AfterViewInit {

  webId;
  account;
  websiteUrl;
  globalListener;

  unsubscribeAll$ = new Subject();
  ytScores: ytScore[];
  periodScore: ytScore[];
  ytWarningProblems: ytWarningProblem[];
  periodWarningProblem: ytWarningProblem[];
  latestScore: ytScoreItem;
  previousScore: ytScoreItem;
  latestWarningProblem: ytWarningProblem;
  previousWarningProblem: ytWarningProblem;
  warningTable: warningTable;
  chartSource = {label: 'Number of warnings', value: 'warnings'};
  chartSourceList = [
    {label: 'Number of warnings', value: 'warnings'},
    {label: 'Number of problems', value: 'problems'},
    {label: 'Score', value: 'score'},
  ];
  chartType = {label: 'All labels', isActive: true};
  selectedChart = 'Evolution';
  chartTypeList = [
    {label: 'Evolution', isActive: true},
    {label: 'Cumulative', isActive: false},
    {label: 'Distribution', isActive: false}
  ];
  period = {type: 6, label: 'Last 6 months'};
  periodList = [
    {type: 3, label: 'Last 3 months'},
    {type: 6, label: 'Last 6 months'},
    {type: 12, label: 'Last 12 months'},
    {type: 0, label: 'Since beginning of the project'}
  ];

  constructor(
    private getYtService: GetYoutubeService,
    private updateMetricService: YtUpdateNewService,
    private global: GlobalVariableService
  ) {
  }

  ngOnInit() {
    this.globalListener = Observable.combineLatest(
      this.global.getWebsiteChange()
    ).subscribe(([websiteItem]) => {
      this.webId = websiteItem.webId;
      this.account = websiteItem.account;
      this.websiteUrl = websiteItem.url;
      // init_tooltip();
      this.webId = 71;
      this.account = 'tollens';
      this.loadData();
    });
  }

  ngAfterViewInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  loadData() {
    this.getYtService.getScore(this.webId, this.account)
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((value => {
        this.ytScores = value;
        this.latestScore = this.getLatestScore();
        this.previousScore = this.getPreviousScore();
        this.getPeriodScore();
      }));

    this.getYtService.getWarning(this.webId, this.account)
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((value => {
        this.ytWarningProblems = value;
        this.latestWarningProblem = this.getLatestWarningProblem();
        this.previousWarningProblem = this.getPreviousWarningProblem();
        this.getPeriodWarningProblem();
      }));

    this.getYtService.getWarningTable(this.webId, this.account)
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(value => {
        this.warningTable = value;
      });
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
    }
    this.chartSource = this.chartSourceList[index];
  }

  setChartType(index: number) {
    if (this.chartTypeList[index].label === 'Cumulative' && this.chartSource.value !== 'warnings') {
      return;
    }
    this.chartTypeList[index].isActive = !this.chartTypeList[index].isActive;
    if (this.chartTypeList[index].isActive) {
      this.selectedChart = this.chartTypeList[index].label;
    } else {
      this.chartTypeList.map((value, idx) => {
        if (value.isActive) {
          this.selectedChart = this.chartTypeList[idx].label;
          return;
        }
      });
    }
    this.chartTypeList = this.chartTypeList.slice();
  }

  selectPeriod(index: number) {
    this.period = this.periodList[index];
    this.getPeriodWarningProblem();
    this.getPeriodScore();
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
      if (date <= tmpDate || this.period.type === 0) {
        this.periodWarningProblem[index++] = value;
      }
    }));
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }

  updateMetric(arg: pagedItem) {
    const scanDate = arg.trend[0].scanDate;
    this.updateMetricService.updateMetric(this.webId, this.account, scanDate, arg.tableName).subscribe((value) => {
    });
  }

  chartTypeFormat(chartTypeList: chartTypeItem[]): string {
    let count = 0;
    let labelName: string;
    chartTypeList.map(value => {
      if (value.isActive === true) {
        labelName = value.label;
        count++;
      }
    });
    if (count === 0) {
      return 'Nothing selected';
    }
    if (count === chartTypeList.length) {
      return 'All labels';
    }
    if (count === 1) {
      return labelName;
    }
    return count + ' selected';
  }
}
