import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaKeywordsSearchtermsAnalysisComponent } from './sea-keywords-searchterms-analysis.component';

describe('SeaKeywordsSearchtermsAnalysisComponent', () => {
  let component: SeaKeywordsSearchtermsAnalysisComponent;
  let fixture: ComponentFixture<SeaKeywordsSearchtermsAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaKeywordsSearchtermsAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaKeywordsSearchtermsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
