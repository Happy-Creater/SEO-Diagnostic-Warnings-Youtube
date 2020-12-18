import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CheckboxChildDirective } from '../checkbox-child/checkbox-child.directive';

@Directive({
  selector: '[checkbox-parent]'
})
export class CheckboxParentDirective {

  @Input('checkbox-parent')
  name: string;

  @Input('allow-least-one')
  allowLeastOne: boolean = false;

  checkboxChild: CheckboxChildDirective[] = [];

  parentListener = new Subject<boolean>();

  constructor(public elementRef: ElementRef) {
    this.updateCurrentChecked();
  }

  updateCurrentChecked() {
    setTimeout(() => {
      this.elementRef.nativeElement.checked = this.isAllChecked() || this.elementRef.nativeElement.checked;
      this.parentListener.next(this.elementRef.nativeElement.checked);
    }, 0);
  }

  addChild(checkboxChild: CheckboxChildDirective) {
    if (this.checkboxChild.indexOf(checkboxChild) == -1) {
      this.checkboxChild.push(checkboxChild);
      checkboxChild.childListener.subscribe(result => {
        if (this.allowLeastOne) {
          this.elementRef.nativeElement.checked = this.hasChecked();
        } else {
          this.elementRef.nativeElement.checked = this.isAllChecked();
        }
        this.updateCurrentChecked();
      }); 
    }
  }

  clearChild() {
    this.checkboxChild = [];
    this.updateCurrentChecked();
  }

  @HostListener('click', ['$event'])
  onParentClick(event) {
    this.checkboxChild.forEach(child => {
      child.setChecked(this.elementRef.nativeElement.checked);
    });
  }

  setChecked(checked: boolean) {
    this.checkboxChild.forEach(child => {
      child.setChecked(this.elementRef.nativeElement.checked);
    });
  }

  hasChecked(): boolean {
    return this.checkboxChild.filter(child => child.isChecked()).length > 0;
  }

  isAllChecked(): boolean {
    let allChecked = true;
    this.checkboxChild.forEach(child => {
      allChecked = allChecked && child.isChecked();
    });
    return allChecked;
  }
}
