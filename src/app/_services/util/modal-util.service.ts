import { Injectable } from '@angular/core';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'ngx-modialog';
@Injectable()
export class ModalUtilService {

  constructor(public modal: Modal) { }
  
  info(msg: string) {
    return this.modal.alert()
      .size('sm')
      .showClose(true)
      .title('Information')
      .body(msg)
      .open()
      .then(res => res.result);
  }

  confirm(msg: string) {
    return this.modal.confirm()
      .size('sm')
      .showClose(true)
      .title('Confirmation')
      .body(msg)
      .open()
      .then(res => res.result);
  }
}
