import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  receivedBoolean: boolean = true;

  constructor() { }

  handleBooleanChange(value: boolean) {
    this.receivedBoolean = value;
  }

}
