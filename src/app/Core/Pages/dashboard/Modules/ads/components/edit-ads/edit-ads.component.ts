import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdsService } from '../../services/ads.service';
import { Router } from '@angular/router';
import { IAds } from '../../models/ads';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { IRoom } from '../../../rooms/model/room';

@Component({
  selector: 'app-edit-ads',
  templateUrl: './edit-ads.component.html',
  styleUrls: ['./edit-ads.component.scss']
})
export class EditAdsComponent implements OnInit {

  pageSize: number = 5;
  pageNumber: number = 1;
  totalCount: number = 0;
  adsId: any;

  tableResponse: any;
  tableData: IRoom | any;
  adsItems: IAds[] | undefined;

  constructor(public dialogRef: MatDialogRef<EditAdsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _roomsService: RoomsService,
    private _adsService: AdsService, private toastr: ToastrService, private router: Router) {

    this.adsId = data._id;
    console.log(this.adsId);
    this.getAdsById(this.adsId);
    this.disableFormControls();

  }


  ngOnInit(): void {
    this.getAllAds();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // All Rooms
  getAllRooms() {
    let parms = {}

    this._roomsService.onGetAllRooms(parms).subscribe({
      next: (res) => {
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
        this.tableResponse = res.data;
        this.adsItems = this.tableResponse?.ads;
      },
    });
  }

  // Form
  adsForm = new FormGroup({
    room: new FormControl(null, Validators.required),
    discount: new FormControl(null, Validators.required),
    isActive: new FormControl(null, Validators.required),
  })

  // Disable Formm
  disableFormControls() {
    this.adsForm.get('room')?.disable();
  }

  // On Submit Form
  onSubmit(data: FormGroup) {

    this._adsService.onEditAds(data.value, this.adsId).subscribe({
      next: (res) => {

      }, error: (err) => {

        this.toastr.error(err.error.message, 'failed');
      }, complete: () => {
        this.toastr.success('Updated Successfully');
        this.onNoClick();
      }
    })

  }

  // Ads By Id
  getAdsById(data: any) {

    this.adsForm.patchValue({
      discount: data.room?.discount,
      isActive: data.isActive
    })

  }


}
