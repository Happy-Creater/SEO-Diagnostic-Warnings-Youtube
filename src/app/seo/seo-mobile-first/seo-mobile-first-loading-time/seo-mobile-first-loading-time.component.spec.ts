import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoMobileFirstLoadingTimeComponent } from './seo-mobile-first-loading-time.component';

describe('SeoMobileFirstLoadingTimeComponent', () => {
  let component: SeoMobileFirstLoadingTimeComponent;
  let fixture: ComponentFixture<SeoMobileFirstLoadingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoMobileFirstLoadingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoMobileFirstLoadingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
