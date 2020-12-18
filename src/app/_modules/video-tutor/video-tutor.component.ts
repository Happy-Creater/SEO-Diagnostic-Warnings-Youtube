import { Component, OnInit, Input, NgZone, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

const $ = require('jquery');

@Component({
  selector: 'video-tutor',
  templateUrl: './video-tutor.component.html',
  styleUrls: ['./video-tutor.component.css']
})
export class VideoTutorComponent implements OnInit {

  @Input()
  module: string;

  @Input()
  isMenu = false;

  @Input()
  isModal = false;

  isAvailable = false;
  availableList = [
    'home_global',
    'seo_benchmark-chart',
    'seo_benchmark-instant-benchmark',
    'seo_benchmark-overview',
    'seo_benchmark-ranking-comparison',
    'seo_diagnostic-loadingtime',
    'seo_diagnostic-warnings',
    'seo_info',
    'seo_offsite-opt-detox',
    'seo_offsite-opt-link',
    'seo_offsite-overview_detail',
    'seo_onsite-validate-langing-pages',
    'seo_overview',
    'seo_reporting',
    'seo_seo-keywords-geo-mobile',
    'seo_seo-keywords-opportunities',
    'seo_seo-keywords-optimized',
    'seo_seo-keywords-rank-checker',
    'seo_staging',
    'settings_settings_seo'
  ];
  canLoad: boolean;

  private currentUrl: string;

  private isManualSetModule = false;

  private isModuleChange = true;

  @ViewChild('playVideoTutor') playVideoTutor: ElementRef;

  constructor(
    private router: Router,
    private ngZone: NgZone) {
  }

  ngOnInit() {
    // first load
    this.canLoad = false;
    this.isManualSetModule = false;
    setTimeout(() => {
      if (!this.isManualSetModule) {
        this.currentUrl = this.router.url;
      }
      this.checkAvailable();
      this.canLoad = true;
    }, 1000);
    //////////////////////////////

    this.router.events // when route change
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.canLoad = false;
        this.isManualSetModule = false;
        setTimeout(() => {
          if (!this.isManualSetModule) {
            this.currentUrl = event.url;
          }
          this.checkAvailable();
          this.isModuleChange = true;
          this.canLoad = true;
        }, 1000);
      });
    //////////////////////////////

    if (this.isMenu) {
      window['appVideoTutorMenuComponentRef'] = { component: this, zone: this.ngZone };
    }
    if (this.isModal) {
      window['appVideoTutorModalComponentRef'] = { component: this, zone: this.ngZone };
    }
  }

  playVideo(bool: boolean, e = undefined) {
    if (bool) {
      if (this.isModuleChange) {
        this.createVideoElement();
        this.isModuleChange = false;
      }
      try {
        $('#videoTutorPlayer')[0].play();
      } catch (e) { }
    } else {
      if (!e || (e && !$(e.target).hasClass('playVideoTutor'))) {
        try {
          $('#videoTutorPlayer')[0].pause();
        } catch (e) { }
      }
    }
  }

  createVideoElement() {
    try {
      $('#videoTutorPlayer').remove();
    } catch (e) { }
    const video = $('<video />', {
      id: 'videoTutorPlayer',
      src: '/share/videos/'
        + this.getCurrentModule() + '/'
        + this.getCurrentModule() + '.mp4',
      type: 'video/mp4',
      width: '100%',
      controls: true
    });
    video.appendTo($('#videoTutorBody'));
  }

  setCurrentModule(currentModule: string) {
    this.canLoad = true;
    this.isManualSetModule = true;
    this.currentUrl = currentModule;
  }

  setCanLoad(bool: boolean) {
    this.canLoad = bool;
  }

  showCover() {
    $('.playVideoTutor').show();
  }

  getCurrentModule() {
    if (this.isManualSetModule) {
      return this.currentUrl;
    } else {
      let currntModule = '';
      const arrPath = this.currentUrl.split('/');
      for (let i = 0; i < arrPath.length; i++) {
        if (i === 1 || i >= 4) {
          const arr = arrPath[i];
          currntModule += arr + '_';
        }
      }
      return currntModule.slice(0, -1);
    }
  }

  checkAvailable() {
    this.isAvailable = this.availableList.indexOf(this.getCurrentModule()) > -1;
  }

}
