import { Component, OnInit, ViewChild } from '@angular/core';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { HelperService } from 'src/app/Core/services/helper.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DatePipe],
})
export class HeaderComponent implements OnInit {
  startDate: Date | null | string = null;
  endDate: Date | null = null;
  capacity: number = 1;
  count: number = 1;
  startValue: Date | null = null;
  endValue: Date | null = null;
  params: any;
  exploreForm = new FormGroup({
    startDate: new FormControl(null),
    endDate: new FormControl(null),
    capacity: new FormControl(null),
  });
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;
  constructor(
    public _HelperService: HelperService,
    private router: Router,
    private datePipe: DatePipe
  ) {}
  ngOnInit(): void {}

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
  countUp() {
    this.capacity++;
  }
  countDown() {
    if (this.capacity > 1) {
      this.capacity--;
    }
  }
  explore(data: FormGroup) {
    this.params = data.value;
    let start = this.params.startDate;
    start = this.datePipe.transform(this.params.startDate, 'yyyy-MM-dd');
    let end = this.params.endDate;
    end = this.datePipe.transform(this.params.endDate, 'yyyy-MM-dd');
    let capacity = this.params.capacity;
    this.router.navigate(['/landingPage/home/rooms'], {
      queryParams: { startDate: start, endDate: end, capacity: capacity },
    });
  }
}
