import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { injectStripe, StripeCardComponent, StripeElementsDirective, StripeFactoryService} from 'ngx-stripe';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit{
  @ViewChild(StripeCardComponent) cardElement!: StripeCardComponent;
  constructor(private factoryService: StripeFactoryService, private _formBuilder: FormBuilder,
      private router:Router
    ) {}
  ngOnInit(){
  }
  // private readonly fb = inject(UntypedFormBuilder);
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };
  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  // checkoutForm = this.fb.group({
  //   name: ['', [Validators.required]],
  //   email: ['', [Validators.required, Validators.email]]
  // });

  // Replace with your own public key
  stripe = injectStripe('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8');

  createToken() {
    const name = ('sara');
    this.stripe
      .createToken(this.cardElement.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
  
}
