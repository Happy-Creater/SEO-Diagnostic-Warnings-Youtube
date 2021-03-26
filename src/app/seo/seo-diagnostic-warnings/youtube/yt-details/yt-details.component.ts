import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {labelItem, pagedItem, warningTable, warningTableItem, warningTrendItem} from '../models/youtube_model';
import {TranslateService} from '@ngx-translate/core';
import {YtUpdateNewService} from '../yt-update-new.service';
import {DetailsFilterService} from '../details-filter-service.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Component({
  selector: 'app-yt-details',
  templateUrl: './yt-details.component.html',
  styleUrls: ['./yt-details.component.css'],
})
export class YtDetailsComponent implements OnInit {

  @Input() warningData: warningTableItem[];
  @Output() updateMetric = new EventEmitter();

  showDetail = false;
  problemFilterName: string;
  selectedCategory: string;
  problemState: any;
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
  period = {type: 6, label: 'Last 6 months'};

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
  filterItems: pagedItem[] = [];
  unsubscribeAll$ = new Subject();
  modalItem: pagedItem;


  constructor(private translate: TranslateService,
              private detailsFilterService: DetailsFilterService) {
  }

  ngOnInit() {
    init_tooltip();
    this.processData();
    this.detailsFilterService.getFilter()
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(current => {
        this.initDetails();
        this.showDetail = current.show;
        this.selectedCategory = current.category;
        if (current.warningHelpMsg) {
          this.filterItems.map(value => {
            if (value.warningHelpMsg === current.warningHelpMsg) {
              value.setBold = true;
            }
          });
        }
        this.labels.map(item => {
          if (current.labels.indexOf(item.label) !== -1) {
            item.toggled = true;
          }
        });
        this.selectProblemState(current.problem);
        if (current.filterByNew) {
          this.sortData();
        }
      });
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
      this.totalItems[index].tableName = value.tableName;
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
      this.totalItems[index].percentage = {width: this.round(value.status, 0) + '%', background: bg};
      this.totalItems[index].smallGraphOption = this.buildSmallGraph(this.makeGraphData(value.trend, 'small'));
    });
    this.filterData();
  }

  filterData() {
    this.filterItems = this.totalItems;
    this.filterCategory();
    this.filterProblem();
    this.filterLabel();
    this.totalLength = this.filterItems.length;
    this.start = 0;
    this.end = this.pageSize;
    if (this.end > this.totalLength) {
      this.end = this.totalLength;
    }
    this.sortData();
    this.paginateData();
  }

  filterCategory() {
    this.filterItems = this.filterItems.filter(value => {
      if (this.selectedCategory === '' || !this.selectedCategory) {
        return true;
      }
      return value.category === this.selectedCategory;
    });
  }

  filterProblem() {
    this.filterItems = this.filterItems.filter(value => {
      if (this.problemState === 'up') {
        return value.evolution > 0;
      }
      if (this.problemState === 'down') {
        return value.evolution < 0;
      }
      if (this.problemState === 'stable') {
        return value.evolution === 0;
      }
      return true;
    });
  }

  filterLabel() {
    if (!this.labels[0].toggled && !this.labels[1].toggled && !this.labels[2].toggled && !this.labels[3].toggled) {
      return;
    }
    let ary1 = this.filterItems.filter((element) => {
      const label = this.labels[0];
      if (!label.toggled) {
        return false;
      }
      return element[label.prop] === label.value;
    });
    const ary2 = this.filterItems.filter((element) => {
      const label = this.labels[1];
      if (!label.toggled) {
        return false;
      }
      return element[label.prop] === label.value;
    });
    ary1 = ary1.concat(ary2.filter((item) => ary1.indexOf(item) < 0));
    let ary3: pagedItem[] = [];
    let ary4: pagedItem[] = [];
    if (this.labels[0].toggled || this.labels[1].toggled) {
      if (!this.labels[2].toggled && !this.labels[3].toggled) {
        ary3 = ary1;
      } else {
        ary3 = ary1.filter((element) => {
          const label = this.labels[2];
          if (!label.toggled) {
            return false;
          }
          return element[label.prop] === label.value;
        });
        ary4 = ary1.filter((element) => {
          const label = this.labels[3];
          if (!label.toggled) {
            return false;
          }
          return element[label.prop] === label.value;
        });
      }
    } else {
      ary3 = this.filterItems.filter((element) => {
        const label = this.labels[2];
        if (!label.toggled) {
          return false;
        }
        return element[label.prop] === label.value;
      });
      ary4 = this.filterItems.filter((element) => {
        const label = this.labels[3];
        if (!label.toggled) {
          return false;
        }
        return element[label.prop] === label.value;
      });
    }
    this.filterItems = ary3.concat(ary4.filter((item) => ary3.indexOf(item) < 0));
  }

  sortData() {
    this.filterItems = this.filterItems.sort((a, b) => {
      if (!a.new && b.new) {
        return 1;
      }
      if (a.severity < b.severity) {
        return 1;
      }
      if (a.severity > b.severity) {
        return -1;
      }
      if (a.warningNumber < b.warningNumber) {
        return 1;
      }
      if (a.warningNumber > b.warningNumber) {
        return -1;
      }
      return 0;
    });
  }

  sortWarningField() {
    if (this.warningUp !== null) {
      this.filterItems = this.filterItems.sort((a, b) => {
        const reverse = this.warningUp === true ? 1 : -1;
        return (a.warningName < b.warningName) ? 1 * reverse : -1 * reverse;
      });
    }
  }

  sortSeverityField() {
    if (this.severityUp !== null) {
      this.filterItems = this.filterItems.sort((a, b) => {
        const reverse = this.severityUp === true ? 1 : -1;
        return (a.severity < b.severity) ? 1 * reverse : -1 * reverse;
      });
    }
  }

  sortProblemField() {
    if (this.problemUp !== null) {
      this.filterItems = this.filterItems.sort((a, b) => {
        const reverse = this.problemUp === true ? 1 : -1;
        return (a.warningNumber < b.warningNumber) ? 1 * reverse : -1 * reverse;
      });
    }
  }

  sortStatusField() {
    if (this.statusUp !== null) {
      this.filterItems = this.filterItems.sort((a, b) => {
        const reverse = this.statusUp === true ? 1 : -1;
        return (a.status < b.status) ? 1 * reverse : -1 * reverse;
      });
    }
  }

  paginateData() {
    this.pagedItems = this.filterItems.slice(this.start, this.end);
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
      showDetails: false,
      tableName: ''
    };
  }

  makeGraphData(trend: warningTrendItem[], type: string) {

    if (type === 'small') {
      let data;
      data = [];
      trend.map((value, index) => {
        data[index] = value.value;
      });
      return data;
    } else if (type === 'modal') {
      let data;
      data = {categories: [], data: []};
      let index = 0;
      trend.map((value) => {
        const date = new Date(value.scanDate);
        let today;
        today = new Date();
        today.setMonth(today.getMonth() - this.period.type);
        if (date >= today || this.period.type === 0) {
          data.categories[index] = date.getDate() + ' ' + months[date.getMonth()];
          data.data[index++] = value.value;
        }
      });
      return data;
    }
  }

  selectCategory(category = '') {
    this.selectedCategory = category;
    this.filterData();
  }

  toggleLabel(i: number) {
    this.labels[i].toggled = !this.labels[i].toggled;
    this.filterData();
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
    if (count === labels.length) {
      return 'All labels';
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
    this.filterData();
  }

  hide() {
    this.showDetail = false;
  }

  sortWarning(sortField: string) {
    switch (sortField) {
      case 'warning':
        if (this.warningUp === null) {
          this.warningUp = true;
        }
        this.warningUp = !this.warningUp;
        this.severityUp = null;
        this.problemUp = null;
        this.statusUp = null;
        this.sortWarningField();
        break;
      case 'severity':
        if (this.severityUp === null) {
          this.severityUp = true;
        }
        this.severityUp = !this.severityUp;
        this.warningUp = null;
        this.problemUp = null;
        this.statusUp = null;
        this.sortSeverityField();
        break;
      case 'problem':
        if (this.problemUp === null) {
          this.problemUp = true;
        }
        this.problemUp = !this.problemUp;
        this.severityUp = null;
        this.warningUp = null;
        this.statusUp = null;
        this.sortProblemField();
        break;
      case 'status':
        if (this.statusUp === null) {
          this.statusUp = true;
        }
        this.statusUp = !this.statusUp;
        this.severityUp = null;
        this.problemUp = null;
        this.warningUp = null;
        this.sortStatusField();
        break;
    }
    this.start = 0;
    this.end = this.pageSize;
    if (this.end > this.totalLength) {
      this.end = this.totalLength;
    }
    this.initDetails();
    this.paginateData();
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
    this.initDetails();
    this.paginateData();
  }

  setPeriod(i: number) {
    this.period = this.periodList[i];
    const data = this.makeGraphData(this.modalItem.trend, 'modal');
    this.modelOption = this.buildBigGraph(0, data['categories'], data['data']);
  }

  prevPage() {
    if (0 <= this.start - this.pageSize) {
      this.start = this.start - this.pageSize;
      this.end = this.start + this.pageSize;
      this.initDetails();
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
      this.initDetails();
      this.paginateData();
    }
  }

  toggleConLabel(item, index) {
    item.typeCategorie = item.typeCategorie === 'dev' ? 'con' : 'dev';
    this.updateMetric.emit(item);
  }

  toggleRecomendation(item: pagedItem) {
    item.showRecomendation = !item.showRecomendation;
  }

  selectModelData(item: pagedItem) {
    this.modalItem = item;
    this.warningName = item.warningName;
    const data = this.makeGraphData(item.trend, 'modal');
    this.modelOption = this.buildBigGraph(0, data['categories'], data['data']);
  }

  round(value: number, digit: number) {
    value *= Math.pow(10, digit);
    value = Math.round(value);
    value /= Math.pow(10, digit);
    return value;
  }

  showItemDetails(item: pagedItem) {
    item.showDetails = !item.showDetails;
    // const index = this.totalItems.indexOf(item);
    // this.totalItems[index].showDetails = item.showDetails;
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
        tickPositions: [Math.ceil(categories.length / 5), Math.ceil(categories.length / 5) * 2,
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
        name: 'Problems',
        color: '#519ffb',
        data: data
      }],
      lang: {noData: 'No data to display.'},
      noData: {position: {align: 'center', verticalAlign: 'middle'}},
      exporting: {enabled: false},
    };
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

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }
}
