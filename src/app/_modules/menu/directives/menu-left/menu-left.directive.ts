import { Directive, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { MenuItemDirective } from '../menu-item/menu-item.directive';
import { SubMenuDirective } from '../sub-menu/sub-menu.directive';

@Directive({
  selector: '[menu-left]'
})
export class MenuLeftDirective implements AfterContentInit {

  @ContentChildren(MenuItemDirective)
  menuItems: QueryList<MenuItemDirective>;
  @ContentChildren(SubMenuDirective)
  subMenus: QueryList<SubMenuDirective>;

  constructor() { }

  ngAfterContentInit(): void {
    this.initMenuItem(this.menuItems, this.subMenus);
  }

  initMenuItem(menuItems, subMenus) {
    menuItems.forEach(menuItem => {
      subMenus.filter(subMenu => {
        return subMenu.name == menuItem.name;
      }).forEach(subMenu => {
        menuItem.setChild(subMenu);
      });
    });

    subMenus.forEach(subMenu => {
      this.initMenuItem(subMenu.menuItems, subMenu.subMenus.filter(sm => (sm != subMenu)));
    });
  }
}
