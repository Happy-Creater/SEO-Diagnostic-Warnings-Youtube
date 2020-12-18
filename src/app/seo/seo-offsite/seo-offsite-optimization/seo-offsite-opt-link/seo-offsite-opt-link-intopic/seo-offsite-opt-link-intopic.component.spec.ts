import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOffsiteOptLinkIntopicComponent } from './seo-offsite-opt-link-intopic.component';

describe('SeoOffsiteOptLinkIntopicComponent', () => {
  let component: SeoOffsiteOptLinkIntopicComponent;
  let fixture: ComponentFixture<SeoOffsiteOptLinkIntopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOffsiteOptLinkIntopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOffsiteOptLinkIntopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
