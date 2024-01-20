import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HelperService } from 'src/app/Core/services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserBookingService } from '../../../booking/services/userBooking.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
  roomId:string=this._ActivatedRoute.snapshot.params['id']
  roomDetails:any;
  roomImages:any[]=[];
  roomFacilities:any[]=[];
  bookingId:string='';
  startValue: Date | null = null;
  endValue: Date | null = null;
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;
  bookingForm = new FormGroup({
    startDate: new FormControl(null,[Validators.required]),
    endDate: new FormControl(null,[Validators.required]),
    room: new FormControl(this.roomId),
    totalPrice: new FormControl(6000)
  })
  constructor(private _HomeService:HomeService,
    public _HelperService:HelperService,
    private _ActivatedRoute:ActivatedRoute,
    private _UserBookingService:UserBookingService,
    private toastr:ToastrService,
    private Router:Router,
    private fb: FormBuilder
    ){}
    
  ngOnInit(): void {    
    this.getRoomDetails(this.roomId)
  }
  getRoomDetails(id:string){
    this._HomeService.onGetRoomDetails(id).subscribe({
      next:(res)=>{
        this.roomDetails=res.data.room;
        this.roomImages=res.data.room.images
        this.roomFacilities=this.roomDetails.facilities      
      }
    })
  }

  bookingRoom(data:FormGroup){
    this._UserBookingService.onBookingRoom(data.value).subscribe({
      next:(res)=>{
      },error:(err)=>{
        this.toastr.error(err.error.message,'Error!')
      },complete:()=>{
        this.toastr.success('pay now to complete booking process','Success!');
        this.Router.navigate(['/landingPage/booking'])
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
    console.log('handleEndOpenChange', open);
  }
  
  calculateNumberOfDays(): number | null {
    const startDate: any = this.bookingForm.value.startDate;
    const endDate: any = this.bookingForm.value.endDate;
    if (startDate && endDate) {
      const timeDifference = endDate.getTime() - startDate.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
      return daysDifference;
    }
    return null;
  }
}
