import { TestBed, inject } from '@angular/core/testing';

import { SeoOffsiteService } from './seo-offsite.service';

describe('SeoOffsiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeoOffsiteService]
    });
  });

  it('should be created', inject([SeoOffsiteService], (service: SeoOffsiteService) => {
    expect(service).toBeTruthy();
  }));
});
