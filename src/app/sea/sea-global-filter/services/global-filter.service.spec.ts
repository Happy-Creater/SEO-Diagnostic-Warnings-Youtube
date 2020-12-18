import { TestBed, inject } from '@angular/core/testing';

import { GlobalFilterService } from './global-filter.service';

describe('GlobalFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalFilterService]
    });
  });

  it('should be created', inject([GlobalFilterService], (service: GlobalFilterService) => {
    expect(service).toBeTruthy();
  }));
});
