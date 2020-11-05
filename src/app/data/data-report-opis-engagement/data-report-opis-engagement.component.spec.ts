import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReportOpisEngagementComponent } from './data-report-opis-engagement.component';

describe('DataReportOpisEngagementComponent', () => {
  let component: DataReportOpisEngagementComponent;
  let fixture: ComponentFixture<DataReportOpisEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReportOpisEngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportOpisEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
