import { RoomsService } from './../../Services/rooms.service';
import { Component, OnInit } from '@angular/core';
import { IRoomsDetails, IRooms } from '../../Model/admin';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  size:number=10;
  page:number|undefined=1;
  tableResponse:IRoomsDetails|undefined;
  tableData:IRooms[]=[]
  searchValue:string=''
  imagePath:string = 'https://upskilling-egypt.com/';
  
  constructor(private _roomsService:RoomsService) { }

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

}
