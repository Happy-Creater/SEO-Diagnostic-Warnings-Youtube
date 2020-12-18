import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from '../dropdown/dropdown.module';
import { PaginatorComponent } from './paginator.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    TranslateModule
  ],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent]
})
export class PaginatorModule { }
