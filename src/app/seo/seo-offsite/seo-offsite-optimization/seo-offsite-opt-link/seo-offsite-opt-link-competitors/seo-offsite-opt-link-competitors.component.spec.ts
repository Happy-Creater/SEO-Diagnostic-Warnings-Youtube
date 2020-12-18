import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOffsiteOptLinkCompetitorsComponent } from './seo-offsite-opt-link-competitors.component';

describe('SeoOffsiteOptLinkCompetitorsComponent', () => {
  let component: SeoOffsiteOptLinkCompetitorsComponent;
  let fixture: ComponentFixture<SeoOffsiteOptLinkCompetitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOffsiteOptLinkCompetitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOffsiteOptLinkCompetitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
