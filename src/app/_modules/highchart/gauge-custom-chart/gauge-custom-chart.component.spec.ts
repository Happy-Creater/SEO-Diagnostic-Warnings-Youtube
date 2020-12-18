import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeCustomChartComponent } from './gauge-custom-chart.component';

describe('GaugeCustomChartComponent', () => {
  let component: GaugeCustomChartComponent;
  let fixture: ComponentFixture<GaugeCustomChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeCustomChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeCustomChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
