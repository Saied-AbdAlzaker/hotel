import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './components/booking/booking.component';
import { NgxStripeModule } from 'ngx-stripe';
import { StripeElementsDirective,StripePaymentElementComponent } from 'ngx-stripe'



@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
=======
    BookingRoutingModule,
>>>>>>> 922a5e8a9b3dbc24e8bc49fd936ae14592dd1651
    BookingRoutingModule,
    StripeElementsDirective,
    NgxStripeModule.forRoot(
      'pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'
    ),
    StripePaymentElementComponent,
  ]

})
export class BookingModule { }
