import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstTextPipe } from 'app/_modules/first-text/first-text.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirstTextPipe],
  exports: [FirstTextPipe]
})
export class FirstTextModule { }
