import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReportPisComponent } from './data-report-pis.component';

describe('DataReportPisComponent', () => {
  let component: DataReportPisComponent;
  let fixture: ComponentFixture<DataReportPisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReportPisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportPisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
