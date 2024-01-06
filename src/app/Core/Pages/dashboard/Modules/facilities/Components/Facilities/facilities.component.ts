import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { IFacilities } from '../../../rooms/model/room';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
  facilities: IFacilities[]=[];

  pageIndex: number = 0;
  pageSize: number = 10;
  pageNumber: number | undefined = 1;
  imagePath:string = 'http://upskilling-egypt.com:3000/';
  constructor(private _roomService:RoomsService){}

  
  ngOnInit() {
    this.getFacilities();
    // this.getAllRooms();
    // this.getFacilities();

    // this.searchSubject.pipe(debounceTime(1000)).subscribe({
    //   next: (res) =>{
    //     console.log(res);
    //     this.getAllRooms();
    //   }
    // })
  }

  // getAllRooms(){
  //   let parms = {
  //     page: this.pageNumber,
  //     size: this.pageSize,
  //     roomNumber: this.searchValue,
  //     facilityId: this.facilityId,
  //   }

  //   this._roomsService.onGetAllRooms(parms).subscribe({
  //     next: (res)=>{
  //       console.log(res);
  //       this.tableResponse = res.data;
  //       // this.tableData = this.tableResponse?.rooms;

  //       this.tableData = res.data.rooms;
  //       console.log(this.tableData);

  //     }, error: (err) =>{
  //       this.toastr.error(err.error.message, 'Error!')
  //     }
  //   })
  // }

  // Search
  // onSearchInputChange() {
  //   this.searchSubject.next(this.searchValue);
  // }
 

  getFacilities(){
    this._roomService.onGetFacilities().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.facilities=res.data.facilities
      }
    })
  }

  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
  }
}
