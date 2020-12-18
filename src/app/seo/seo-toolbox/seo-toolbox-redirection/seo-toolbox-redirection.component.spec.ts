import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoToolboxRedirectionComponent } from './seo-toolbox-redirection.component';

describe('SeoToolboxRedirectionComponent', () => {
  let component: SeoToolboxRedirectionComponent;
  let fixture: ComponentFixture<SeoToolboxRedirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoToolboxRedirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoToolboxRedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
