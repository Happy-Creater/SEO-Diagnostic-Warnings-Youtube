import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoStagingWarningsComponent } from './seo-staging-warnings.component';

describe('SeoStagingWarningsComponent', () => {
  let component: SeoStagingWarningsComponent;
  let fixture: ComponentFixture<SeoStagingWarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoStagingWarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoStagingWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
