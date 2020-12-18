import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxParentDirective } from './directives/checkbox-parent/checkbox-parent.directive';
import { CheckboxChildDirective } from './directives/checkbox-child/checkbox-child.directive';
import { CheckboxControllerDirective } from './directives/checkbox-controller/checkbox-controller.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CheckboxParentDirective, CheckboxChildDirective, CheckboxControllerDirective],
  exports: [CheckboxParentDirective, CheckboxChildDirective, CheckboxControllerDirective]
})
export class CheckboxControllerModule { }
