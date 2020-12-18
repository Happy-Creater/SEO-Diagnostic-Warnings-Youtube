import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextElipsisPipe } from 'app/_modules/elipsis/text-elipsis.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TextElipsisPipe],
  exports: [TextElipsisPipe]
})
export class TextElipsisModule { }
