import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReportGlossaryComponent } from './data-report-glossary.component';

describe('DataReportGlossaryComponent', () => {
  let component: DataReportGlossaryComponent;
  let fixture: ComponentFixture<DataReportGlossaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReportGlossaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
