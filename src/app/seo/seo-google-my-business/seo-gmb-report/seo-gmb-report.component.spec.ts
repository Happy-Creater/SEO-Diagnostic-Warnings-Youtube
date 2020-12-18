import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoGmbReportComponent } from './seo-gmb-report.component';

describe('SeoGmbReportComponent', () => {
  let component: SeoGmbReportComponent;
  let fixture: ComponentFixture<SeoGmbReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoGmbReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoGmbReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
