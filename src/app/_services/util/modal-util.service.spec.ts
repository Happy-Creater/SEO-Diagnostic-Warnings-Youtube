import { TestBed, inject } from '@angular/core/testing';

import { ModalUtilService } from './modal-util.service';

describe('ModalUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalUtilService]
    });
  });

  it('should be created', inject([ModalUtilService], (service: ModalUtilService) => {
    expect(service).toBeTruthy();
  }));
});
