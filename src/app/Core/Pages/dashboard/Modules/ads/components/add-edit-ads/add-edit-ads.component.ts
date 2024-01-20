import { Component, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAds } from '../../models/ads';
import { AdsService } from '../../services/ads.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IRoom } from '../../../rooms/model/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit-ads.component.html',
  styleUrls: ['./add-edit-ads.component.scss']
})
export class AddEditComponent implements OnInit {

  // isViewMode: boolean = true;

  pageIndex: number = 0;
  pageSize: number = 5;
  pageNumber: number = 1;
  totalCount: number = 0;


  isEditMode: boolean = true;
  isAddMode: boolean = true;
  adsId: any;

  tableResponse: any | undefined;
  tableData: IRoom | any;
  adsItems: IAds[] | undefined;

  // tableResponse: any;
  // tableData: IRooms[] = [];
  // adsItems: IAds[] = [];

  constructor(public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAds, private _roomsService: RoomsService,
    private _adsService: AdsService, private toastr: ToastrService, private router:Router) {

    this.adsId = data._id;
    console.log(this.adsId);


    if (this.adsId) {
      this.isEditMode = true;
      this.getAdsById(this.adsId);
    } else {
      this.isEditMode = false
    }
  }


  ngOnInit(): void {
    this.getAllRooms();
    // this.getAllAds();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // All Rooms
  getAllRooms() {
    let parms = {}

    this._roomsService.onGetAllRooms(parms).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res.data;
        this.tableData = this.tableResponse?.rooms;

      }, error: (err) => {
        this.toastr.error(err.error.message, 'Error!')
      }
    })
  }


 // All Ads
 getAllAds() {
  let parms = {
    totalCount: this.totalCount,
    page: this.pageNumber,
    size: this.pageSize
  }
  this._adsService.getAllAds(parms).subscribe({
    next: (res) => {
      console.log(res);
      this.tableResponse = res.data;
      this.adsItems = this.tableResponse?.ads;
      console.log(this.adsItems);
    },
  });
}

  // // Form
  adsForm = new FormGroup({
    room: new FormControl(null,),
    roomNumber: new FormControl(null,),
    discount: new FormControl(null,),
    isActive: new FormControl(null,),
  })

  // // Disable Formm
  // disableFormControls() {
  //   if (this.isViewMode) {
  //     this.adsForm.get('room')?.disable();
  //     this.adsForm.get('discount')?.disable();
  //     this.adsForm.get('isActive')?.disable();
  //   }
  // }
  // // Enable Form
  // enableFormControls() {
  //   if (this.isEditMode) {
  //     this.adsForm.get('room')?.enable();
  //     this.adsForm.get('discount')?.enable();
  //     this.adsForm.get('isActive')?.enable();

  //   }
  // }

  // // On Submit Form
  onSubmit(data: FormGroup) {
    let myData = new FormData();
    myData.append('room', data.value);
    // myData.append('roomNumber', data.value.roomNumber);
    myData.append('discount', data.value.discount);
    myData.append('isActive', data.value.isActive);

    if (this.adsId) {
      this._adsService.onEditAds(data, this.adsId).subscribe({
        next: (res) => {
          console.log(res);

        }, error: (err) => {

          this.toastr.error(err.error.message, 'failed');
        }, complete: () => {
          this.toastr.success('Updated Successfully');
          this.router.navigate(['/admin/dashboard/ads'])
          // this.getAllAds();
        }
      })
    } else {
      this._adsService.onAddAds(data).subscribe({
        next: (res) => {
          console.log(res);

        }, error: (err) => {
          this.toastr.error(err.error.message, 'Error!');
        }, complete: () => {
          this.toastr.success('Add Successfully');
          this.router.navigate(['/admin/dashboard/ads'])
          // this.getAllAds();
        }
      })
    }
  }


  // Room By Id
  getAdsById(id: string) {
    this._adsService.onAdsById(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.tableResponse = res;
        this.tableData = this.tableResponse?.data.ads;
        console.log(this.tableData);

      },
      error: (err) => {
        this.toastr.error(err.error.message)
      },
      complete: () => {

        this.adsForm.patchValue({
          room: this.tableData?.room,
          // roomNumber: this.tableData?.roomNumber,
          discount: this.tableData?.discount,
          isActive: this.tableData?.isActive
        });
      }
    }
    )
  }

}
