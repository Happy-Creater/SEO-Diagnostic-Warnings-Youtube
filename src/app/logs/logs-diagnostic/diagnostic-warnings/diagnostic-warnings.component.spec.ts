import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticWarningComponent } from './diagnostic-warnings.component';

describe('DiagnosticWarningComponent', () => {
  let component: DiagnosticWarningComponent;
  let fixture: ComponentFixture<DiagnosticWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
