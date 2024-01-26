import { Component, ViewChild } from '@angular/core';
// import { StripeElementsOptions } from '@stripe/stripe-js';

// import {
//   injectStripe,
//   StripeFactoryService,
//   StripeElementsDirective,
  
// } from 'ngx-stripe';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  // @ViewChild(StripeElementsDirective) elements!: StripeElementsDirective;
  // constructor(private factoryService: StripeFactoryService) {}

  // stripe = this.factoryService.create('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8');

  // elementsOptions: StripeElementsOptions = {
  //   locale: 'en',
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{CLIENT_SECRET}}'
  // };
  
  submit() {
    // this.elements.submit();
  }
}
