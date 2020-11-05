import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoYoutubeOverviewComponent } from './seo-youtube-overview.component';

describe('SeoYoutubeOverviewComponent', () => {
  let component: SeoYoutubeOverviewComponent;
  let fixture: ComponentFixture<SeoYoutubeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoYoutubeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoYoutubeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
