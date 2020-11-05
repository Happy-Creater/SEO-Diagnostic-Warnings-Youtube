import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoKeywordsGeolocalComponent } from './seo-keywords-geolocal.component';

describe('SeoKeywordsGeolocalComponent', () => {
  let component: SeoKeywordsGeolocalComponent;
  let fixture: ComponentFixture<SeoKeywordsGeolocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoKeywordsGeolocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoKeywordsGeolocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
