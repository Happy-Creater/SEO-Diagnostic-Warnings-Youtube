import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoKeywordsGeoRankOverviewComponent } from './seo-keywords-geo-rank-overview.component';

describe('SeoKeywordsGeoRankOverviewComponent', () => {
  let component: SeoKeywordsGeoRankOverviewComponent;
  let fixture: ComponentFixture<SeoKeywordsGeoRankOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoKeywordsGeoRankOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoKeywordsGeoRankOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
