import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoGmbDiagnosticWarningsComponent } from './seo-gmb-diagnostic-warnings.component';

describe('SeoGmbDiagnosticWarningsComponent', () => {
  let component: SeoGmbDiagnosticWarningsComponent;
  let fixture: ComponentFixture<SeoGmbDiagnosticWarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoGmbDiagnosticWarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoGmbDiagnosticWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
