import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoGmbLocDetailsComponent } from './seo-gmb-loc-details.component';

describe('SeoGmbLocDetailsComponent', () => {
  let component: SeoGmbLocDetailsComponent;
  let fixture: ComponentFixture<SeoGmbLocDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoGmbLocDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoGmbLocDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
