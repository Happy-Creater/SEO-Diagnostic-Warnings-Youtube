import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoReportingComponent } from './seo-reporting.component';

describe('SeoReportingComponent', () => {
  let component: SeoReportingComponent;
  let fixture: ComponentFixture<SeoReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
