import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsCrossAnalysisComponent } from './logs-cross-analysis.component';

describe('LogsCrossAnalysisComponent', () => {
  let component: LogsCrossAnalysisComponent;
  let fixture: ComponentFixture<LogsCrossAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsCrossAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsCrossAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
