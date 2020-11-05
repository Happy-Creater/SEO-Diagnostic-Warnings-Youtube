import { Directive, OnInit, OnDestroy, AfterContentInit, ElementRef, Renderer, Input, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { SubMenuDirective } from '../sub-menu/sub-menu.directive';

@Directive({
  selector: '[menu-item]',
})
export class MenuItemDirective implements OnInit, AfterContentInit, OnDestroy {

  @Input('menu-item')
  name: string;

  @Input('menu-item-link')
  links: string[];

  @Input('menu-item-exclude-link')
  excludeLink: string;

  @Input('menu-item-active')
  menuItemActive: string = 'active';

  @Input('sign-visibled')
  signVisibled: boolean = true;

  signElement: any;
  signExpand: any[] = ['glyphicon-menu-up'];
  signCollapse: any[] = ['glyphicon-menu-down'];

  parent: SubMenuDirective;
  child: SubMenuDirective;

  routerListener: Subscription;
  subMenuListener: Subscription;

  isExpand: boolean = false;

  active: boolean = false;
  linkActive: boolean = false;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.links != undefined) {
      this.routerListener = this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.checkLink();
        }
      });
      this.checkLink();
    }
  }

  checkLink() {
    let active = false;
    for (let link of this.links) {
      let url = this.router.url;
      if(this.excludeLink != undefined){
        url = url.replace(this.excludeLink, '');
      }
      if (url.indexOf(link) != -1) {
        active = true;
        break;
      }
    }
    this.linkActive = active;
    this.active = active;
    this.showActive();
    if (this.parent != undefined) {
      this.parent.checkActive();
    }
  }

  checkActive(initial: boolean = false) {
    if (this.child != undefined) {
      this.active = this.linkActive || this.child.active;
      this.showActive();
      if (this.active && initial) {
        this.expand();
      }
      if (this.parent != undefined) {
        this.parent.checkActive(initial);
      }
    }
  }

  showActive() {
    if (this.active) {
      this._renderer.setElementClass(this._elementRef.nativeElement, this.menuItemActive, true);
    } else {
      this._renderer.setElementClass(this._elementRef.nativeElement, this.menuItemActive, false);
    }
  }

  ngOnDestroy(): void {
    if (this.routerListener != undefined) {
      this.routerListener.unsubscribe();
    }
    if (this.subMenuListener != undefined) {
      this.subMenuListener.unsubscribe();
    }
  }

  setChild(subMenu: SubMenuDirective) {
    this.child = subMenu;
    this.child.setParent(this);
    this.addSign();
    if (this.isExpand) {
      this.expand();
    } else {
      this.collapse();
    }
  }

  setParent(subMenu: SubMenuDirective) {
    this.parent = subMenu;
    this.parent.checkActive(true);
  }

  addSign() {
    if (this.signVisibled) {
      this.signElement = this._renderer.createElement(this._elementRef.nativeElement, 'span');
      this._renderer.setElementClass(this.signElement, 'glyphicon', true);
    }
  }

  expand() {
    if (this.signElement != undefined) {
      this.signExpand.forEach(sign => {
        this._renderer.setElementClass(this.signElement, sign, true);
      });

      this.signCollapse.forEach(sign => {
        this._renderer.setElementClass(this.signElement, sign, false);
      });
    }
    this.isExpand = true;
    if (this.child != undefined) {
      this.child.show();
    }
  }

  collapse() {
    if (this.signElement != undefined) {
      this.signExpand.forEach(sign => {
        this._renderer.setElementClass(this.signElement, sign, false);
      });

      this.signCollapse.forEach(sign => {
        this._renderer.setElementClass(this.signElement, sign, true);
      });
    }
    this.isExpand = false;
    if (this.child != undefined) {
      this.child.hide();
    }
  }

  toggle() {
    if (this.isExpand) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    this.toggle();
  }
}
