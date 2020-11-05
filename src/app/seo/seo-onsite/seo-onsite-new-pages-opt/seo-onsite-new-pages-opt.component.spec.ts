import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOnsiteNewPagesOptComponent } from './seo-onsite-new-pages-opt.component';

describe('SeoOnsiteNewPagesOptComponent', () => {
  let component: SeoOnsiteNewPagesOptComponent;
  let fixture: ComponentFixture<SeoOnsiteNewPagesOptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOnsiteNewPagesOptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOnsiteNewPagesOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
