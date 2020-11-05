import { TestBed, inject } from '@angular/core/testing';
import { GlobalVariableService } from './global-variable.service';

describe('GlobalVariableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalVariableService]
    });
  });

  it('should ...', inject([GlobalVariableService], (service: GlobalVariableService) => {
    expect(service).toBeTruthy();
  }));
});
