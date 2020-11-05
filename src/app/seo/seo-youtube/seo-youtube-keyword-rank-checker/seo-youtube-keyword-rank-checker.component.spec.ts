import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoYoutubeKeywordRankCheckerComponent } from './seo-youtube-keyword-rank-checker.component';

describe('SeoYoutubeKeywordRankCheckerComponent', () => {
  let component: SeoYoutubeKeywordRankCheckerComponent;
  let fixture: ComponentFixture<SeoYoutubeKeywordRankCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoYoutubeKeywordRankCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoYoutubeKeywordRankCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
