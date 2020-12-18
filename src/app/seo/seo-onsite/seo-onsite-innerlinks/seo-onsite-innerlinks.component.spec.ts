import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOnsiteInnerlinksComponent } from './seo-onsite-innerlinks.component';

describe('SeoOnsiteInnerlinksComponent', () => {
  let component: SeoOnsiteInnerlinksComponent;
  let fixture: ComponentFixture<SeoOnsiteInnerlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOnsiteInnerlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOnsiteInnerlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
