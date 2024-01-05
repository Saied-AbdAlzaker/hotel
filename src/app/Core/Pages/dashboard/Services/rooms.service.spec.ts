/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoomsService } from './rooms.service';

describe('Service: Rooms', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomsService]
    });
  });

  it('should ...', inject([RoomsService], (service: RoomsService) => {
    expect(service).toBeTruthy();
  }));
});
