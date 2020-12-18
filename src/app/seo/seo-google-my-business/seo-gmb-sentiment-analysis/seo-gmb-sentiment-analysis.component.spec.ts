import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoGmbSentimentAnalysisComponent } from './seo-gmb-sentiment-analysis.component';

describe('SeoGmbSentimentAnalysisComponent', () => {
  let component: SeoGmbSentimentAnalysisComponent;
  let fixture: ComponentFixture<SeoGmbSentimentAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoGmbSentimentAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoGmbSentimentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
