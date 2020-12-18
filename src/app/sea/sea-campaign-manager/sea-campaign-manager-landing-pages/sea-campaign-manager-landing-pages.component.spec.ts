import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaCampaignManagerLandingPagesComponent } from './sea-campaign-manager-landing-pages.component';

describe('SeaCampaignManagerLandingPagesComponent', () => {
  let component: SeaCampaignManagerLandingPagesComponent;
  let fixture: ComponentFixture<SeaCampaignManagerLandingPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaCampaignManagerLandingPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaCampaignManagerLandingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
