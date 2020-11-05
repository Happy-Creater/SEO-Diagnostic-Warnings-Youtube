import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  /**
   * The value of progress. (Percentage)
   */
  @Input()
  value: number = 0;
  /**
   * Text of the value.
   */
  @Input()
  text: string;
  /**
   * The color of progress bar.
   */
  @Input()
  color: string = '#0066cc';
  @Input('font-size')
  fontSize: number = 13;
  /**
   * The color of progress bar.
   */
  @Input('is-hide-tooltip')
  isHideTooltip: boolean = false;
  /**
   * Show tooltip with mousehover.
   */
  @Input('tooltip-with-hover')
  tooltipWithHover: boolean = false;

  display: string;

  constructor() { }

  ngOnInit() {
    if (this.tooltipWithHover) {
      this.isHideTooltip = true;
    }
  }

  ngOnChanges(changes): void {
    if (this.text == undefined) {
      this.display = this.value + '%';
    } else {
      this.display = this.text;
    }
  }

  /**
   * Return styles of progress bar.
   */
  getStyleProgressBar() {
    let styles = {
      'background-color': this.color,
      'width': this.value + '%'
    };
    return styles;
  }
  /**
   * Return styles of tooltip progress box.
   */
  getStyleTooltipProgressBox() {
    if (this.isHideTooltip) {
      return { 'opacity': '0' };
    } else {
      return { 'opacity': '1' };
    }
  }
  /**
   * Return styles of tooltip progress arrow.
   */
  getStyleTooltipProgressArrow() {
    let styles = {
      'border-top-color': this.color
    };
    return styles;
  }
  /**
   * Return styles of tooltip progress inner.
   */
  getStyleTooltipProgressInner() {
    let styles = {
      'background-color': this.color,
      'font-size': this.fontSize + 'px'
    };
    return styles;
  }

  mouseEnter() {
    if (this.tooltipWithHover) {
      this.isHideTooltip = false;
    }
  }

  mouseLeave() {
    if (this.tooltipWithHover) {
      this.isHideTooltip = true;
    }
  }
}
