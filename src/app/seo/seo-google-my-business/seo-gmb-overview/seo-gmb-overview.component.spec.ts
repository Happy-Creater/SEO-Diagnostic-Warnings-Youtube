import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoGmbOverviewComponent } from './seo-gmb-overview.component';

describe('SeoGmbOverviewComponent', () => {
  let component: SeoGmbOverviewComponent;
  let fixture: ComponentFixture<SeoGmbOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoGmbOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoGmbOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
