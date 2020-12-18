import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoYoutubeBenchmarkChartComponent } from './seo-youtube-benchmark-chart.component';

describe('SeoYoutubeBenchmarkChartComponent', () => {
  let component: SeoYoutubeBenchmarkChartComponent;
  let fixture: ComponentFixture<SeoYoutubeBenchmarkChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoYoutubeBenchmarkChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoYoutubeBenchmarkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
