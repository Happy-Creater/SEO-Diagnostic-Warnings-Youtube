import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressbarLoadingComponent } from './progressbar-loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProgressbarLoadingComponent],
  exports: [ProgressbarLoadingComponent]
})
export class ProgressbarLoadingModule { }
