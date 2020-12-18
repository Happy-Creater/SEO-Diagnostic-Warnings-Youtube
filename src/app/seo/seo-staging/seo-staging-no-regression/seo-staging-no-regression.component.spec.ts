import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoStagingNoRegressionComponent } from './seo-staging-no-regression.component';

describe('SeoStagingNoRegressionComponent', () => {
  let component: SeoStagingNoRegressionComponent;
  let fixture: ComponentFixture<SeoStagingNoRegressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoStagingNoRegressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoStagingNoRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
