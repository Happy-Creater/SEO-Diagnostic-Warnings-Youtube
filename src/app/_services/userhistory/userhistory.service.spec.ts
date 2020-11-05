import { TestBed, inject } from '@angular/core/testing';

import { UserhistoryService } from './userhistory.service';

describe('UserhistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserhistoryService]
    });
  });

  it('should be created', inject([UserhistoryService], (service: UserhistoryService) => {
    expect(service).toBeTruthy();
  }));
});
