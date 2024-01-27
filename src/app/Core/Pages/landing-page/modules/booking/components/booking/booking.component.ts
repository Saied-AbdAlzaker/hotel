import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StripeElementsOptions } from '@stripe/stripe-js';
import { StripeFactoryService } from 'ngx-stripe';
import {
  injectStripe,
  StripeElementsDirective,
  StripePaymentElementComponent
} from 'ngx-stripe';


import { Component, OnInit, ViewChild } from '@angular/core';
import { StripeElementsOptions } from '@stripe/stripe-js';
import { injectStripe, StripeElementsDirective, StripeFactoryService} from 'ngx-stripe';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit{
  @ViewChild(StripeElementsDirective) elements!: StripeElementsDirective;

  constructor(private factoryService: StripeFactoryService) {}
  ngOnInit(){
    console.log(this.elements);
  }
  // stripe = this.factoryService.create
  // ('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8');
  stripe = injectStripe
  ('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8');
  elementsOptions: StripeElementsOptions = {
    locale: 'en',
    clientSecret: 'sk_test_51OTjURBQWp069pqTHSzxfJPfsXX8dYvBN4F87aAIeUTqNJI92ghD8kszmnIbIfT1QvdrV0MmYMmbHkW6JLWx0grr007BrQjaiF'
  };
  submit() {
    // this.elements.submit();
  }

  constructor(private factoryService: StripeFactoryService, private _formBuilder: FormBuilder) {}

  // firstFormGroup = this._formBuilder.group({
  //   upload: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   bank: ['', Validators.required],
  // });
  // thiredFormGroup = this._formBuilder.group({
  //   bukit: ['', Validators.required],
  // });

  
  @ViewChild(StripeElementsDirective) elements!: StripeElementsDirective;


  stripe = this.factoryService.create('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8');
  elementsOptions: StripeElementsOptions = {
    locale: 'en',
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51OTjURBQWp069pqTHSzxfJPfsXX8dYvBN4F87aAIeUTqNJI92ghD8kszmnIbIfT1QvdrV0MmYMmbHkW6JLWx0grr007BrQjaiF'
  };

  // fetchUpdates() {
  //   this.elements.fetchUpdates();
  // }

  // submit() {
  //   this.elements.submit();
  // }

}
