import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxClearableDirective } from './directive/textbox-clearable.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TextboxClearableDirective],
  exports: [TextboxClearableDirective]
})
export class TextboxClearableModule { }
