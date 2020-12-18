import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoStagingOverviewComponent } from './seo-staging-overview.component';

describe('SeoStagingOverviewComponent', () => {
  let component: SeoStagingOverviewComponent;
  let fixture: ComponentFixture<SeoStagingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoStagingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoStagingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
