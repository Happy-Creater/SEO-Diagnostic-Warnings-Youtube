import { TestBed, inject } from '@angular/core/testing';

import { DetailsFilterService } from './details-filter-service.service';

describe('DetailsFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsFilterService]
    });
  });

  it('should be created', inject([DetailsFilterService], (service: DetailsFilterService) => {
    expect(service).toBeTruthy();
  }));
});
