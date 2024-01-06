import { Component } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent {
  tableData:any;
  pageIndex: number = 0;
  pageSize: number = 10;
  pageNumber: number | undefined = 1;
  imagePath:string = 'http://upskilling-egypt.com:3000/';

  
  ngOnInit() {
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
  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
  }
}
