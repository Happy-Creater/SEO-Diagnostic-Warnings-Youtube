import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoToolboxSitemapUrlsComponent } from './seo-toolbox-sitemap-urls.component';

describe('SeoToolboxSitemapUrlsComponent', () => {
  let component: SeoToolboxSitemapUrlsComponent;
  let fixture: ComponentFixture<SeoToolboxSitemapUrlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoToolboxSitemapUrlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoToolboxSitemapUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
