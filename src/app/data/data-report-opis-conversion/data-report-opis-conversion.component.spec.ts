import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReportOpisConversionComponent } from './data-report-opis-conversion.component';

describe('DataReportOpisConversionComponent', () => {
  let component: DataReportOpisConversionComponent;
  let fixture: ComponentFixture<DataReportOpisConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReportOpisConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportOpisConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
