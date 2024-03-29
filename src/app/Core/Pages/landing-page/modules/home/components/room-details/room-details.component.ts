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
import { MatDialog } from '@angular/material/dialog';
import { MustSignComponent } from 'src/app/Shared/must-sign/must-sign.component';

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
  rate:number=0;
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
    rating:new FormControl(this.rate),
    review: new FormControl(null),
  })


  constructor(
    private _HomeService: HomeService,
    public _HelperService: HelperService,
    private _ActivatedRoute: ActivatedRoute,
    private _UserBookingService: UserBookingService,
    private toastr: ToastrService,
    private Router: Router,
    public dialog: MatDialog

  ) {
    this.roomId = this._ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getRoomDetails(this.roomId);
    this.getAllComments()
    this.getAllReviews()
  }
  getRoomDetails(id: string) {
    this._HomeService.onGetRoomDetails(id).subscribe({
      next: (res) => {
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
        this.bookingId=res.data.booking._id
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Error!');
      },
      complete: () => {
        this.toastr.success('pay now to complete booking process', 'Success!');
        this.Router.navigate(['/landingPage/booking']
        ,{queryParams: { _id : this.bookingId },}
        );
        
      },
    });
  }

  getAllReviews(){
    this._HomeService.getAllReviews(this.roomId).subscribe({
      next:(res)=>{
        this.Reviews=res.data.roomReviews;
        this.rate=this.Reviews[0]?.rating
      }

    })
  }
  AddReview(data:FormGroup){
    this._HomeService.Addreview(data.value).subscribe({
      next:(res)=>{

      },error:(err)=>{
        this.toastr.error(err.error.message,'Error')
      },complete:()=>{
        this.toastr.success('Reviewed Successfully')
        this.getAllReviews()
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
  }

  handleEndOpenChange(open: boolean): void {
    this.generateDateRange();
  }

  generateDateRange(): void {
    const startDate = this.startValue;
    const endDate = this.endValue;
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      this.dateRange.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    this.totalPrice = this.dateRange.length * (this.priceRoom-this.roomDiscount);

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
            this.comments=res.data.roomComments;
           }
        })
      }
      Addcomment(data:FormGroup){
        if (!localStorage.getItem('role')) {
          this.openDialogMustSign();

        }
          this._HomeService.Addcomment(data.value).subscribe({
            next:(res)=>{

            },error:(err)=>{

            },complete:()=>{
              this.toastr.success('Commented Successfully')
              this.getAllComments()
            }
          })
        }

        openDialogMustSign(): void {
          const dialogRef = this.dialog.open(MustSignComponent, {
            data: {},
            width: '40%',
          });

          dialogRef.afterClosed().subscribe((result) => {
          });
        }
}
