import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReportKpisComponent } from './data-report-kpis.component';

describe('DataReportKpisComponent', () => {
  let component: DataReportKpisComponent;
  let fixture: ComponentFixture<DataReportKpisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReportKpisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportKpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
