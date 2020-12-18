import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoGmbShareVisibilityComponent } from './seo-gmb-share-visibility.component';

describe('SeoGmbShareVisibilityComponent', () => {
  let component: SeoGmbShareVisibilityComponent;
  let fixture: ComponentFixture<SeoGmbShareVisibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoGmbShareVisibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoGmbShareVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
