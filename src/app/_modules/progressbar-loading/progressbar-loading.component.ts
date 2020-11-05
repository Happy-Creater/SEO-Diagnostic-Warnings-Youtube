import { Component, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'progressbar-loading',
  templateUrl: './progressbar-loading.component.html',
  styleUrls: ['./progressbar-loading.component.css']
})
export class ProgressbarLoadingComponent implements OnChanges {

  @Input()
  prefix: string = "Loading...";
  @Input()
  value: number = 0;
  @Input()
  text: string;

  display;

  @ViewChild('loading')
  loading: ElementRef;

  constructor() { }

  ngOnChanges(changes: any): void {
    if (this.text == undefined) {
      this.display = this.prefix + this.value + '%';
    } else {
      this.display = this.prefix + this.text;
    }
    this.loading.nativeElement.style.width = this.value + '%';
  }
}
