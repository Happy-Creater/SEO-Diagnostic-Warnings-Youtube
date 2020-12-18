import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoKeywordsOpportunitiesComponent } from './seo-keywords-opportunities.component';

describe('SeoKeywordsOpportunitiesComponent', () => {
  let component: SeoKeywordsOpportunitiesComponent;
  let fixture: ComponentFixture<SeoKeywordsOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoKeywordsOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoKeywordsOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
