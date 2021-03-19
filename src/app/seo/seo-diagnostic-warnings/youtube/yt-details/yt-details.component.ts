import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {labelItem, pagedItem, warningTable, warningTableItem, warningTrendItem} from '../models/youtube_model';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-yt-details',
  templateUrl: './yt-details.component.html',
  styleUrls: ['./yt-details.component.css']
})
export class YtDetailsComponent implements OnInit {

  @Input() warningData: warningTableItem[];
  @Output() updateMetric = new EventEmitter();

  showDetail = true;
  problemFilterName: string;
  selectedCategory: string;
  problemState: any;
  category: string;
  categories = {
    'Channel': {image: 'channel.png', label: 'Channel'},
    'Video': {image: 'video.png', label: 'Videos'},
    'Playlist': {image: 'playlist.png', label: 'Playlists'},
  };
  labels: labelItem[] = [
    {prop: 'new', label: 'New', value: true, toggled: false},
    {prop: 'new', label: 'Existing', value: false, toggled: false},
    {prop: 'typeCategorie', label: 'Dev', value: 'dev', toggled: false},
    {prop: 'typeCategorie', label: 'Con', value: 'con', toggled: false}
  ];
  period = {type: 0, label: 'Since beginning of the project'};

  periodList = [
    {type: 3, label: 'Last 3 months'},
    {type: 6, label: 'Last 6 months'},
    {type: 12, label: 'Last 12 months'},
    {type: 0, label: 'Since beginning of the project'},
  ];
  pageSize = 5;
  start = 0;
  end = 5;
  totalLength: number;
  warningName: string;
  modelOption: Object;
  warningUp = null;
  severityUp = null;
  problemUp = null;
  statusUp = null;
  pagedItems: pagedItem[] = [];
  totalItems: pagedItem[] = [];


  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    init_tooltip();
    this.processData();
  }

  processData() {
    this.warningData.map((value, index) => {
      this.totalItems[index] = this.init_Item();
      this.totalItems[index].evolution = value.evolution;
      this.totalItems[index].warningNumber = value.warningNumber;
      this.totalItems[index].filename = value.filename;
      this.totalItems[index].trend = value.trend;
      this.totalItems[index].details = value.details;
      this.totalItems[index].category = value.category;
      this.totalItems[index].typeCategorie = value.typeCategorie;
      this.totalItems[index].recommendation = value.recommendation;
      this.totalItems[index].new = value.new;
      this.totalItems[index].status = value.status;
      this.totalItems[index].warningHelpMsg = value.warningHelpMsg;
      this.totalItems[index].severity = value.severity;
      this.totalItems[index].warningName = value.warningName;
      this.totalItems[index].showDetails = false;
      this.totalItems[index].showRecomendation = false;
      this.totalItems[index].setBold = false;
      let bg = '';
      if (value.status >= 0 && value.status < 25) {
        bg = '#FF0D12'; // red
      } else if (value.status >= 25 && value.status < 50) {
        bg = '#ffa500'; // orange
      } else if (value.status >= 50 && value.status < 75) {
        bg = '#ffff00'; // yellow
      } else if (value.status >= 75 && value.status <= 100) {
        bg = '#3DD674'; // green
      }
      this.totalItems[index].percentage = {width: this.round(value.status, 2) + '%', background: bg};
      this.totalItems[index].smallGraphOption = this.buildSmallGraph(this.makeGraphData(value.trend, 'small'));
    });
    this.totalLength = this.totalItems.length;
    this.paginateData();
  }

  paginateData() {
    this.initDetails();
    this.pagedItems = this.totalItems.slice(this.start, this.end);
  }

  initDetails() {
    this.totalItems.map(value => {
      value.showDetails = false;
      value.setBold = false;
      value.showRecomendation = false;
    });
  }

  init_Item(): pagedItem {
    return {
      severity: 0,
      warningNumber: 0,
      warningName: '',
      warningHelpMsg: '',
      recommendation: '',
      typeCategorie: '',
      status: 0,
      category: '',
      evolution: 0,
      new: false,
      trend: [],
      details: [],
      setBold: false,
      smallGraphOption: null,
      showRecomendation: false,
      percentage: '',
      filename: '',
      showDetails: false
    };
  }

  makeGraphData(trend: warningTrendItem[], type: string) {

    if (type === 'small') {
      let data = [];
      trend.map((value, index) => {
        data[index] = value.value;
      });
      return data;
    }
  }

  selectCategory(category = '') {
    this.selectedCategory = category;
  }

  toggleLabel(i: number) {
    this.labels[i].toggled = !this.labels[i].toggled;
  }

  labelFormat(labels: labelItem[]): string {
    let count = 0;
    let labelName: string;
    labels.map(value => {
      if (value.toggled === true) {
        labelName = value.label;
        count++;
      }
    });
    if (count === 0) {
      return 'Nothing selected';
    }
    if (count === 1) {
      return labelName;
    }
    return count + ' selected';
  }

  selectProblemState(state: string) {
    this.problemState = state;
    if (!state) {
      this.problemFilterName = this.translate.instant('All problems');
    } else if (state === 'down') {
      this.problemFilterName = this.translate.instant('Decreasing');
    } else if (state === 'up') {
      this.problemFilterName = this.translate.instant('Increasing');
    } else if (state === 'stable') {
      this.problemFilterName = this.translate.instant('Stable');
    }
  }

  hide() {
    this.showDetail = false;
  }

  sortWarning(severity: string) {

  }

  setPageSize(pageSize: number) {
    if (pageSize === this.pageSize) {
      return;
    }
    this.start = 0;
    this.end = this.start + pageSize;
    // tslint:disable-next-line:curly
    if (this.end > this.totalLength) {
      this.end = this.totalLength;
    }
    this.pageSize = pageSize;
    this.paginateData();
  }

  setPeriod(i: number) {
    this.period = this.periodList[i];
  }

  prevPage() {
    if (0 <= this.start - this.pageSize) {
      this.start = this.start - this.pageSize;
      this.end = this.start + this.pageSize;
      this.paginateData();
    }
  }

  nextPage() {
    if (this.totalLength > this.start + this.pageSize) {
      this.start = this.start + this.pageSize;
      this.end = this.start + this.pageSize;
      // tslint:disable-next-line:curly
      if (this.end > this.totalLength) {
        this.end = this.totalLength;
      }
      this.paginateData();
    }
  }

  toggleConLabel(item, index) {
    // let global_index = this.warningData.indexOf(item)
    // this.pagedItems[index].typeLabel = item.typeLabel == 'con' ? 'dev' : 'con'
    // this.warningData[global_index] = this.pagedItems[index]
  }

  toggleRecomendation(item: pagedItem) {
    item.showRecomendation = !item.showRecomendation;
  }

  selectModelData(item: pagedItem) {

  }

  round(value: number, digit: number) {
    value *= Math.pow(10, digit);
    value = Math.ceil(value);
    value /= Math.pow(10, digit);
    return value;
  }

  showItemDetails(item: pagedItem) {
    item.showDetails = !item.showDetails;
    // const index = this.totalItems.indexOf(item);
    // this.totalItems[index].showDetails = item.showDetails;
  }

  buildSmallGraph(data) {
    return {
      chart: {
        type: 'area',
        zoomType: 'x',
        height: 50,
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
      noData: {position: {align: 'center', verticalAlign: 'middle'}}
    };
  }
}
