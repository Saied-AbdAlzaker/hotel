import { RoomsService } from './../../Services/rooms.service';
import { Component, OnInit } from '@angular/core';
import { ViewRoomsComponent } from './components/view-rooms/view-rooms.component';
import { MatDialog } from '@angular/material/dialog';
import { IRoomsDetails, IRooms } from '../../Model/admin';
import { DeleteDialogComponent } from 'src/app/Shared/delete-dialog/delete-dialog.component';
import { ToastrService } from 'ngx-toastr';


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
  tableData:IRooms[]=[]
  searchValue:string=''
  imagePath:string = 'https://upskilling-egypt.com/';
  
  

  ngOnInit() {
    this.getAllRooms()
  }

  getAllRooms(){
    let params = {
      page: this.page,
      size: this.size,
      roomNumber: this.searchValue,

    }

    this._roomsService.onGetAllRooms(params).subscribe({
      next: (res: IRoomsDetails)=>{
        console.log(res.data);
        this.tableResponse = res;
        this.tableData = this.tableResponse?.data;
      }
    })
  }


  openDeleteDialog(tableData: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: tableData,
      width: '35%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result.id);
        this.onDeleteRooms(result.id);
      }
    });
  }

  onDeleteRooms(id: number) {
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
