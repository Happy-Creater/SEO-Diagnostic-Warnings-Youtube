import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticLowCrawledPagesComponent } from './diagnostic-low-crawled-pages.component';

describe('DiagnosticLowCrawledPagesComponent', () => {
  let component: DiagnosticLowCrawledPagesComponent;
  let fixture: ComponentFixture<DiagnosticLowCrawledPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticLowCrawledPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticLowCrawledPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
