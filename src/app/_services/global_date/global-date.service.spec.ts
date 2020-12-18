import { TestBed, inject } from '@angular/core/testing';

import { GlobalDateService } from './global-date.service';

describe('GlobalDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalDateService]
    });
  });

  it('should be created', inject([GlobalDateService], (service: GlobalDateService) => {
    expect(service).toBeTruthy();
  }));
});
