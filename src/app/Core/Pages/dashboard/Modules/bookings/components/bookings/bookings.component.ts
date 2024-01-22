import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { IBookings, IBookingsTable } from '../../model/booking';
import { DeleteDialogComponent } from 'src/app/Shared/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ViewBookingComponent } from '../view-booking/view-booking/view-booking.component';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  pageIndex: number = 0;
  pageSize: number = 5;
  pageNumber: number = 1;
  tableResponse: IBookingsTable|undefined;
  listBookings: IBookings[]|undefined=[];
  constructor(
    private _BookingService:BookingService,private dialog:MatDialog,private _toastrService:ToastrService
  ) { }

  ngOnInit() {
    this.getAllBookings()
  }
  getAllBookings(){
    let params ={
      page: this.pageNumber,
      size: this.pageSize
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

  openDeleteDialog(bookingData: any): void {
    console.log(bookingData);

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: bookingData,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        this.onDeleteBooking(result._id);
      }
    });
  }

  onDeleteBooking(id: string) {
    this._BookingService.ondeletedialog(id).subscribe({
      next: (res:any) => {
        console.log(res);
      },
      error: (err:any) => {
        this._toastrService.error(err.error.message, 'Error!');
        console.log(err);
      },
      complete: () => {
        this._toastrService.success('Booking Deleted Successfully', 'Ok');
        this.getAllBookings();
      },
    });
  }
  
  openViewDialog(bookingData:any){
    console.log(bookingData);

    const dialogRef = this.dialog.open(ViewBookingComponent, {
      data: bookingData,
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.getAllBookings();
  }
}
