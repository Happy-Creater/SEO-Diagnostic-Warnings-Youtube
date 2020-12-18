import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOnsiteHotContentOptimisationComponent } from './seo-onsite-hot-content-optimisation.component';

describe('SeoOnsiteHotContentOptimisationComponent', () => {
  let component: SeoOnsiteHotContentOptimisationComponent;
  let fixture: ComponentFixture<SeoOnsiteHotContentOptimisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOnsiteHotContentOptimisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOnsiteHotContentOptimisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
