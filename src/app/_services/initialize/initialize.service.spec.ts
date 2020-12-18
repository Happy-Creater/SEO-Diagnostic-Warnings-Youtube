import { TestBed, inject } from '@angular/core/testing';

import { InitializeService } from './initialize.service';

describe('InitializeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitializeService]
    });
  });

  it('should ...', inject([InitializeService], (service: InitializeService) => {
    expect(service).toBeTruthy();
  }));
});
