import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DDListDirective } from './directives/dd-list/dd-list.directive';
import { DDListHeaderDirective } from './directives/dd-list-header/dd-list-header.directive';
import { DDTitleDirective } from './directives/dd-title/dd-title.directive';
import { DDCustomComponent } from './dd-custom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DDListDirective,
    DDListHeaderDirective,
    DDTitleDirective,
    DDCustomComponent
  ],
  exports: [
    DDListDirective,
    DDListHeaderDirective,
    DDTitleDirective,
    DDCustomComponent
  ]
})
export class DDCustomModule { }
