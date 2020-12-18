import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbbreviateNumberPipe } from './pipe/abbreviate-number.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AbbreviateNumberPipe],
  exports: [AbbreviateNumberPipe]
})
export class AbbreviateNumberModule { }
