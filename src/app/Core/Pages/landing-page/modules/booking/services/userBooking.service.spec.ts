/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserBookingService } from './userBooking.service';

describe('Service: UserBooking', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserBookingService]
    });
  });

  it('should ...', inject([UserBookingService], (service: UserBookingService) => {
    expect(service).toBeTruthy();
  }));
});
