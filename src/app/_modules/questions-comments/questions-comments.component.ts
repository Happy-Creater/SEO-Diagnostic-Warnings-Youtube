import { Component, Input, OnChanges, NgZone } from '@angular/core';
import { AuthenticationService } from 'app/_services/authentication/authentication.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import * as config from 'app/config/config';
import { GlobalVariableService } from 'app/_services/global_variable/global-variable.service';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

@Component({
  selector: 'questions-comments',
  templateUrl: './questions-comments.component.html',
  styleUrls: ['./questions-comments.component.css']
})
export class QuestionsCommentsComponent implements OnChanges {

  @Input()
  openEvent;

  @Input()
  moduleString;

  questionPopupStyle = "none";
  questionPopupClass = "modal fade help";
  questionPopupBackdrop = "";

  fileInput;
  fileName = '';
  message = '';
  loading = false;
  showRemoveFileBtn = false;
  checkStatusPopup = false;

  constructor(private auth: AuthenticationService,
    private globalVariable: GlobalVariableService,
    private http: Http,
    private modal: Modal,
    private ngZone: NgZone) {
    window['appQuestionsCommentsComponentRef'] = { component: this, zone: ngZone };
  }

  ngOnChanges(changes: any): void {
    if (this.openEvent) {
      this.checkStatusPopup = false;
      this.showQuestionPopup();
    }
  }

  hideQuestionPopup() {
    if (this.checkStatusPopup) {
      this.questionPopupStyle = "none";
      this.questionPopupClass = "modal fade help";
      this.questionPopupBackdrop = "";
      this.checkStatusPopup = false;
    } else {
      this.checkStatusPopup = true;
    }
  }

  showQuestionPopup() {
    this.questionPopupStyle = "block";
    this.questionPopupClass = "modal fade help in";
    this.questionPopupBackdrop = "modal-backdrop in";
  }

  fileEvent(fileInput: Event) {
    this.fileInput = fileInput;
    this.fileName = fileInput.target['files'][0].name;
    this.showRemoveFileBtn = true;
    setTimeout(() => {
      document.getElementById('removeFileQuestionsCommentsBtn').style.height = document.getElementById('fileQuestionsCommentsUploadBtn').offsetHeight + 'px';
    }, 100);
  }

  removeFile() {
    this.checkStatusPopup = false;
    document.getElementById('fileQuestionsCommentsUpload')['value'] = '';
    this.fileName = '';
    this.showRemoveFileBtn = false;
  }

  sendQuestionsComments() {
    this.loading = true;
    const formData: FormData = new FormData();
    try {
      const fileList: FileList = this.fileInput.target['files'];
      if (fileList.length > 0) {
        const file: File = fileList[0];
        formData.append('file', file, file.name);
      }
    } catch (e) { }
    if (this.message.trim() == '') {
      this.loading = false;
      this.modal.alert()
        .title('Information')
        .body('Please enter your question(s) or comment(s).')
        .okBtn(null)
        .okBtnClass('hidden')
        .addButton('btn btn-primary', 'OK', function (dialogFooter) {
          dialogFooter.dialog.dismiss();
          window['appQuestionsCommentsComponentRef'].component.checkStatusPopup = true;
        })
        .open()
        .then(d => this.checkStatusPopup = false);
      return;
    }
    const params = new URLSearchParams();
    params.append('account', this.globalVariable.getActiveAccount());
    params.append('webId', this.globalVariable.webId.toString());
    params.append('username', this.globalVariable.getUsername());
    if (this.moduleString) {
      params.append('module', this.moduleString);
    }
    params.append('message', this.message);
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${this.auth.getAccessToken()}`);
    let options = new RequestOptions({ headers: headers });
    this.http.post(`${config.SERVICES.manage_questions_comments}/services/post-questions-comments?${params}`, formData, options)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
        data => {
          this.checkStatusPopup = true;
          this.hideQuestionPopup();
          this.modal.alert()
            .title('Information')
            .body('Thank you for your question(s) / comment(s). Our team will contact you soon.')
            .open();
          this.loading = false;
        },
        error => {
          console.log(error);
          this.loading = false;
        }
      )
  }

}
