import { Component, OnInit, ViewChild } from '@angular/core';
import { HelperService } from 'src/app/Core/services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserBookingService } from '../../../booking/services/userBooking.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { HomeService } from '../../services/home.service';
import { IRoomsUser } from '../../models/home';
import { IFacilities } from 'src/app/Core/Pages/dashboard/Modules/rooms/model/room';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',

  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent implements OnInit {
  roomDetails: IRoomsUser|undefined;
  roomId: string | any = this._ActivatedRoute.snapshot.params['id'];
  roomImages: string[] = [];
  roomFacilities: IFacilities[] |undefined= [];
  roomDiscount: any;
  bookingId: string = '';
  comments: any;
  startValue: Date | any = null;
  endValue: Date | any = null;
  dateRange: Date[] = [];
  totalPrice: number | any;
  priceRoom: number | any = 0;
  Reviews:any;
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;
  bookingForm = new FormGroup({
    startDate: new FormControl(null, [Validators.required]),
    endDate: new FormControl(null, [Validators.required]),
    room: new FormControl(null),
    totalPrice: new FormControl(null),
  });

  AddComment = new FormGroup({
    roomId: new FormControl(this.roomId),
    comment: new FormControl(null),
  })
  Addreview = new FormGroup({
    roomId: new FormControl(this.roomId),
    rating:new FormControl(null),
    review: new FormControl(null),
  })
  

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
    this.getAllComments()
  }
  getRoomDetails(id: string) {
    this._HomeService.onGetRoomDetails(id).subscribe({
      next: (res) => {
        console.log(res);
        this.roomDetails = res.data.room;
        this.roomImages = res.data.room.images;
        this.roomFacilities = this.roomDetails?.facilities;
        this.priceRoom = this.roomDetails?.price;
        this.roomDiscount = this.roomDetails?.discount
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
  
  getAllReview(){
    this._HomeService.getAllReviews(this.roomId).subscribe({
      next:(res)=>{
        console.log(res);
        this.Reviews=res.data.roomReviews;
      }
      
    })
  }
  AddReview(data:FormGroup){
    this._HomeService.Addreview(data.value).subscribe({
      next:(res)=>{
        console.log(res);
        
      },error:(err)=>{
        this.toastr.error('Login First','Error')
      },complete:()=>{
        this.toastr.success('Reviewed Successfully')
        this.getAllReview()
      }
    })
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
    this.totalPrice = this.dateRange.length * (this.priceRoom-this.roomDiscount);
    console.log(this.totalPrice);

    this.bookingForm.patchValue({
      startDate: this.startValue,
      endDate: this.endValue,
      room: this.roomId,
      totalPrice: this.totalPrice
    });
  }
  getAllComments(){
        this._HomeService.getAllComments(this.roomId).subscribe({
           next:(res)=>{
            console.log(res);
            this.comments=res.data.roomComments;
           }
        })
      }
      Addcomment(data:FormGroup){
          this._HomeService.Addcomment(data.value).subscribe({
            next:(res)=>{
              console.log(res);
              
            },error:(err)=>{
              this.toastr.error('Login First','Error')
            },complete:()=>{
              this.toastr.success('Commented Successfully')
              this.getAllComments()
            }
          })
        }
        

}