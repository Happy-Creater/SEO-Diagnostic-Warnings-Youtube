import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoYoutubeOptimizationNewVideosOptComponent } from './seo-youtube-optimization-new-videos-opt.component';

describe('SeoYoutubeOptimizationNewVideosOptComponent', () => {
  let component: SeoYoutubeOptimizationNewVideosOptComponent;
  let fixture: ComponentFixture<SeoYoutubeOptimizationNewVideosOptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoYoutubeOptimizationNewVideosOptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoYoutubeOptimizationNewVideosOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
