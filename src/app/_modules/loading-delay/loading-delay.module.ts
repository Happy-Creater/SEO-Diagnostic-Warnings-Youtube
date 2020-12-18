import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDelayDirective } from './loading-delay.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingDelayDirective],
  exports: [LoadingDelayDirective]
})
export class LoadingDelayModule { }
