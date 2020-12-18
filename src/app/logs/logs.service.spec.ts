import { TestBed, inject } from '@angular/core/testing';

import { LogsService } from './logs.service';

describe('LogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogsService]
    });
  });

  it('should be created', inject([LogsService], (service: LogsService) => {
    expect(service).toBeTruthy();
  }));
});
