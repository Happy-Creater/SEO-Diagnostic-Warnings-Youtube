import { DialogRef } from 'ngx-modialog';
import { Component, Input, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { Modal, BSModalContext, OneButtonPreset } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory } from 'ngx-modialog';
import { OfflineComparisonPopupComponent } from './popup/offline-comparison-popup.component'
import { DownloadPopupComponent } from "app/_modules/download-popup/download-popup.component";
import * as config from 'app/config/config';
import { LoadingDelayDirective } from 'app/_modules/loading-delay/loading-delay.directive';
import { OfflineComparisonService } from './offline-comparison.service';
import { v1 as uuidv1 } from 'uuid';
@Component({
  selector: 'offline_comparison',
  templateUrl: './offline-comparison.component.html',
  styleUrls: ['./offline-comparison.component.css']
})
export class OfflineComparisonComponent {

  @Input() primaryItem = [];
  @Input() secondaryItem = [];
  @Input() primaryBold = true;
  @Input() upperKeywordResultsChunks = [];
  @Input() header = "Offline comparison";
  @Input() showable = true;
  @Input() showdownload = false;
  @Input() defineFreqName = "found";
  @Input() wpOptId = -1;
  @Output() closetab = new EventEmitter();
  @ViewChild('downloadPopup')
  downloadPopup: DownloadPopupComponent;
  @ViewChild(LoadingDelayDirective)
  boxloading: LoadingDelayDirective;
  setting = { delay: 0, mask: { left: "0.5px", height: '93%' }, loading: { display: 'none' } }
  constructor(public modal: Modal,
    public offLineCompSerivce: OfflineComparisonService) {
  }
  backgroundImage = {
    source: '/assets/images/bg-over-old-2.png',
    x: 0,
    y: 0,
    width: 240,
    height: 140
  };
  plotBands = [
    { from: 0, to: 2.99, color: '#FF464A' },
    { from: 3, to: 6.99, color: '#FFB652' },
    { from: 7, to: 10, color: '#3CD574' }
  ];
  offlineComparisonTextDetail = "";
  newComparisonSemanticKeywords;
  totalMissingWordsPercent = 0;
  primaryMissingWordsPercent = 0;
  secondaryMissingWordsPercent = 0;
  semanticEnrichmentPercent = 0;
  isHideOfflineComparisonDetails = true;
  validateisincontent = false;
  newComparisonSemanticKeywordsDownload = [];
  categoriesOne = [];
  categoriesTwo = [];
  categoriesThree = [];
  checkFinished = 0;
  disabledBtn = false;
  timeDelay = 1000;
  progress = 0;
  contentGaugeValue = -1;
  keyOfProgress = "";
  request;
  printdata;
  setTimeOutProgress;
  ngOnChanges() {
    this.isHideOfflineComparisonDetails = true;
    this.offlineComparisonTextDetail = "";
  }
  onClickAnalyzeOfflineComparison() {
    this.boxloading.show(this.setting);
    let countCat1And2 = 0;
    this.disabledBtn = true;
    this.progress = 0;
    this.isHideOfflineComparisonDetails = true;
    let keywords = [];
    this.categoriesOne = [];
    this.categoriesTwo = [];
    this.categoriesThree = [];
    this.contentGaugeValue = -1;
    this.primaryItem.forEach(element => {
      keywords.push(element.keyword);
    });
    this.secondaryItem.forEach(element => {
      keywords.push(element.keyword);
    });
    this.upperKeywordResultsChunks.forEach((resultsChunk, resultsChunkIndex) => {
      resultsChunk.forEach((item, index) => {
        keywords.push(item.keyword);
      });
    });

    this.disabledBtn = true;
    let newComparisonSemanticKeywordstemp = [];
    let notCat1 = [];
    if (this.offlineComparisonTextDetail && this.offlineComparisonTextDetail.trim().length > 0) {
      let totalKwFillter = [];
      this.keyOfProgress = uuidv1();
      setTimeout(() => {
        this.pushProgress();
      }, 1000);
      this.request = this.offLineCompSerivce.analyze(this.offlineComparisonTextDetail.trim(), keywords, this.keyOfProgress).subscribe(res => {
        this.printdata = res.optimizedTextHtml;
        if (res.status === 'ok') {
          let clientFreqKeyword = res.clientFreqKeyword;
          if (this.upperKeywordResultsChunks.length != 0) {
            this.newComparisonSemanticKeywords = [];
            let initial = 0;
            let textBox = 0;
            this.upperKeywordResultsChunks.forEach((resultsChunk, resultsChunkIndex) => {
              resultsChunk.forEach((item, index) => {
                let matched = null;
                for (let i = 0; i < clientFreqKeyword.length; i++) {
                  if (item.keyword.toLowerCase() === clientFreqKeyword[i].keyword.toLowerCase()) {
                    matched = clientFreqKeyword[i].freq;
                    break;
                  }
                }
                let matches = !matched ? 0 : matched;

                initial += +item.final_freq;
                textBox += +(item.final_freq < matches ? item.final_freq : matches);
                if (+item.final_freq - matches < 0) {
                  matches = item.final_freq;
                }

                if (matched != null && this.isGreen(item.final_freq, (item.final_freq - matches))) {
                  countCat1And2 += 1;
                  this.categoriesOne.push({
                    keyword: item.keyword,
                    insideKeywords: item.insideKeywords,
                    found: (item.final_freq - matches),
                    oldFound: item.final_freq,
                    isGreen: false,
                    img_plus_src: './assets/images/icon-add.png'
                  });
                } else {
                  notCat1.push({
                    keyword: item.keyword,
                    insideKeywords: item.insideKeywords,
                    found: (item.final_freq - matches),
                    oldFound: item.final_freq,
                    isGreen: false,
                    img_plus_src: './assets/images/icon-add.png'
                  });
                }
                if ((item.weight * 10) % 1 === 0) {
                  totalKwFillter.push(item.keyword);
                }
              });
            });
            notCat1.forEach(item => {
              if (countCat1And2 < 50) {
                countCat1And2 += 1;
                this.categoriesTwo.push({
                  keyword: item.keyword,
                  insideKeywords: item.insideKeywords,
                  found: (item.found),
                  oldFound: item.oldFound,
                  isGreen: false,
                  img_plus_src: './assets/images/icon-add.png'
                });
              } else {
                this.categoriesThree.push({
                  keyword: item.keyword,
                  insideKeywords: item.insideKeywords,
                  found: (item.found),
                  oldFound: item.oldFound,
                  isGreen: false,
                  img_plus_src: './assets/images/icon-add.png'
                });
              }
            });

            let greenWordSize = res.setGreenWords[0] === "Empty green" ? [] : res.setGreenWords;
            this.offLineCompSerivce.calculateContentScore(this.wpOptId, totalKwFillter, greenWordSize).subscribe(res => {
              this.contentGaugeValue = res.json();
            });
            this.totalMissingWordsPercent = +((1 - (textBox === 0 && initial === 0 ? 1 : textBox / initial)) * 100).toFixed(2);
            this.semanticEnrichmentPercent = (100 - this.totalMissingWordsPercent);
          } else {
            this.newComparisonSemanticKeywords = { primary: [], secondary: [] };
            let initial = { total: 0, primary: 0, secondary: 0 };
            let textBox = { total: 0, primary: 0, secondary: 0 };
            for (let objInfo of this.primaryItem) {
              let matched = null;
              for (let i = 0; i < clientFreqKeyword.length; i++) {
                if (objInfo['keyword'].toLowerCase() === clientFreqKeyword[i].keyword.toLowerCase()) {
                  matched = clientFreqKeyword[i].freq;
                  break;
                }
              }
              let matches = !matched ? 0 : matched;
              initial.primary += +objInfo[this.defineFreqName];
              textBox.primary += +(objInfo[this.defineFreqName] < matches ? objInfo[this.defineFreqName] : matches);
              if (matched != null) {
                if (+objInfo[this.defineFreqName] - matches < 0) {
                  matches = objInfo[this.defineFreqName];
                }
              }
              if (matched != null && this.isGreen(objInfo[this.defineFreqName], (objInfo[this.defineFreqName] - matches))) {
                countCat1And2 += 1;
                this.categoriesOne.push({ keyword: objInfo['keyword'], found: (objInfo[this.defineFreqName] - matches), oldFound: objInfo[this.defineFreqName] });
              } else {
                notCat1.push({ keyword: objInfo['keyword'], found: (objInfo[this.defineFreqName] - matches), oldFound: objInfo[this.defineFreqName] });
              }
            }
            notCat1.forEach(ele => {
              if (countCat1And2 < 50) {
                countCat1And2 += 1;
                this.categoriesTwo.push({ keyword: ele.keyword, found: ele.found, oldFound: ele.oldFound });
              } else {
                this.categoriesThree.push({ keyword: ele.keyword, found: ele.found, oldFound: ele.oldFound });
              }
            });
            initial.total = (initial.primary + initial.secondary);
            textBox.total = (textBox.primary + textBox.secondary);
            this.totalMissingWordsPercent = +((1 - (textBox.total === 0 && initial.total === 0 ? 1 : textBox.total / initial.total)) * 100).toFixed(2);
            this.semanticEnrichmentPercent = (100 - this.totalMissingWordsPercent);
            this.newComparisonSemanticKeywordsDownload = this.fillUpperKwResultsIntoChunks(newComparisonSemanticKeywordstemp);
          }
          this.waitToHide();
        } else {
          this.openModalAlert('Unable to analyzing your text. Please contact <a href="mailto:support@pixalione.com">support@pixalione.com</a>.', 'sm');
          this.finishedTheService();
        }
      }, error => {
        this.openModalAlert('Unable to analyzing your text. Please contact <a href="mailto:support@pixalione.com">support@pixalione.com</a>.', 'sm');
        this.finishedTheService();
      });
    } else {
      this.boxloading.hide();
      this.finishedTheService();
      this.isHideOfflineComparisonDetails = true;
      this.openModalAlert('Please input text in the Textarea.', 'sm');
    }
  }
  scrollToBottom(target) {
    setTimeout(() => {
      let el = document.getElementById(target);
      el.scrollIntoView();
    }, 100);
  }

  openModalAlert(bodyText: string, size: string): Promise<DialogRef<OneButtonPreset>> {
    return this.modal.alert()
      .size(size == 'sm' ? 'sm' : 'lg')
      .showClose(true)
      .title('Information')
      .body(bodyText)
      .open();
  }

  openpopup() {
    this.modal.open(OfflineComparisonPopupComponent, overlayConfigFactory({ printdata: this.printdata }, BSModalContext))
      .then(data => data.result);
  }

  onClickDownLoadOfflineComparison() {
    const folder = 'webpage_optimization';
    const serial = this.downloadPopup.generateSerial('offline_comparison_excel');
    const filename = 'offline_comparison.xlsx';
    const service = `${config.SERVICES.seo_opt_landing_pages}/api/download_excel`;
    // const service = `http://localhost:8080/New2WebServiceSeoOptimizeLandingPages/api/download_excel`;
    const item = {
      'totalMissing': this.totalMissingWordsPercent + "%",
      'categoriesOne': this.categoriesOne,
      'categoriesTwo': this.categoriesTwo,
      'categoriesThree': this.categoriesThree,
      'filename': filename,
      'serial': serial,
      'folder': folder
    };
    this.openDownloadInterface('gen_excel_offline_comparison_v2', item, folder, serial, filename, service);
  }
  openDownloadInterface(method, item, folder, serial, filename, service) {
    this.downloadPopup.setMethodGenerate(method);
    this.downloadPopup.setData(item);
    this.downloadPopup.setFolder(folder);
    this.downloadPopup.setSerial(serial);
    this.downloadPopup.setFilename(filename);
    this.downloadPopup.setService(service);
    this.downloadPopup.download();
  }
  fillUpperKwResultsIntoChunks(results): any[] {
    let partitions = [], chunkSize = 4;
    for (let i = 0; i < results.length; i += chunkSize) {
      let end = Math.min(results.length, i + chunkSize);
      partitions.push(results.slice(i, end));
    }
    return partitions;
  }
  closeBoxOfflineComparison() {
    this.offlineComparisonTextDetail = '';
    this.closetab.emit();
  }

  isGreen(oldFound, newFound) {
    if (oldFound === newFound) {
      return false;
    } else if (oldFound % 2 === 0 && (oldFound / 2) >= newFound) {
      return true;
    } else if ((oldFound - 1) > newFound && oldFound != 1) {
      return true;
    }
    else if (newFound === 0) {
      return true;
    } else {
      return false;
    }
  }

  colorBg(indexs) {
    let index = indexs + 1;
    if (index != 0 && (Math.ceil(index / 4)) % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  waitToHide() {
    if (this.checkFinished != 0) {
      setTimeout(() => {
        this.waitToHide();
      }, 200);
    } else {
      try { clearTimeout(this.setTimeOutProgress); } catch (e) { }
      setTimeout(() => {
        this.progress = 100;
        setTimeout(() => {
          this.finishedTheService();
          this.progress = 0;
        }, 1000);
      }, 1000);
    }
  }

  reset() {
    this.offlineComparisonTextDetail = '';
    this.isHideOfflineComparisonDetails = true;
  }
  pushProgress() {
    if (this.disabledBtn) {
      this.setTimeOutProgress = setTimeout(() => {
        this.offLineCompSerivce.getProgress(this.keyOfProgress, false).subscribe(res => {
          if (this.progress < 100) { // check this.progress for the case that getProgress got result after analyze is finished.
            const progress = res.json().progress === undefined ? 0 : res.json().progress;
            if (progress < 100) {
              this.pushProgress();
            }
            this.progress = +((progress / 100) * 90).toFixed(0);
          }
        });
      }, 1000);
    } else {
      this.offLineCompSerivce.getProgress(this.keyOfProgress, true).subscribe(res => {
        this.progress = 0;
      });
    }
  }
  finishedTheService() {
    this.disabledBtn = false;
    this.progress = 0;
    this.isHideOfflineComparisonDetails = false;
    // this.scrollToBottom('OfflineComparisondetail');
    this.boxloading.hide();
  }

  cancelRequest() {
    this.request.unsubscribe();
    this.disabledBtn = false;
    this.progress = 0;
    this.boxloading.hide();
  }
}
