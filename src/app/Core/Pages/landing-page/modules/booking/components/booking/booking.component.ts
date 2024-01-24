import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { injectStripe, StripeCardComponent, StripeElementsDirective, StripeFactoryService} from 'ngx-stripe';
import { UserBookingService } from '../../services/userBooking.service';
import { IBooking } from '../../models/booking';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit{
  @ViewChild(StripeCardComponent) cardElement!: StripeCardComponent;
  bookingId:string='';
  token:string='';
  bookingDetails:IBooking|undefined;
  constructor(
      private factoryService: StripeFactoryService, 
      private _formBuilder: FormBuilder,
      private router:Router,
      private ActivatedRoute : ActivatedRoute,
      private _UserBookingService:UserBookingService
  ){
      this.ActivatedRoute.queryParams.subscribe((params) => {
        this.bookingId = params['_id'];
      });
    }
  ngOnInit(){
    this.getBookingDetails()
  }
  getBookingDetails(){
    this._UserBookingService.onGetBookingDetails(this.bookingId).subscribe({
      next:(res)=>{
        console.log(res);
        this.bookingDetails=res.data.booking
        this.bookingId=res.data.booking._id
      }
    })
  }
  paySubmit(token:string){
    this._UserBookingService.onPay(this.bookingId,token).subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
  }
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

  stripe = injectStripe('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8');

  createToken() {
    const name = ('sara');
    this.stripe
      .createToken(this.cardElement.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
          this.token=result.token.id
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
  
}
