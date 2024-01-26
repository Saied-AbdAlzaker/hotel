import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './components/booking/booking.component';
// import { StripeElementsDirective } from 'ngx-stripe'
// import { NgxStripeModule } from 'ngx-stripe';
import { NgxStripeModule } from 'ngx-stripe';
import { StripeElementsDirective,StripePaymentElementComponent } from 'ngx-stripe'



@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    
    BookingRoutingModule,
    // StripeElementsDirective,
    // NgxStripeModule.forRoot('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'),

   ]
    BookingRoutingModule,
    StripeElementsDirective,
    NgxStripeModule.forRoot(
      'pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'
    ),
    StripePaymentElementComponent
  ]

})
export class BookingModule { }
