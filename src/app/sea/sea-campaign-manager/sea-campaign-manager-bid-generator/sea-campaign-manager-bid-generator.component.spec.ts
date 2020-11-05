import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaCampaignManagerBidGeneratorComponent } from './sea-campaign-manager-bid-generator.component';

describe('SeaCampaignManagerBidGeneratorComponent', () => {
  let component: SeaCampaignManagerBidGeneratorComponent;
  let fixture: ComponentFixture<SeaCampaignManagerBidGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaCampaignManagerBidGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaCampaignManagerBidGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
