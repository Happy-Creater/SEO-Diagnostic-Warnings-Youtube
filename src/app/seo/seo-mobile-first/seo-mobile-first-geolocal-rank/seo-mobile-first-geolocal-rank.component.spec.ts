import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoMobileFirstGeolocalRankComponent } from './seo-mobile-first-geolocal-rank.component';

describe('SeoMobileFirstGeolocalRankComponent', () => {
  let component: SeoMobileFirstGeolocalRankComponent;
  let fixture: ComponentFixture<SeoMobileFirstGeolocalRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoMobileFirstGeolocalRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoMobileFirstGeolocalRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
