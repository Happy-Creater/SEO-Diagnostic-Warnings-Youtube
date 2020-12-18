import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizedDatePipe } from './localized-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LocalizedDatePipe],
  exports: [LocalizedDatePipe]
})
export class LocalizedDateModule { }
