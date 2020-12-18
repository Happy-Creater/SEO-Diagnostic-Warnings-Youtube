import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoStagingWebsiteSelectorComponent } from './seo-staging-website-selector.component';

describe('SeoStagingWebsiteSelectorComponent', () => {
  let component: SeoStagingWebsiteSelectorComponent;
  let fixture: ComponentFixture<SeoStagingWebsiteSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoStagingWebsiteSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoStagingWebsiteSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
