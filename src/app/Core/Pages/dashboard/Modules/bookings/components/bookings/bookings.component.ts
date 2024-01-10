import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { IBookings, IBookingsTable } from '../../model/booking';
import { DeleteDialogComponent } from 'src/app/Shared/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

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

  openDeleteDialog(facilityData: any): void {
    console.log(facilityData);

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: facilityData,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        this.onDeleteFacilities(result._id);
      }
    });
  }

  onDeleteFacilities(id: string) {
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
  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.getAllBookings();
  }
}
