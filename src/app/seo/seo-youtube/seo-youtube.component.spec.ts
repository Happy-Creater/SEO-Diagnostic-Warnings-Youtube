import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoYoutubeComponent } from './seo-youtube.component';

describe('SeoYoutubeComponent', () => {
  let component: SeoYoutubeComponent;
  let fixture: ComponentFixture<SeoYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
