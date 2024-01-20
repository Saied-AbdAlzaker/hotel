import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HelperService } from 'src/app/Core/services/helper.service';
import { ActivatedRoute } from '@angular/router';
import { getISOWeek } from 'date-fns';
import { UserBookingService } from '../../../booking/services/userBooking.service';


@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
  roomDetails:any;
  roomImages:any[]=[];
  roomFacilities:any[]=[];
  roomId:string='';
  constructor(private _HomeService:HomeService,
    public _HelperService:HelperService,
    private _ActivatedRoute:ActivatedRoute,
    private _UserBookingService:UserBookingService
    ){
      this.roomId=this._ActivatedRoute.snapshot.params['id']
    }
  ngOnInit(): void {
    this.getRoomDetails(this.roomId)
  }
  getRoomDetails(id:string){
    this._HomeService.onGetRoomDetails(id).subscribe({
      next:(res)=>{
        this.roomDetails=res.data.room;
        console.log(this.roomDetails);
        this.roomImages=res.data.room.images
        this.roomFacilities=this.roomDetails.facilities              
      }
    })
  }

  bookingRoom(date:any){
    this._UserBookingService.onBookingRoom(date).subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
  }

  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }
  toFixedValue = 2;
  cutValue = 2;
  customFnValue = 2;
  precision = 2;
  customPrecisionFn(value: string | number, precision?: number): number {
    return +Number(value).toFixed(precision! + 1);
  }

}
