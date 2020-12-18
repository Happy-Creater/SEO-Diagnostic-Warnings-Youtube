import { ModalComponent, CloseGuard, DialogRef } from "ngx-modialog";
import { CustomModalContext } from "./custom-modal-context";

export abstract class AbstractCustomDialog implements ModalComponent<CustomModalContext>, CloseGuard {

    context;

    constructor(public dialog: DialogRef<CustomModalContext>) {
        this.context = dialog.context;
        dialog.context.dialogClass = 'modal-dialog my-custom-dialog';
        dialog.context.isBlocking = false;
        dialog.overlayRef.instance.setStyle('z-index', '9999');
        dialog.setCloseGuard(this);
    }

    close() {
        this.dialog.dismiss();
    }

    beforeDismiss(): boolean {
        document.body.classList.remove('modal-open');
        return false;
    }

    beforeClose(): boolean {
        document.body.classList.remove('modal-open');
        return false;
    }
}