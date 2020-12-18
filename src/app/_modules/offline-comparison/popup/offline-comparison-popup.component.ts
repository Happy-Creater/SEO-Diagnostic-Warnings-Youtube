import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalComponent, DialogRef } from "ngx-modialog";
import { DomSanitizer } from '@angular/platform-browser';
import { ModalUtilService } from 'app/_services/util/modal-util.service';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
@Component({
    selector: 'Offline_comparisonPopup',
    templateUrl: './offline-comparison-popup.component.html',
    styleUrls: ['./offline-comparison-popup.component.css'],
})
export class OfflineComparisonPopupComponent implements OnInit {
    printdata;
    regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    constructor(
        public dialog: DialogRef<any>,
        private sanitizer: DomSanitizer,
        private modalUtil: ModalUtilService
    ) {
        this.printdata = dialog.context.printdata;
        dialog.context.dialogClass = "modal-dialog my-custom-dialog";
        dialog.context.isBlocking = false;
        dialog.context.inElement = true;
        dialog.overlayRef.instance.setStyle('position', 'fixed');
        dialog.overlayRef.instance.setStyle('z-index', 'unset');
    }

    ngOnInit() {
    }

    onClose() {
        this.dialog.close();
    }

    coppymsg() {
        let str = document.getElementById('offline-comparison-optimized-text').innerHTML;
        let writeword = str.replace(/\n/ig, '<br>');
        function listener(e) {
            e.clipboardData.setData("text/html", writeword);
            e.preventDefault();
        }
        document.addEventListener("copy", listener);
        document.execCommand("copy");
        document.removeEventListener("copy", listener);
        this.modalUtil.info('The text is successfully copied.');
    }


}
