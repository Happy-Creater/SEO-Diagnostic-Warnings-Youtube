import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoBenchmarkChartComponent } from './seo-benchmark-chart.component';

describe('SeoBenchmarkChartComponent', () => {
  let component: SeoBenchmarkChartComponent;
  let fixture: ComponentFixture<SeoBenchmarkChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoBenchmarkChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoBenchmarkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
