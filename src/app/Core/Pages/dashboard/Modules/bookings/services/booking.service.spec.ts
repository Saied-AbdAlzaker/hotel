/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookingService } from './booking.service';

describe('Service: Booking', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingService]
    });
  });

  it('should ...', inject([BookingService], (service: BookingService) => {
    expect(service).toBeTruthy();
  }));
});
