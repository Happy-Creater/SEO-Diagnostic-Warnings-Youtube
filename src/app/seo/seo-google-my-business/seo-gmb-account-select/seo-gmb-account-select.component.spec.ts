import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoGmbAccountSelectComponent } from './seo-gmb-account-select.component';

describe('SeoGmbAccountSelectComponent', () => {
  let component: SeoGmbAccountSelectComponent;
  let fixture: ComponentFixture<SeoGmbAccountSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoGmbAccountSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoGmbAccountSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
