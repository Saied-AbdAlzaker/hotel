import { FacilitiesService } from './../../Services/facilities.service';
import { Component } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

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
    private _toastrService:ToastrService) {
      
     
    }

  
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
  openEditDialog(FacilitiesData:any): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      data: {facilditiesName:FacilitiesData.name},
      width: '40%',
    });
    console.log(FacilitiesData.name);
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        console.log(result);
        
        this.onEditNewFacilities(FacilitiesData._id,result);

      }
    });
  }

  onEditNewFacilities(_id:string,data:string) {
    this._facilitiesService.editFacilities(_id,data).subscribe({
      next: (res) => {
        console.log(res);
      }, error: (err) => {
        this._toastrService.error(err.error.message,'Error!')
      }, complete: () => {
        this._toastrService.success('Facilities Updeded Successfully', 'Ok');
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



