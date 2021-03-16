import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ytScoreItem, ytWarningProblem} from '../models/youtube_model';

@Component({
  selector: 'app-yt-thematic-report',
  templateUrl: './yt-thematic-report.component.html',
  styleUrls: ['./yt-thematic-report.component.css']
})
export class YtThematicReportComponent implements OnInit {

  @Input() latestScore: ytScoreItem;
  @Input() previousScore: ytScoreItem;
  @Input() latestWarningProblem: ytWarningProblem;
  @Input() previousWarningProblem: ytWarningProblem;
  @Input() period;
  @Input() warningProblem: ytWarningProblem[];

  @Output() changePeriod = new EventEmitter<number>();

  option: object;
  modalCategory: string;
  periodList = [
    {type: 3, label: 'Last 3 months'},
    {type: 6, label: 'Last 6 months'},
    {type: 12, label: 'Last 12 months'},
    {type: 0, label: 'Since beginning of the project'},
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
    this.processData();
  }

  processData() {
    let channelWarning = 0, videoWarning = 0, playlistWarning = 0;
    let sum = 0;
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
    this.channelProgress = {width: this.channelPercent};
    this.videoProgress = {width: this.videoPercent};
    this.playlistProgress = {width: this.playlistPercent};
  }

  round(value: number, digit: number) {
    value *= Math.pow(10, digit);
    value = Math.ceil(value);
    value /= Math.pow(10, digit);
    return value;
  }

  setPeriod(index: number) {
    this.changePeriod.emit(index);
  }

  changeGraphOption(childData) {
    this.option = childData.option;
    this.modalCategory = childData.name;
  }
}
