import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOffsiteOptLinkTabsComponent } from './seo-offsite-opt-link-tabs.component';

describe('SeoOffsiteOptLinkTabsComponent', () => {
  let component: SeoOffsiteOptLinkTabsComponent;
  let fixture: ComponentFixture<SeoOffsiteOptLinkTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOffsiteOptLinkTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOffsiteOptLinkTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
