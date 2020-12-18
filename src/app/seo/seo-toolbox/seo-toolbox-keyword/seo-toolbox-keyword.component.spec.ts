import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoToolbokKeywordComponent } from './seo-toolbox-keyword.component';

describe('SeoToolbokKeywordComponent', () => {
  let component: SeoToolbokKeywordComponent;
  let fixture: ComponentFixture<SeoToolbokKeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoToolbokKeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoToolbokKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
