import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ViewBookingComponent } from './components/view-booking/view-booking/view-booking.component';

const routes: Routes = [
  {path: '', component: BookingsComponent},
  {path: 'view/:id', component: ViewBookingComponent},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
