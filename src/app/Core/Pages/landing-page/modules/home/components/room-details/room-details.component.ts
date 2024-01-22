import { HomeService } from './../../services/home.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HelperService } from 'src/app/Core/services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserBookingService } from '../../../booking/services/userBooking.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent implements OnInit {

  roomId:string=this._ActivatedRoute.snapshot.params['id']
  roomDetails:any;
  comment:any;
  roomImages:any[]=[];
  roomFacilities:any[]=[];
  bookingId:string='';
  startValue: Date | null = null;
  endValue: Date | null = null;

  roomDetails: any;
  roomId: string | any;
  roomImages: any[] = [];
  roomFacilities: any[] = [];
  bookingId: string = '';
  startValue: Date | any = null;
  endValue: Date | any = null;
  dateRange: Date[] = [];
  totalPrice: number | any;
  priceRoom: number | any = 0;

  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;

  bookingForm = new FormGroup({
    startDate: new FormControl(null,[Validators.required]),
    endDate: new FormControl(null,[Validators.required]),
    room: new FormControl(this.roomId),
    totalPrice: new FormControl(6000)
  })
  AddComment = new FormGroup ({
    reason: new FormControl(this.roomId),
  })
  constructor(private _HomeService:HomeService,
    public _HelperService:HelperService,
    private _ActivatedRoute:ActivatedRoute,
    private _UserBookingService:UserBookingService,
    private toastr:ToastrService,
    private Router:Router,
    ){ 

    }
   
  ngOnInit(): void {    
    this.getRoomDetails(this.roomId)

    startDate: new FormControl(null, [Validators.required]),
    endDate: new FormControl(null, [Validators.required]),
    room: new FormControl(null),
    totalPrice: new FormControl(null),
  });
  constructor(
    private _HomeService: HomeService,
    public _HelperService: HelperService,
    private _ActivatedRoute: ActivatedRoute,
    private _UserBookingService: UserBookingService,
    private toastr: ToastrService,
    private Router: Router
  ) {
    this.roomId = this._ActivatedRoute.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.getRoomDetails(this.roomId);
  }
  getRoomDetails(id: string) {
    this._HomeService.onGetRoomDetails(id).subscribe({
      next: (res) => {
        console.log(res);
        this.roomDetails = res.data.room;
        this.roomImages = res.data.room.images;
        this.roomFacilities = this.roomDetails.facilities;
        this.priceRoom = this.roomDetails.price;
      },
    });
  }

  bookingRoom(date: FormGroup) {
    this._UserBookingService.onBookingRoom(date.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);

        this.toastr.error(err.error.message, 'Error!');
      },
      complete: () => {
        this.toastr.success('pay now to complete booking process', 'Success!');
        this.Router.navigate(['/landingPage/booking']);
      },
    });
  }

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  };
  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endDatePicker.open();
    }
    console.log('handleStartOpenChange', open);
  }

  handleEndOpenChange(open: boolean): void {
    this.generateDateRange();
    console.log('handleEndOpenChange', open);
  }

  generateDateRange(): void {
    const startDate = this.startValue;
    const endDate = this.endValue;
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      this.dateRange.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    console.log(this.dateRange);
    this.totalPrice = this.dateRange.length * this.priceRoom;
    console.log(this.totalPrice);

    this.bookingForm.patchValue({
      startDate: this.startValue,
      endDate: this.endValue,
      room: this.roomId,
      totalPrice: this.totalPrice
    });
  }

  getAllComment(id:string){
    this._HomeService.getAllComment(id).subscribe({
       next:(res)=>{
        console.log(res);
        this.comment=res.data.roomComments;
        
       }
    })
  }
  Addcomment(data:FormGroup){
      this._HomeService.Addcomment(data.value).subscribe({
        next:(res)=>{
          console.log(res);
          
        },error:(err)=>{
  
        },complete:()=>{
          this.toastr.success('sss','suss')
        }
      })
    

    }


}
