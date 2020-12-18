import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOnsiteLandingPagesOptComponent } from './seo-onsite-landing-pages-opt.component';

describe('SeoOnsiteLandingPagesOptComponent', () => {
  let component: SeoOnsiteLandingPagesOptComponent;
  let fixture: ComponentFixture<SeoOnsiteLandingPagesOptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOnsiteLandingPagesOptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOnsiteLandingPagesOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
