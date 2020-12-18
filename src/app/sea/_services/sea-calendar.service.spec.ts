import { TestBed, inject } from '@angular/core/testing';

import { SeaCalendarService } from './sea-calendar.service';

describe('SeaCalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeaCalendarService]
    });
  });

  it('should be created', inject([SeaCalendarService], (service: SeaCalendarService) => {
    expect(service).toBeTruthy();
  }));
});
