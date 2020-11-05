import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoKeywordsRankCheckerComponent } from './seo-keywords-rank-checker.component';

describe('SeoKeywordsRankCheckerComponent', () => {
  let component: SeoKeywordsRankCheckerComponent;
  let fixture: ComponentFixture<SeoKeywordsRankCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoKeywordsRankCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoKeywordsRankCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
