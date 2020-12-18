import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaDiagnosticWarningsComponent } from './sea-diagnostic-warnings.component';

describe('SeaDiagnosticWarningsComponent', () => {
  let component: SeaDiagnosticWarningsComponent;
  let fixture: ComponentFixture<SeaDiagnosticWarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaDiagnosticWarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaDiagnosticWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
