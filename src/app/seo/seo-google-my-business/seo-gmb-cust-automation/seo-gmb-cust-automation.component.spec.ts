import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoGmbCustAutomationComponent } from './seo-gmb-cust-automation.component';

describe('SeoGmbCustAutomationComponent', () => {
  let component: SeoGmbCustAutomationComponent;
  let fixture: ComponentFixture<SeoGmbCustAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoGmbCustAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoGmbCustAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
