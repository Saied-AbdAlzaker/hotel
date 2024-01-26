import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ViewBookingComponent } from './components/view-booking/view-booking/view-booking.component';


@NgModule({
  declarations: [BookingsComponent, ViewBookingComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SharedModule,
  ]
})
export class BookingsModule { }
