import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoDiagnosticNoRegressionComponent } from './seo-diagnostic-no-regression.component';

describe('SeoDiagnosticNoRegressionComponent', () => {
  let component: SeoDiagnosticNoRegressionComponent;
  let fixture: ComponentFixture<SeoDiagnosticNoRegressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoDiagnosticNoRegressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoDiagnosticNoRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
