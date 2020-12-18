import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InitializeService } from 'app/_services/initialize/initialize.service';
import { ActivatedRoute } from '@angular/router';

const $ = require('jquery');

@Component({
  selector: 'app-gsv',
  templateUrl: './gsv.component.html',
  styleUrls: ['./gsv.component.css']
})
export class GsvComponent implements OnInit, AfterViewInit {

  lineHomeWidth;

  constructor(
    private init: InitializeService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.init.initUserWebsiteByParam(null, this.activeRoute);
  }

  ngAfterViewInit(): void {
    const windowWidth = $(window).width();
    if (windowWidth < 1400) {
      this.lineHomeWidth = '53%';
    } else if (windowWidth < 1920) {
      this.lineHomeWidth = '47%';
    } else {
      this.lineHomeWidth = '42%';
    }
  }

}
