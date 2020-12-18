import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CheckboxParentDirective } from '../checkbox-parent/checkbox-parent.directive';

@Directive({
  selector: '[checkbox-child]'
})
export class CheckboxChildDirective {

  @Input('checkbox-child')
  name: string;

  checkboxParent: CheckboxParentDirective;

  childListener = new Subject<boolean>();

  constructor(public elementRef: ElementRef) {
    this.updateCurrentChecked();
  }

  updateCurrentChecked() {
    this.childListener.next(this.elementRef.nativeElement.checked);
  }

  setChecked(checked: boolean) {
    this.elementRef.nativeElement.checked = checked;
    if (this.checkboxParent != undefined) {
      this.checkboxParent.setChecked(checked);
    }
  }

  isChecked(): boolean {
    return this.elementRef.nativeElement.checked && ((this.checkboxParent != undefined) ? this.checkboxParent.isAllChecked() : true);
  }

  addParent(checkboxParent: CheckboxParentDirective) {
    this.checkboxParent = checkboxParent;
    checkboxParent.parentListener.subscribe(result => {
      this.updateCurrentChecked();
    });
  }

  @HostListener('click', ['$event'])
  onChildClick(event) {
    this.updateCurrentChecked();
  }
}
