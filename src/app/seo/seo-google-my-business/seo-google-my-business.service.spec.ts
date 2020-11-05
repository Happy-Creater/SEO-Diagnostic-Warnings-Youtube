import { TestBed } from '@angular/core/testing';

import { SeoGoogleMyBusinessService } from './seo-google-my-business.service';

describe('SeoGoogleMyBusinessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeoGoogleMyBusinessService = TestBed.get(SeoGoogleMyBusinessService);
    expect(service).toBeTruthy();
  });
});
