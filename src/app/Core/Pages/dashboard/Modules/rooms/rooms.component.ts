import { Component, OnInit } from '@angular/core';
import { IFacilities, IRooms, IRoomsDetails } from './model/room';
import { RoomsService } from './services/rooms.service';
import { ViewRoomsComponent } from './components/view-rooms/view-rooms.component';
import { DeleteDialogComponent } from 'src/app/Shared/delete-dialog/delete-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime } from 'rxjs';


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
  constructor(private dialog:MatDialog,private _roomsService:RoomsService,private toastr:ToastrService) { }

  pageIndex: number = 0;
  pageSize: number = 10;
  pageNumber: number | undefined = 1;

  private searchSubject: Subject<string> = new Subject<string>();

  tableResponse:IRoomsDetails|undefined;
  tableData:IRooms[]=[];
  facilities: IFacilities[]=[];
  facilityId:IFacilities[]=[];
  searchValue:string=''
  imagePath:string = 'http://upskilling-egypt.com:3000/';

  ngOnInit() {
    this.getAllRooms();
    this.getFacilities();

    this.searchSubject.pipe(debounceTime(1000)).subscribe({
      next: (res) =>{
        console.log(res);
        this.getAllRooms();
      }
    })
  }

  getAllRooms(){
    let parms = {
      page: this.pageNumber,
      size: this.pageSize,
      roomNumber: this.searchValue,
      facilityId: this.facilityId,
    }

    this._roomsService.onGetAllRooms(parms).subscribe({
      next: (res)=>{
        console.log(res);
        this.tableResponse = res.data;
        // this.tableData = this.tableResponse?.rooms;

        this.tableData = res.data.rooms;
        console.log(this.tableData);

      }, error: (err) =>{
        this.toastr.error(err.error.message, 'Error!')
      }
    })
  }

  // Search
  onSearchInputChange() {
    this.searchSubject.next(this.searchValue);
  }

  getFacilities(){
    this._roomsService.onGetFacilities().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.facilities=res.data.facilities
      }
    })
  }


  openDeleteDialog(data:any): void {
    console.log(data);
    
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {data},
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        this.onDeleteRooms(result.id);
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

  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.getAllRooms();
  }
}
