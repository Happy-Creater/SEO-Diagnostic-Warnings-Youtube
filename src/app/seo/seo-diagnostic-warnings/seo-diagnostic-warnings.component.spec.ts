import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoDiagnosticWarningsComponent } from './seo-diagnostic-warnings.component';

describe('SeoDiagnosticWarningsComponent', () => {
  let component: SeoDiagnosticWarningsComponent;
  let fixture: ComponentFixture<SeoDiagnosticWarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoDiagnosticWarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoDiagnosticWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
