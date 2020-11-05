import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoToolboxSearchComponent } from './seo-toolbox-search.component';

describe('SeoToolboxSearchComponent', () => {
  let component: SeoToolboxSearchComponent;
  let fixture: ComponentFixture<SeoToolboxSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoToolboxSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoToolboxSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
