import { TestBed, inject } from '@angular/core/testing';

import { SortService } from './sort.service';

describe('SortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortService]
    });
  });

  it('should ...', inject([SortService], (service: SortService) => {
    expect(service).toBeTruthy();
  }));
});
