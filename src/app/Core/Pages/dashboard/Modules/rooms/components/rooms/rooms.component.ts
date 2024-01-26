import { Component, OnInit } from '@angular/core';
import { IFacilities, IRoom } from '../../model/room';
import { RoomsService } from '../../services/rooms.service';
import { ViewRoomsComponent } from '../view-rooms/view-rooms.component';
import { DeleteDialogComponent } from 'src/app/Shared/delete-dialog/delete-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  pageIndex: number = 0;
  pageSize: number = 5;
  pageNumber: number | undefined = 1;

  searchValue: string = '';
  private searchSubject: Subject<string> = new Subject<string>();

  tableResponse: any;
  tableData: IRoom[] = [];
  facilities: IFacilities[] | undefined = [];
  facilityId: IFacilities[] = [];
  // facilityId: any;
  capacityName: string = '';
  constructor(
    private dialog: MatDialog,
    private _roomsService: RoomsService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllRooms();
    this.getFacilities();

    this.searchSubject.pipe(debounceTime(1000)).subscribe({
      next: (res) => {
        console.log(res);
        this.getAllRooms();
      },
    });
  }
  // All Rooms
  getAllRooms() {
    let parms = {
      page: this.pageNumber,
      size: this.pageSize,
      roomNumber: this.searchValue,
      facilityId: this.facilityId,
      capacity: this.capacityName,
    };
    this._roomsService.onGetAllRooms(parms).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res.data;
        this.tableData = this.tableResponse?.rooms;
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Error!');
      },
    });
  }

  // Search
  onSearchInputChange() {
    this.searchSubject.next(this.searchValue);
  }

  // Facilities
  getFacilities() {
    this._roomsService.onGetFacilities().subscribe({
      next: (res: any) => {
        console.log(res);
        this.facilities = res.data.facilities;
      },
    });
  }

  // Delete Rooms
  openDeleteDialog(roomData: any): void {
    console.log(roomData);

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: roomData,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        this.onDeleteRooms(result._id);
      }
    });
  }

  onDeleteRooms(id: string) {
    this._roomsService.ondeletedialog(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Error!');
        console.log(err);
      },
      complete: () => {
        this.toastr.success('Rooms Deleted Successfully', 'Ok');
        this.getAllRooms();
      },
    });
  }

  // View Rooms
  openViewDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ViewRoomsComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  // Pagination
  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.getAllRooms();
  }
}
