import { TestBed, inject } from '@angular/core/testing';

import { ChannelYoutubeVariableService } from './channel-youtube-variable.service';

describe('ChannelYoutubeVariableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelYoutubeVariableService]
    });
  });

  it('should be created', inject([ChannelYoutubeVariableService], (service: ChannelYoutubeVariableService) => {
    expect(service).toBeTruthy();
  }));
});
