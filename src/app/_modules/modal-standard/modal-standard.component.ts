import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalOptions } from './modal-item';
@Component({
  selector: 'app-modal-standard',
  templateUrl: './modal-standard.component.html',
  styleUrls: ['./modal-standard.component.css']
})
export class ModalStandardComponent implements OnInit {
  public visible: boolean = false;
  private visibleAnimate: boolean = false;
  public top: number;
  public left: number;
  public delay: number = 300;

  @Input()
  options: ModalOptions = new ModalOptions();

  @Output()
  onShow: EventEmitter<any> = new EventEmitter();

  @Output()
  onClose: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  public show(): void {
    this.visible = true;
    this.onShow.emit(null);
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    this.onClose.emit(null);
    setTimeout(() => this.visible = false, this.delay);
  }

  getModalStyle() {
    return {
      'width': this.options.width,
      'height': this.options.height
    };
  }

  getModalLayoutStyle() {
    return {
      'display': this.visible ? 'block' : 'none',
      'opacity': this.visibleAnimate ? 1 : 0,
      'top': `${this.top}px`,
      'left': `${this.left}px`
    };
  }

  setPosition(top: number, left: number) {
    this.top = top;
    this.left = left;
  }

  setDelay(delay: number) {
    this.delay = delay;
  }
}
