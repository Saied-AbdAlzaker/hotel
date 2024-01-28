import { Component } from '@angular/core';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AdsService } from '../../services/ads.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IRoom } from '../../../rooms/model/room';
import { IAds } from '../../models/ads';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent {

   pageSize: number = 5;
   pageNumber: number = 1;
   totalCount: number = 0;
 
   tableResponse: any | undefined;
   tableData: IRoom | any;
   adsItems: IAds[] | undefined;
 
   constructor(public dialogRef: MatDialogRef<AddAdsComponent>,
     private _roomsService: RoomsService,
     private _adsService: AdsService, private toastr: ToastrService, private router:Router) {}
 
 
   ngOnInit(): void {
     this.getAllRooms();
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
     room: new FormControl(null,Validators.required),
     discount: new FormControl(null,Validators.required),
     isActive: new FormControl(null,Validators.required)
   })
 
   // On Submit Form
   onSubmit(data: FormGroup) {
 
       this._adsService.onAddAds(data.value).subscribe({
         next: (res) => {
 
         }, error: (err) => {
           this.toastr.error(err.error.message, 'Error!');
         }, complete: () => {
           this.toastr.success('Add Successfully');
           this.onNoClick();
         }
       })
     }
   }
 
 

