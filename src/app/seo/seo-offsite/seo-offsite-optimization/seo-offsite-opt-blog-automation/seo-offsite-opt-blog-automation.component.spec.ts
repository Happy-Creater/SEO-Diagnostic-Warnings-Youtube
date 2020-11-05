import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOffsiteOptBlogAutomationComponent } from './seo-offsite-opt-blog-automation.component';

describe('SeoOffsiteOptBlogAutomationComponent', () => {
  let component: SeoOffsiteOptBlogAutomationComponent;
  let fixture: ComponentFixture<SeoOffsiteOptBlogAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOffsiteOptBlogAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOffsiteOptBlogAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
