import { Component, OnInit } from '@angular/core';
import { IFacilities, IRooms, IRoomsDetails, Idelete } from './model/room';
import { RoomsService } from './services/rooms.service';
import { ViewRoomsComponent } from './components/view-rooms/view-rooms.component';
import { DeleteDialogComponent } from 'src/app/Shared/delete-dialog/delete-dialog.component';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private dialog:MatDialog,private _roomsService:RoomsService,private toastr:ToastrService) { }
  size:number=10;
  page:number|undefined=1;
  tableResponse:IRoomsDetails|undefined;
  tableData:IRooms[]=[];
  facilities: IFacilities[]=[];
  facilityId:IFacilities[]=[];
  searchValue:string=''
  // imagePath:string = 'http://upskilling-egypt.com:3000/';
  imagePath:string = 'https://upskilling-egypt.com/';

  ngOnInit() {
    this.getAllRooms();
    this.getFacilities();
  }

  getAllRooms(){
    let parms = {
      page: this.page,
      size: this.size,
      roomNumber: this.searchValue,
      facilityId: this.facilityId,
    }

    this._roomsService.onGetAllRooms(parms).subscribe({
      next: (res)=>{
        console.log(res);
        // this.tableResponse = res.data;
        // this.tableData = this.tableResponse?.rooms;

        this.tableData = res.data.rooms;
        

      }
    })
  }

  getFacilities(){
    this._roomsService.onGetFacilities().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.facilities=res.data.facilities    
      }
    })
  }


  openDeleteDialog(data:Idelete): void {
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

  onDeleteRooms(id: Idelete) {
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
}
