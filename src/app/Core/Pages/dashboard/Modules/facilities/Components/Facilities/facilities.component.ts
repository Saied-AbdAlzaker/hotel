import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DeleteDialogComponent } from 'src/app/Shared/delete-dialog/delete-dialog.component';

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

  constructor(private dialog:MatDialog,private toastr:ToastrService) { }

  ngOnInit() {

  }


  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
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
        this.onDeleteRooms(result._id);
      }
    });
  }

  onDeleteRooms(id: string) {

  }
}
