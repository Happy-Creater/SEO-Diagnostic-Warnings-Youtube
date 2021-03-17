import {Component, Input, OnInit, Output} from '@angular/core';
import {warningTable, warningTableItem} from '../models/youtube_model';

@Component({
  selector: 'app-yt-top-warnings',
  templateUrl: './yt-top-warnings.component.html',
  styleUrls: ['./yt-top-warnings.component.css']
})
export class YtTopWarningsComponent implements OnInit {

  @Input() warningData: warningTable;

  topWarnings: warningTableItem[];

  constructor() {
  }

  ngOnInit() {
    this.processData();
  }

  processData() {
    this.topWarnings = this.warningData.warningTableList.filter(value => {
      return value.new;
    });
    this.topWarnings.sort((a, b) => {
      if (a.severity < b.severity) {
        return 1;
      } else if (a.severity > b.severity) {
        return -1;
      } else if (a.warningNumber < b.warningNumber) {
        return 1;
      } else if (a.warningNumber > b.warningNumber) {
        return -1;
      }
      return 0;
    });
    this.topWarnings = this.topWarnings.slice(0, 5);
  }

  scrollToItem(item: warningTableItem) {
    console.log(item);
  }

}
