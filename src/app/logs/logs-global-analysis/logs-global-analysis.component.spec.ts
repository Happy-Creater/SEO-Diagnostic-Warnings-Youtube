import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsGlobalAnalysisComponent } from './logs-global-analysis.component';

describe('LogsGlobalAnalysisComponent', () => {
  let component: LogsGlobalAnalysisComponent;
  let fixture: ComponentFixture<LogsGlobalAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsGlobalAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsGlobalAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
