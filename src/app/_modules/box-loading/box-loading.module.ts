import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxLoadingDirective } from './directive/box-loading.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoxLoadingDirective],
  exports: [BoxLoadingDirective]
})
export class BoxLoadingModule { }
