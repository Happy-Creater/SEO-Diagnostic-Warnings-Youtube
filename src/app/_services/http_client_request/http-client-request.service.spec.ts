import { TestBed, inject } from '@angular/core/testing';

import { HttpClientRequestService } from './http-client-request.service';

describe('HttpClientRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientRequestService]
    });
  });

  it('should be created', inject([HttpClientRequestService], (service: HttpClientRequestService) => {
    expect(service).toBeTruthy();
  }));
});
