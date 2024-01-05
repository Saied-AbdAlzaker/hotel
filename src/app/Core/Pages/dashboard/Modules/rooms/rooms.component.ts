import { Component, OnInit } from '@angular/core';
import { ViewRoomsComponent } from './components/view-rooms/view-rooms.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  openViewDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ViewRoomsComponent,
       {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

}
