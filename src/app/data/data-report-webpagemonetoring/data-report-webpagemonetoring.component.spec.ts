import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReportWebpagemonetoringComponent } from './data-report-webpagemonetoring.component';

describe('DataReportWebpagemonetoringComponent', () => {
  let component: DataReportWebpagemonetoringComponent;
  let fixture: ComponentFixture<DataReportWebpagemonetoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReportWebpagemonetoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportWebpagemonetoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
