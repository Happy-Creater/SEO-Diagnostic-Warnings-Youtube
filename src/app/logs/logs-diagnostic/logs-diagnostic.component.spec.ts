import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsDiagnosticComponent } from './logs-diagnostic.component';

describe('LogsDiagnosticComponent', () => {
  let component: LogsDiagnosticComponent;
  let fixture: ComponentFixture<LogsDiagnosticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsDiagnosticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
