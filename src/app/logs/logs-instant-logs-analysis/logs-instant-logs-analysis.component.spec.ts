import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsInstantLogsAnalysisComponent } from './logs-instant-logs-analysis.component';

describe('LogsInstantLogsAnalysisComponent', () => {
  let component: LogsInstantLogsAnalysisComponent;
  let fixture: ComponentFixture<LogsInstantLogsAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsInstantLogsAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsInstantLogsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
