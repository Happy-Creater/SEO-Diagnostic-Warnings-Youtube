import { TestBed, inject } from '@angular/core/testing';

import { StagingWebsiteVariableService } from './staging-website-variable.service';

describe('StagingWebsiteVariableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StagingWebsiteVariableService]
    });
  });

  it('should be created', inject([StagingWebsiteVariableService], (service: StagingWebsiteVariableService) => {
    expect(service).toBeTruthy();
  }));
});
