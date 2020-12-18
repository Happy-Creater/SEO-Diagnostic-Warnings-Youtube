import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoStagingRedirectionsComponent } from './seo-staging-redirections.component';

describe('SeoStagingRedirectionsComponent', () => {
  let component: SeoStagingRedirectionsComponent;
  let fixture: ComponentFixture<SeoStagingRedirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoStagingRedirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoStagingRedirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
