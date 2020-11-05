import { Directive, Input, ElementRef, Renderer, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MenuItemDirective } from '../menu-item/menu-item.directive';

@Directive({
  selector: '[sub-menu]'
})
export class SubMenuDirective implements AfterContentInit {

  @Input('sub-menu')
  name: string;

  @Input('force-expand-child')
  forceExpandChild: boolean = false;

  @ContentChildren(MenuItemDirective)
  menuItems: QueryList<MenuItemDirective>;

  @ContentChildren(SubMenuDirective)
  subMenus: QueryList<SubMenuDirective>;

  active: boolean = false;

  parent: MenuItemDirective;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

  ngAfterContentInit(): void {
    for (let menuItem of this.menuItems.toArray()) {
      menuItem.setParent(this);
    }
    this.checkActive();
  }

  checkActive(initial: boolean = false) {
    let active = false;
    for (let menuItem of this.menuItems.toArray()) {
      if (menuItem.active) {
        active = true;
        break;
      }
    }
    this.active = active;
    if (this.parent != undefined) {
      this.parent.checkActive(initial);
    }
  }

  setParent(menuItem: MenuItemDirective) {
    this.parent = menuItem;
    this.parent.checkActive(true);
  }

  show() {
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'display', 'block');
    if (this.forceExpandChild) {
      this.menuItems.forEach(menuItem=>menuItem.expand());
    }
  }

  hide() {
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'display', 'none');
  }
}
