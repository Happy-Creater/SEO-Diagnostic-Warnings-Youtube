import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoMobileFirstOverviewComponent } from './seo-mobile-first-overview.component';

describe('SeoMobileFirstOverviewComponent', () => {
  let component: SeoMobileFirstOverviewComponent;
  let fixture: ComponentFixture<SeoMobileFirstOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoMobileFirstOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoMobileFirstOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
