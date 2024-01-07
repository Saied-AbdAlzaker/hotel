import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { IBookings } from '../../../model/booking';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';


@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss'],
})
export class ViewBookingComponent implements OnInit {
  bookingDetails: IBookings;
  mode: any = 'month';
  dateRange: Date[] = [];

  constructor(
    public dialogRef: MatDialogRef<ViewBookingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.bookingDetails = data;
    this.generateDateRange();
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
    console.log(this.dateRange);

  }
  onValueChange(value: Date): void {
    value=this.bookingDetails.startDate;
    console.log(`Current value: ${value}`);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    change.date= this.bookingDetails.endDate;
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }
  listDataMap = {
    eight: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }


}
