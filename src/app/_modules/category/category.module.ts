import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDirective } from './directive/category.directive';
import { SeoComponent } from '../../../app/seo/seo.component'
import { from } from 'rxjs/observable/from';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryDirective],
  exports: [CategoryDirective],
  providers:[SeoComponent]
})
export class CategoryModule { }
