import { AddEditComponent } from './add-edit/add-edit.component';
import { FacilitiesService } from './../../Services/facilities.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private dialog: MatDialog, private _facilitiesService:FacilitiesService,
    private _toastrService:ToastrService) {}

  
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

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      data: {},
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.onAddNewFacilities(result);
    });
  }

  onAddNewFacilities(data: String) {
    this._facilitiesService.addFacilities(data).subscribe({
      next: (res) => {
        console.log(res);
      }, error: (err) => {
        console.log(err);
      }, complete: () => {
        this._toastrService.success('Facilities Added Successfully', 'Ok');
        // 
      }
    })
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
