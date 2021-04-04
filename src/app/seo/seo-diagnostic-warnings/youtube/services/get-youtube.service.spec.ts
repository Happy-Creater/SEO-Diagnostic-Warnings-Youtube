import { TestBed, inject } from '@angular/core/testing';

import { GetYoutubeService } from './get-youtube.service';

describe('GetYoutubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetYoutubeService]
    });
  });

  it('should be created', inject([GetYoutubeService], (service: GetYoutubeService) => {
    expect(service).toBeTruthy();
  }));
});
