import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoDiagnosticLoadingTimeComponent } from './seo-diagnostic-loading-time.component';

describe('SeoDiagnosticLoadingTimeComponent', () => {
  let component: SeoDiagnosticLoadingTimeComponent;
  let fixture: ComponentFixture<SeoDiagnosticLoadingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoDiagnosticLoadingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoDiagnosticLoadingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
