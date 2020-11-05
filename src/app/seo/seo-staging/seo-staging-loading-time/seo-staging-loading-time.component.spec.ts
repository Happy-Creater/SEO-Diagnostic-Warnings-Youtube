import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoStagingLoadingTimeComponent } from './seo-staging-loading-time.component';

describe('SeoStagingLoadingTimeComponent', () => {
  let component: SeoStagingLoadingTimeComponent;
  let fixture: ComponentFixture<SeoStagingLoadingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoStagingLoadingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoStagingLoadingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
