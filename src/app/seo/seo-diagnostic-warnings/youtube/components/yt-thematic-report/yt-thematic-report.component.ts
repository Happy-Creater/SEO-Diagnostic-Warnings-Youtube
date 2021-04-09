import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ytScoreItem, ytWarningProblem} from '../../models/youtube_model';
declare var $: any;

@Component({
  selector: 'app-yt-thematic-report',
  templateUrl: './yt-thematic-report.component.html',
  styleUrls: ['./yt-thematic-report.component.css']
})
export class YtThematicReportComponent implements OnInit, AfterViewInit {

  @Input() latestScore: ytScoreItem;
  @Input() previousScore: ytScoreItem;
  @Input() latestWarningProblem: ytWarningProblem;
  @Input() previousWarningProblem: ytWarningProblem;
  @Input() warningProblem: ytWarningProblem[];

  // @Output() changePeriod = new EventEmitter<number>();

  detailWarningProblem: ytWarningProblem[][] = [];
  option: object;
  modalCategory: string;
  period = {type: 6, label: 'Last 6 months'};
  periodList = [
    {type: 3, label: 'Last 3 months'},
    {type: 6, label: 'Last 6 months'},
    {type: 12, label: 'Last 12 months'},
    {type: 0, label: 'Since beginning of the project'},
  ];
  categoryList = [
    {category: 'CHANNEL', period : 1},
    {category: 'VIDEOS', period: 1},
    {category: 'PLAYLISTS', period: 1}
  ];
  progress1Hovered = false;
  progress2Hovered = false;
  progress3Hovered = false;
  channelHovered = false;
  videoHovered = false;
  playlistHovered = false;
  channelProgress;
  videoProgress;
  playlistProgress;
  channelPercent;
  videoPercent;
  playlistPercent;


  constructor() {
  }

  ngOnInit() {
    // init_tooltip();
    this.processData();
  }

  processData() {
    let channelWarning = 0, videoWarning = 0, playlistWarning = 0;
    let sum = 0;
    this.warningProblem.map(value => {
      const date = new Date(value.date);
      this.categoryList.map((element, idx) => {
        const period = this.categoryList[idx].period;
        const today = new Date();
        today.setMonth(today.getMonth() - this.periodList[period].type);
        if (today <= date || this.periodList[period].type === 0) {
          if (typeof this.detailWarningProblem[idx] === 'undefined' || !this.detailWarningProblem) {
            this.detailWarningProblem[idx] = [];
          }
          this.detailWarningProblem[idx].push(value);
        }
      });
    });
    const category = this.latestWarningProblem.categories;
    category.map(value => {
      if (value.categoryName === 'Channel') {
        channelWarning = value.nbrWarning;
      } else if (value.categoryName === 'Video') {
        videoWarning = value.nbrWarning;
      } else if (value.categoryName === 'Playlist') {
        playlistWarning = value.nbrWarning;
      }
      sum += value.nbrWarning;
    });
    this.channelPercent = this.round((channelWarning * 100) / sum, 2) + '%';
    this.videoPercent = this.round((videoWarning * 100) / sum, 2) + '%';
    this.playlistPercent = this.round((playlistWarning * 100) / sum, 2) + '%';
    this.channelProgress = {width: this.channelPercent, background: this.getColor('channelTechnicalYoutubeScore')};
    this.videoProgress = {width: this.videoPercent, background: this.getColor('videosTechnicalYoutubeScore')};
    this.playlistProgress = {width: this.playlistPercent, background: this.getColor('playlistTechnicalYoutubeScore')};
  }

  getColor(category) {
    const score = this.latestScore[category];
    if (score >= 0 && score < 4) {
      return '#ff0d12';
    }
    if (score >= 4 && score < 6) {
      return 'orange';
    }
    if (score >= 6 && score < 8) {
      return 'rgb(239,239,33)';
    }
    if (score >= 8 && score <= 10) {
      return '#3dd674';
    }
  }

  round(value: number, digit: number) {
    value *= Math.pow(10, digit);
    value = Math.ceil(value);
    value /= Math.pow(10, digit);
    return value;
  }

  // setPeriod(index: number) {
  //   this.changePeriod.emit(index);
  // }

  changeGraphOption(childData) {
    this.option = childData.option;
    this.modalCategory = childData.name;
    this.categoryList.map(category => {
      if (category.category === this.modalCategory) {
        this.period = this.periodList[category.period];
      }
    });
  }

  changeGraphContent(childData) {
    if ( this.modalCategory === childData.name) {
      this.option = childData.option;
    }
  }

  setPeriod(i: number) {
    this.categoryList.map((category, idx) => {
      if (category.category === this.modalCategory) {
        category.period = i;
        this.period = this.periodList[i];
        this.detailWarningProblem[idx] = [];
        this.warningProblem.map(value => {
          const date = new Date(value.date);
            const period = this.categoryList[idx].period;
            const today = new Date();
            today.setMonth(today.getMonth() - this.periodList[period].type);
            if (today <= date || this.periodList[period].type === 0) {
              this.detailWarningProblem[idx].push(value);
            }
        });
        return;
      }
    });
  }

  ngAfterViewInit(): void {
    $('[data-toggle="tooltip"]').tooltip();
  }
}
