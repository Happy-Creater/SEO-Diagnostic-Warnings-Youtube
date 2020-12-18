import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoBenchmarkRankingComparisonComponent } from './seo-benchmark-ranking-comparison.component';

describe('SeoBenchmarkRankingComparisonComponent', () => {
  let component: SeoBenchmarkRankingComparisonComponent;
  let fixture: ComponentFixture<SeoBenchmarkRankingComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoBenchmarkRankingComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoBenchmarkRankingComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
