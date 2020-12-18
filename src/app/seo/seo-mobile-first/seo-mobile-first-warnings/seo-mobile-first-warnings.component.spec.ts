import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoMobileFirstWarningsComponent } from './seo-mobile-first-warnings.component';

describe('SeoMobileFirstWarningsComponent', () => {
  let component: SeoMobileFirstWarningsComponent;
  let fixture: ComponentFixture<SeoMobileFirstWarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoMobileFirstWarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoMobileFirstWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
