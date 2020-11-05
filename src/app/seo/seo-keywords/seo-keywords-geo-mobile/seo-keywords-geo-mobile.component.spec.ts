import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoKeywordsGeoMobileComponent } from './seo-keywords-geo-mobile.component';

describe('SeoKeywordsGeoMobileComponent', () => {
  let component: SeoKeywordsGeoMobileComponent;
  let fixture: ComponentFixture<SeoKeywordsGeoMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoKeywordsGeoMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoKeywordsGeoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
