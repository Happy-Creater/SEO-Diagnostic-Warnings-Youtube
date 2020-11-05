import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOnsiteValidateLandingPagesComponent } from './seo-onsite-validate-landing-pages.component';

describe('SeoOnsiteValidateLandingPagesComponent', () => {
  let component: SeoOnsiteValidateLandingPagesComponent;
  let fixture: ComponentFixture<SeoOnsiteValidateLandingPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOnsiteValidateLandingPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOnsiteValidateLandingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
