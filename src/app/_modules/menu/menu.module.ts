import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLeftDirective } from './directives/menu-left/menu-left.directive';
import { MenuItemDirective } from './directives/menu-item/menu-item.directive';
import { SubMenuDirective } from './directives/sub-menu/sub-menu.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuLeftDirective, MenuItemDirective, SubMenuDirective],
  exports: [MenuLeftDirective, MenuItemDirective, SubMenuDirective]
})
export class MenuModule { }
