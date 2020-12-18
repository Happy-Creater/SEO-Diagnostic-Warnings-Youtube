import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoToolbox301Component } from './seo-toolbox-301.component';

describe('SeoToolbox301Component', () => {
  let component: SeoToolbox301Component;
  let fixture: ComponentFixture<SeoToolbox301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoToolbox301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoToolbox301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
