import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { Subject } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/Shared/delete-dialog/delete-dialog.component';
import { FacilitiesService } from '../../services/facilities.service';

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
  openDeleteDialog(facilityData:any): void {
    console.log(facilityData);

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: facilityData,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        this.onDeleteFacilities(result._id);
      }
    });
  }

  onDeleteFacilities(id: string) {
    this._facilitiesService.ondeletedialog(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this._toastrService.error(err.error.message, 'Error!');
        console.log(err);
      },
      complete: () => {
        this._toastrService.success('Facility Deleted Successfully', 'Ok');
        this.getAllFacilities();
      },
    });
  }
}
