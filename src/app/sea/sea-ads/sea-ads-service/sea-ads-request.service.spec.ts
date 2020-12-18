import { TestBed, inject } from '@angular/core/testing';

import { SeaAdsRequestService } from './sea-ads-request.service';

describe('SeaAdsRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeaAdsRequestService]
    });
  });

  it('should be created', inject([SeaAdsRequestService], (service: SeaAdsRequestService) => {
    expect(service).toBeTruthy();
  }));
});
