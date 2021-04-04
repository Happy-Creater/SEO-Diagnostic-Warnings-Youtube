import { TestBed, inject } from '@angular/core/testing';

import { YtUpdateNewService } from './yt-update-new.service';

describe('YtUpdateNewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YtUpdateNewService]
    });
  });

  it('should be created', inject([YtUpdateNewService], (service: YtUpdateNewService) => {
    expect(service).toBeTruthy();
  }));
});
