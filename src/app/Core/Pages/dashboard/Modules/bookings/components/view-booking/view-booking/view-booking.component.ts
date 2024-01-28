import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { IBookings } from '../../../model/booking';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { getISOWeek } from 'date-fns';


@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss'],
})
export class ViewBookingComponent implements OnInit {
  bookingDetails: IBookings;
  mode: any = 'month';
  dateRange: Date[] = [];
  endaandsratrange: Date[] = [];

  constructor(
    public dialogRef: MatDialogRef<ViewBookingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.bookingDetails = data;
    this.generateDateRange();
    this.endAnddate();
  }
  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  generateDateRange(): void {
    const startDate = new Date(this.bookingDetails.startDate);
    const endDate = new Date(this.bookingDetails.endDate);

    const daysToAdd = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));

    Array.from({ length: daysToAdd + 1 }).forEach((_, index) => {
      const currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + index);
      this.dateRange.push(currentDate);
    });

  }
endAnddate():void{
  const startDate = new Date(this.bookingDetails.startDate);
  const endDate = new Date(this.bookingDetails.endDate);
  this.endaandsratrange.push(startDate);
  this.endaandsratrange.push(endDate);
}
  onValueChange(value: Date): void {
    value=this.bookingDetails.startDate;
    console.log(`Current value: ${value}`);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    change.date= this.bookingDetails.endDate;

  }


  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }
  date = null;
  rangeDate = null;

  onChange(result: Date): void {

  }

  getWeek(result: Date): void {
  }

}
