import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { IBookings, IBookingsTable } from '../../model/booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  pageIndex: number = 0;
  pageSize: number = 10;
  pageNumber: number = 1;
  tableResponse: IBookingsTable|undefined;
  listBookings: IBookings[]|undefined=[];
  constructor(
    private _BookingService:BookingService
  ) { }

  ngOnInit() {
    this.getAllBookings()
  }
  getAllBookings(){
    let params ={
      pageNumber: this.pageNumber,
      pageSize: this.pageSize
    }
    this._BookingService.onGetAllBookings(params).subscribe({
      next:(res)=>{
        console.log(res);
        this.tableResponse=res.data
        this.listBookings= res?.data?.booking
        console.log(this.listBookings);
        
      }
    })
  }

  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    // this.getAllRooms();
  }
}
