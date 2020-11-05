import { Component, OnInit, Input } from '@angular/core';
import { GlobalVariableService } from "app/_services/global_variable/global-variable.service";
import * as config from 'app/config/config';
import { HttpClientRequestService } from 'app/_services/http_client_request/http-client-request.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-download-popup',
  templateUrl: './download-popup.component.html',
  styleUrls: ['./download-popup.component.css'],
})
export class DownloadPopupComponent implements OnInit {

  //### DEFINE FILE SAVER FOR DOWNLOAD ###
  //*** INSTALL: npm install file-saver --save ***
  saveAs = require('file-saver');

  //########## SETTING INPUT ###########
  @Input()
  service: string = "";
  @Input()
  data: any;
  @Input()
  serial: string = "";
  @Input()
  filename: string = "";
  @Input()
  folder: string = "";
  @Input()
  method_generate: string = "";
  @Input()
  webIdAssign: any = "";
  @Input()
  webUrlAssign: any = "";

  //##### DEFINE ######
  isDisplayDownloadPopup: boolean = false; // STATUS TO SHOW ELEMENT
  displayDownloadStyle: string = "none"; // STATUS TO SHOW DOWNLOAD POPUP
  isEventClickOutsideWorking: boolean = false; // *SOLVED BUG OUTSIDE CLICK*
  isAlreadyLoading: boolean = false; // STATUS TO SET ALREADY TO DOWNLOAD FILE
  //##### VARIABLE FOR INTERVAL #####
  valueDotDotDot: string = ".";
  timerIntervalDotDotDot: any; // VARIABLE WAITING FOR DOWNLOAD
  timerIntervalCheckDownload: any; // VARIABLE CHECKING DOWNLOAD
  //##### FINAL URL FOR DOWNLOAD #####
  urlFileDownload: string = "#";
  //### TYPE METHOD DOWNLOAD IN WEBSERVICE RESOURCE ###
  methodTypeDownload: string = "";

  constructor(private global: GlobalVariableService, private httpClientRequest: HttpClientRequestService) { }

  ngOnInit() {
  }

  closeDownloadPopup() {
    if (this.isEventClickOutsideWorking) {
      this.isEventClickOutsideWorking = false;
      this.isDisplayDownloadPopup = false;
      this.setDownloadStyle("none");
      this.isAlreadyLoading = false;
      this.clearInterval();
    } else {
      this.isEventClickOutsideWorking = true;
    }
  }

  closeDownloadPopupAfterClickDownload() {
    this.isEventClickOutsideWorking = false;
    this.isDisplayDownloadPopup = false;
    this.setDownloadStyle("none");
    this.isAlreadyLoading = false;
    this.clearInterval();
  }

  public setDownloadStyle(displayDownloadStyle) {
    this.displayDownloadStyle = displayDownloadStyle;
  }

  public getDownloadStyle() {
    return this.displayDownloadStyle;
  }

  public show() {
    this.isDisplayDownloadPopup = true;
    this.setDownloadStyle("block");
  }

  public setisAlreadyLoading(status) {
    this.isAlreadyLoading = status;
  }

  public setService(service) {
    this.service = service;
  };

  public getService() {
    return this.service;
  };

  public setData(data) {
    this.data = JSON.stringify(data);
  };

  public getData() {
    return this.data;
  };

  public setSerial(serial) {
    this.serial = serial;
  };

  public getSerial() {
    return this.serial;
  };

  public setFilename(filename) {
    this.filename = filename;
  };

  public getFilename() {
    return this.filename;
  };

  public setFolder(folder) {
    this.folder = folder;
  };

  public getFolder() {
    return this.folder;
  };

  public setMethodGenerate(method_generate) {
    this.method_generate = method_generate;
  };

  public getMethodGenerate() {
    return this.method_generate;
  };

  public setMethodCheckTypeDownload(methodTypeDownload) {
    this.methodTypeDownload = methodTypeDownload;
  };

  public getMethodCheckTypeDownload() {
    return this.methodTypeDownload;
  };

  public setWebId(webIdAssign) {
    this.webIdAssign = webIdAssign;
  };

  public getWebId() {
    return this.webIdAssign;
  };

  public setWebUrl(webUrlAssign) {
    this.webUrlAssign = webUrlAssign;
  };

  public getWebUrl() {
    return this.webUrlAssign;
  };


  public download() {
    //### SHOW DOWNLOAD POPUP ###
    this.show();
    //### SHOW WAITING DOWNLOAD ... ###
    this.timerIntervalDotDotDot = setInterval(() => {
      this.waitingDotDotDot();
    }, 500);
    //### PREPARE VALUE ###
    let websiteItem = {
      account: this.global.account,
      webId: this.getWebId() == "" ? this.global.webId : this.getWebId(),
      url: this.getWebUrl() == "" ? this.global.url : this.getWebUrl()
    };

    //####################### 1st GENERATE FILE ##############################
    this.generateFileExcel(websiteItem.webId.toString(), websiteItem.account);
    //####################### 2nd INTERVAL PROGRESS FILE #####################
    this.checkGenerateFileExcel(websiteItem.webId.toString(), websiteItem.account);
  }

  public generateFileExcel(webId, account) {
    // this.global.websiteChange.subscribe(websiteItem => {

    // let params = new URLSearchParams();
    // //PERPARE PARAMETER 
    // params.append('method', this.getMethodGenerate());
    // params.append('webId', webId);
    // params.append('subDomain', account);
    // params.append('item', this.getData());

    const params = new HttpParams()
      .set('method', this.getMethodGenerate())
      .set('webId', webId)
      .set('subDomain', account)
      .set('item', this.getData());

    let body = params.toString();
    let urlGenerate = this.getService();
    this.callServiceGenerateExcel(urlGenerate, body);
    // });
  }

  public callServiceGenerateExcel(urlGenerate, body): void {
    this.httpClientRequest.post(urlGenerate, body).subscribe(response => {
      // console.log(response.status);
    }, error => {
      // console.log(error);
    });
  }

  public checkGenerateFileExcel(webId, account) {
    //PERPARE PARAMETER 
    let urlIntervalCheck = `${config.SERVICES.resource_download}/get_resource/service/`;
    //COMBINE FOR SET SERAIL
    this.setSerial(account + '/' + this.serial);
    let data = { "serial": this.getSerial(), "filename": this.getFilename(), "folder": this.getFolder() };

    // let params = new URLSearchParams();
    // params.append('method', this.methodTypeDownload == "" ? "check_excel" : this.methodTypeDownload)
    // params.append('webId', webId.toString());
    // params.append('subDomain', account);
    // params.append('item', JSON.stringify(data));

    const params = new HttpParams()
      .set('method', this.methodTypeDownload == "" ? "check_excel" : this.methodTypeDownload)
      .set('webId', webId.toString())
      .set('subDomain', account)
      .set('item', JSON.stringify(data));

    let body = params.toString();

    //INTERVAL FILE UNTIL FOUND FILE.complete
    this.timerIntervalCheckDownload = setInterval(() => {
      this.callServiceCheckGenerateExcel(urlIntervalCheck, body);
    }, 5000); // 5 SECOND...
  }

  public callServiceCheckGenerateExcel(urlIntervalCheck, body): void {
    this.httpClientRequest.post(urlIntervalCheck, body).subscribe(response => {
      if (response.isSuccess) {
        //FINAL URL FOR DOWNLOAD
        this.urlFileDownload = `${config.SERVICES.resource_download}/` + 'get_resource/get?'
          + 'folder=' + this.getFolder()
          + '&serial=' + this.getSerial()
          + '&filename=' + this.getFilename();
        //SET STATUS ALREADY FOR DOWNLOAD -> SHOW LINK URL  
        this.setisAlreadyLoading(true);
        //CLEAR INTERVAL
        this.clearInterval();
      }
    }, error => {
      console.log(error);
    });
  }

  public clearInterval() {
    //CLEAR INTERVAL CHECK FILE.complete
    clearInterval(this.timerIntervalCheckDownload);
    //CLEAR INTERVAL PROGRESS DOTDOTDOT
    clearInterval(this.timerIntervalDotDotDot);
  }

  public downloadFile(pathUrlFileDownload) {
    this.httpClientRequest.getBlob(pathUrlFileDownload).subscribe(response => {
      //EXPORT FILE TO BROWSER FOR DOWNLOAD
      this.saveAs.saveAs(response, this.getFilename());
      //Close popup after click download.
      this.closeDownloadPopupAfterClickDownload();
    }, error => {
      console.log(error);
    });
  }

  public generateSerial(stringKey) {
    var string_length = stringKey.length;
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var randomstring = '';
    for (var x = 0; x < string_length; x++) {
      var letterOrNumber = Math.floor(Math.random() * 2);
      if (letterOrNumber === 0) {
        var newNum = Math.floor(Math.random() * 9);
        randomstring += newNum;
      } else {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
      }
    }
    return randomstring;
  }

  public waitingDotDotDot() {
    if (this.valueDotDotDot == ".") {
      this.valueDotDotDot = "..";
    } else if (this.valueDotDotDot == "..") {
      this.valueDotDotDot = "...";
    } else if (this.valueDotDotDot == "...") {
      this.valueDotDotDot = ".";
    }
  }

}
