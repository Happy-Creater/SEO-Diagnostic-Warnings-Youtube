import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoYoutubeWarningsComponent } from './seo-youtube-warnings.component';

describe('SeoYoutubeWarningsComponent', () => {
  let component: SeoYoutubeWarningsComponent;
  let fixture: ComponentFixture<SeoYoutubeWarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoYoutubeWarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoYoutubeWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
