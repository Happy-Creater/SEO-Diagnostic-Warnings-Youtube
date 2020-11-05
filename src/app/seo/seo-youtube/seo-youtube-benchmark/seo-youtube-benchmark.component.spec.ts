import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoYoutubeBenchmarkComponent } from './seo-youtube-benchmark.component';

describe('SeoYoutubeBenchmarkComponent', () => {
  let component: SeoYoutubeBenchmarkComponent;
  let fixture: ComponentFixture<SeoYoutubeBenchmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoYoutubeBenchmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoYoutubeBenchmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
