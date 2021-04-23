import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {warningTable, warningTableItem} from '../../models/youtube_model';
import {DetailsFilterService} from '../../services/details-filter-service.service';
declare var $: any;

@Component({
  selector: 'app-yt-top-warnings',
  templateUrl: './yt-top-warnings.component.html',
  styleUrls: ['./yt-top-warnings.component.css']
})
export class YtTopWarningsComponent implements OnInit, AfterViewInit {

  @Input() warningData: warningTable;

  topWarnings: warningTableItem[];

  constructor(private detailsFilterService: DetailsFilterService) {
  }

  ngOnInit() {
    // init_tooltip();
    this.processData();
  }

  processData() {
    if (this.warningData === undefined || this.warningData.warningTableList === null || this.warningData.warningTableList === undefined) {
      return;
    }
    this.topWarnings = this.warningData.warningTableList.filter(value => {
      return value.new;
    });
    if (this.topWarnings.length < 6) {
      this.topWarnings = this.warningData.warningTableList;
    }
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
    this.topWarnings = this.topWarnings.slice(0, 6);
  }

  scrollToItem(item: warningTableItem) {
    const msg = item.warningHelpMsg;
    this.detailsFilterService.setFilter({
      category: '', labels: ['New', 'Existing', 'Dev', 'Con'],
      problem: null, filterByNew: true, warningHelpMsg: msg, show: true
    });
    setTimeout(() => {
      window.scrollTo({top: document.getElementById('Detail-yt').offsetTop - 100, behavior: 'smooth'});
    }, 500);
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

  ngAfterViewInit(): void {
    $('[data-toggle="tooltip"]').tooltip();
  }

}
