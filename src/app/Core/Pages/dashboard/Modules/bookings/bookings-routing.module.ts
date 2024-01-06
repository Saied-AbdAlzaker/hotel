import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';

const routes: Routes = [
  {path: '', redirectTo: 'booking', pathMatch: 'full'},
  {path: '', component: BookingsComponent},
  {path: 'booking', component: BookingsComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
