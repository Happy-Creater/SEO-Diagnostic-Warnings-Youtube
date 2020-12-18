import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReportOpisPorteeComponent } from './data-report-opis-portee.component';

describe('DataReportOpisPorteeComponent', () => {
  let component: DataReportOpisPorteeComponent;
  let fixture: ComponentFixture<DataReportOpisPorteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReportOpisPorteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportOpisPorteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
