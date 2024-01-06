import { Component, OnInit } from '@angular/core';
import { IFacilities, IRooms, IRoomsDetails } from './model/room';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  size:number=10;
  page:number|undefined=1;
  tableResponse:IRoomsDetails|undefined;
  tableData:IRooms[]=[];
  facilities: IFacilities[]=[];
  facilityId:IFacilities[]=[];
  searchValue:string=''
  // imagePath:string = 'http://upskilling-egypt.com:3000/';
  imagePath:string = 'https://upskilling-egypt.com/';
  
  constructor(private _roomsService:RoomsService,) { }

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

}
