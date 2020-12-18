import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatorModule } from '../paginator/paginator.module';
import { SortHeaderDirective } from './directives/sort-header/sort-header.directive';
import { SortItemDirective } from './directives/sort-item/sort-item.directive';
import { SortService } from './services/sort/sort.service';
import { TableStandardComponent } from './table-standard.component';

@NgModule({
  imports: [
    CommonModule,
    PaginatorModule
  ],
  declarations: [
    SortHeaderDirective,
    SortItemDirective,
    TableStandardComponent
  ],
  exports: [
    SortHeaderDirective,
    SortItemDirective,
    TableStandardComponent
  ],
  providers: [
    SortService
  ]
})
export class TableStandardModule { }
