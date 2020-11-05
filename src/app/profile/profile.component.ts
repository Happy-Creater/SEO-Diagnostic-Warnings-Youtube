import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalVariableService } from "app/_services/global_variable/global-variable.service";
import { ProfileService } from "app/profile/profile.service";
import { InitializeService } from "app/_services/initialize/initialize.service";
import { ActivatedRoute } from '@angular/router';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { BoxLoadingDirective } from "app/_modules/box-loading/directive/box-loading.directive";
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import * as config from 'app/config/config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [ProfileService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    public modal: Modal,
    private globalVariable: GlobalVariableService,
    private init: InitializeService,
    private service: ProfileService,
    private http: Http,
    private activeRoute: ActivatedRoute
  ) { }

  @ViewChild('box1')
  boxloading: BoxLoadingDirective;

  @ViewChild('box2')
  boxloading2: BoxLoadingDirective;

  PASSWORD_MINIMUM: number = 6;

  email = ''
  tag_name = '';
  websiteList: Object = {};
  accountList: Array<Object> = [];
  allWebsite: Array<Object> = [];
  file;
  fileName = '';

  old_password = '';
  new_password = '';
  confirm_password = '';

  ngOnInit() {
    this.init.initUserWebsiteByParam(null, this.activeRoute);
    /**
     * get websites
     */
    this.init.websiteUpdate.subscribe(obj => {
      if (obj == undefined) return;
      this.websiteList = obj.data;
      let tmpAccounts = [];
      for (let entry in this.websiteList) {
        tmpAccounts.push(entry);
      }
      tmpAccounts.sort();
      this.accountList = tmpAccounts;
      this.accountList.forEach((element, index) => {
        let str = String(element);
        this.websiteList[str].forEach(element => {
          let obj = {
            id: element.webId,
            url: element.url,
            account: str
          }
          this.allWebsite.push(obj);
        });
      });
    });

    /**
     * get Email and Tag name.
     */
    this.email = this.globalVariable.getUsername();
    let item = {
      id: this.globalVariable.getUserId()
    }
    this.service.getUserDetail(item).subscribe(response => {
      if (response.status == 'ok') {
        this.tag_name = response.tag_name;
      }
    });
  }

  ngAfterViewInit() {
    this.boxloading.boxWindow.style.top = '45px';
    this.boxloading2.boxWindow.style.top = '24px';
  }

  fileEvent(fileInput) {
    try {
      this.file = fileInput;
      this.fileName = fileInput.target.files[0].name;
    } catch (e) {
      this.file = undefined;
      this.fileName = '';
    }
  }

  infoAlertTypeInvalide() {
    this.modal.alert()
      .size('sm')
      .showClose(true)
      .title('Information ')
      .body(`Invalid file format.`)
      .open();
    return false;
  }

  getExtension(path_file) {
    var parts = path_file.split('.');
    return parts[parts.length - 1];
  }

  isImage(path_file) {
    var ext = this.getExtension(path_file);
    switch (ext.toLowerCase()) {
      case 'jpg':
        return true;
      case 'jpeg':
        return true;
      case 'png':
        return true;
      default:
        return this.infoAlertTypeInvalide();
    }
  }

  onSaveTagNameAndLogo() {
    let item = {
      id: this.globalVariable.getUserId(),
      tag_name: this.tag_name,
    }

    let fileList: FileList;
    try {
      fileList = this.file.target.files;
    } catch (e) {
      fileList = null;
    }

    if (fileList != null) {
      if (this.isImage(this.fileName)) {
        this.boxloading.show();
        if (fileList.length > 0) {
          let file: File = fileList[0];
          let formData: FormData = new FormData();
          formData.append('file', file, file.name);
          formData.append('subDomain', this.globalVariable.getActiveAccount());
          formData.append('item', JSON.stringify(item));
          let headers = new Headers();
          this.http.post(`${config.SERVICES.manage_user}/setting/profile?`, formData).subscribe(response => {
            this.boxloading.hide();
            let result = JSON.parse(JSON.parse(JSON.stringify(response))._body);
            this.alertMsgDialog(result.msg);
            let obj = {
              tag_name: this.tag_name,
              haveImage: true
            };
            this.init.onSaveProfile.next(obj);
          },
            error => {
              this.boxloading.hide();
              this.alertMsgDialog(`Upload failed. Please try again later.`);
              console.log("ERROR => " + error)
            }
          )
        }
      }
    } else {
      this.boxloading.show();
      let formData: FormData = new FormData();
      formData.append('subDomain', this.globalVariable.getActiveAccount());
      formData.append('item', JSON.stringify(item));
      let headers = new Headers();
      this.http.post(`${config.SERVICES.manage_user}/setting/profile?`, formData).subscribe(response => {
        this.boxloading.hide();
        let result = JSON.parse(JSON.parse(JSON.stringify(response))._body);
        this.alertMsgDialog(result.msg);
        let obj = {
          tag_name: this.tag_name,
          haveImage: false
        };
        this.init.onSaveProfile.next(obj);
      },
        error => console.log("ERROR => " + error)
      )
    }
  }

  onResetTagNameAndLogo() {
    this.file = undefined;
    this.fileName = '';
  }

  onChangePassword() {
    this.boxloading2.show();
    let msgError = 'Password invalid.';
    let isCorrect = true;
    if (this.new_password.length < this.PASSWORD_MINIMUM) {
      msgError += '<br>Your new password must contain at least ' + this.PASSWORD_MINIMUM + ' characters.';
      isCorrect = false;
    }
    if (this.new_password != this.confirm_password) {
      msgError += '<br>The password entered as confirmation does not match the original one. Please confirm your password correctly.';
      isCorrect = false;
    }

    if (isCorrect) {
      let item = {
        id: this.globalVariable.getUserId(),
        old_password: this.old_password,
        new_password: this.new_password
      }
      this.service.changePassword(item).subscribe(response => {
        this.boxloading2.hide();
        this.alertMsgDialog(response.msg);
      });
    } else {
      this.boxloading2.hide();
      this.alertMsgDialogMedium(msgError);
    }
  }

  onResetPassword() {
    this.old_password = '';
    this.new_password = '';
    this.confirm_password = '';
  }

  alertMsgDialog(errorMessage) {
    this.modal.alert()
      .size('sm')
      .showClose(true)
      .title('Information')
      .body(errorMessage)
      .open();

  }

  alertMsgDialogMedium(errorMessage) {
    this.modal.alert()
      .dialogClass("modal-dialog my-custom-dialog")
      .showClose(true)
      .title('Information')
      .body(errorMessage)
      .open();
  }

}