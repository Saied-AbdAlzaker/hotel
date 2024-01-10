import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { Subject, debounceTime } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/Shared/delete-dialog/delete-dialog.component';
import { FacilitiesService } from '../../Services/facilities.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent {

  private searchSubject: Subject<string> = new Subject<string>();
  tableResponse: any;
  tableData: any;
  searchValue: string = '';
  totalCount: number=0;

  constructor(private dialog: MatDialog, private _facilitiesService: FacilitiesService,
    private _toastrService: ToastrService) { }

  ngOnInit() {
    this.getAllFacilities();
    this.searchSubject.pipe(debounceTime(1000)).subscribe({
      next: (res) =>{
        console.log(res);
        this.getAllFacilities();
      }
    })

  }

  // All Facilities
  getAllFacilities() {
    let parms = {
      name: this.searchValue,
    }

    this._facilitiesService.getAllFacilities(parms).subscribe({
      next: (res:any) => {
        console.log(res);
        this.tableResponse = res.data;
        this.tableData = this.tableResponse?.facilities;


      }, error: (err:any) => {
        this._toastrService.error(err.error.message, 'Error!')
      }
    })
  }
  // Search
  onSearchInputChange() {
    this.searchSubject.next(this.searchValue);
  }

  // Add Facilities
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      data: {},
      width: '30%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.onAddNewFacilities(result.name);
    });
  }

  onAddNewFacilities(data: String) {
    this._facilitiesService.addFacilities(data).subscribe({
      next: (res:any) => {
        console.log(res);
      }, error: (err:any) => {
        this._toastrService.error(err.error.message, 'Error!')
      }, complete: () => {
        this._toastrService.success('Facilities Added Successfully', 'Ok');
        this.getAllFacilities()
      }
    })
  }

  // Edit Facilities
  openEditDialog(FacilitiesData: any): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      data: FacilitiesData,
      width: '40%',
    });
    console.log(FacilitiesData.name);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);

        this.onEditNewFacilities(result._id, FacilitiesData.name);

      }
    });
  }

  onEditNewFacilities(_id: string, data: string) {
    this._facilitiesService.editFacilities(_id, data).subscribe({
      next: (res:any) => {
        console.log(res);
      }, error: (err:any) => {
        this._toastrService.error(err.error.message, 'Error!')
      }, complete: () => {
        this._toastrService.success('Facilities Updeded Successfully', 'Ok');
        this.getAllFacilities()
      }
    })
  }

  // Delete Facilities
  openDeleteDialog(facilityData: any): void {
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
      next: (res:any) => {
        console.log(res);
      },
      error: (err:any) => {
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


