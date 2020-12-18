import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoToolboxGenerateSitemapComponent } from './seo-toolbox-generate-sitemap.component';

describe('SeoToolboxGenerateSitemapComponent', () => {
  let component: SeoToolboxGenerateSitemapComponent;
  let fixture: ComponentFixture<SeoToolboxGenerateSitemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoToolboxGenerateSitemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoToolboxGenerateSitemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
