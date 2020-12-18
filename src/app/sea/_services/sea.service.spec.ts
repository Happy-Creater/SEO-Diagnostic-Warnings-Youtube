import { TestBed, inject } from '@angular/core/testing';

import { SeaService } from './sea.service';

describe('SeaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeaService]
    });
  });

  it('should be created', inject([SeaService], (service: SeaService) => {
    expect(service).toBeTruthy();
  }));
});
