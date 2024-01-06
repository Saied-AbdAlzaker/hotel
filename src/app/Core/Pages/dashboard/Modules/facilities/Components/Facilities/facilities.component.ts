import { FacilitiesService } from './../../Services/facilities.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent {

  // pageIndex: number = 0;
  // pageSize: number = 10;
  // pageNumber: number | undefined = 1;

  private searchSubject: Subject<string> = new Subject<string>();
  tableResponse:any;
  tableData:any;
  searchValue:string='';

  constructor(private dialog: MatDialog, private _facilitiesService:FacilitiesService,
    private _toastrService:ToastrService) {}

  
  ngOnInit() {
    this.getAllFacilities()
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
        this._toastrService.error(err.error.message,'Error!')
      }, complete: () => {
        this._toastrService.success('Facilities Added Successfully', 'Ok');
        this.getAllFacilities()
      }
    })
  }

  getAllFacilities(){
    let parms = {
      name: this.searchValue,
    }

    this._facilitiesService.getAllFacilities(parms).subscribe({
      next: (res)=>{
        console.log(res);
        this.tableResponse = res.data;
        this.tableData = this.tableResponse?.facilities;


      }, error: (err) =>{
        this._toastrService.error(err.error.message, 'Error!')
      }
    })
  }

  // Search
  onSearchInputChange() {
    this.searchSubject.next(this.searchValue);
  }
}



