import { Component, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IRooms } from '../../../rooms/model/room';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit-ads.component.html',
  styleUrls: ['./add-edit-ads.component.scss']
})
export class AddEditComponent implements OnInit {

  tableResponse: any;
  tableData: IRooms[] = [];

  constructor(public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _roomsService: RoomsService,
    private _toastrService: ToastrService,) { }


  ngOnInit(): void {
    this.getAllRooms();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // All Rooms
  getAllRooms() {
    let parms = {}

    this._roomsService.onGetAllRooms(parms).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res.data;
        this.tableData = this.tableResponse?.rooms;

      }, error: (err) => {
        this._toastrService.error(err.error.message, 'Error!')
      }
    })
  }

}
