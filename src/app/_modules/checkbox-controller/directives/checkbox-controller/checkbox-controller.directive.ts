import { Directive, ContentChildren, AfterContentInit, QueryList, ElementRef } from '@angular/core';
import { CheckboxParentDirective } from '../checkbox-parent/checkbox-parent.directive';
import { CheckboxChildDirective } from '../checkbox-child/checkbox-child.directive';

@Directive({
  selector: '[checkbox-controller]'
})
export class CheckboxControllerDirective implements AfterContentInit {

  @ContentChildren(CheckboxParentDirective)
  checkboxParent: QueryList<CheckboxParentDirective>;

  @ContentChildren(CheckboxChildDirective)
  checkboxChild: QueryList<CheckboxChildDirective>;

  constructor() { }

  ngAfterContentInit(): void {
    this.initCheckboxController();
  }

  initCheckboxController() {
    this.checkboxParent.forEach(parent => {
      parent.clearChild();
      this.checkboxChild.filter(child => child.name == parent.name)
        .forEach(child => parent.addChild(child));
      this.checkboxChild.filter(child => child.elementRef.nativeElement == parent.elementRef.nativeElement)
        .forEach(child => child.addParent(parent));
    });
  }

  getAllChecked(): ElementRef[] {
    let elements = [];
    this.checkboxChild.forEach(child => {
      if ((this.checkboxParent.filter(parent => parent.elementRef.nativeElement == child.elementRef.nativeElement).length == 0) && (child.isChecked())) {
        elements.push(child.elementRef);
      }
    });
    return elements;
  }
}
