import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdsService } from '../../services/ads.service';
import { Router } from '@angular/router';
import { IAds } from '../../models/ads';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-ads',
  templateUrl: './edit-ads.component.html',
  styleUrls: ['./edit-ads.component.scss']
})
export class EditAdsComponent implements OnInit{

   pageSize: number = 5;
   pageNumber: number = 1;
   totalCount: number = 0;
   adsId: any;
 
   tableResponse: any | undefined;
   adsItems: IAds[] | any;
 
   constructor(public dialogRef: MatDialogRef<EditAdsComponent>,
     @Inject(MAT_DIALOG_DATA) public data: IAds, 
     private _adsService: AdsService, private toastr: ToastrService, private router:Router) {
 
     this.adsId = data._id;
     console.log(this.adsId);
     this.getAdsById(this.adsId);
 
   }
 
 
   ngOnInit(): void {
    //  this.getAllRooms();
     this.getAllAds();
   }
 
   onNoClick(): void {
     this.dialogRef.close();
   }
 
  //  // All Rooms
  //  getAllRooms() {
  //    let parms = {}
 
  //    this._roomsService.onGetAllRooms(parms).subscribe({
  //      next: (res) => {
  //        console.log(res);
  //        this.tableResponse = res.data;
  //        this.tableData = this.tableResponse?.rooms;
 
  //      }, error: (err) => {
  //        this.toastr.error(err.error.message, 'Error!')
  //      }
  //    })
  //  }
 
 
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
 
   // Form
   adsForm = new FormGroup({
     discount: new FormControl(null,),
     isActive: new FormControl(null,),
   })
 
   // // Disable Formm
   // disableFormControls() {
   //   if (this.isViewMode) {
   //     this.adsForm.get('room')?.disable();
   //   }
   // }
 
   // On Submit Form
   onSubmit(data: FormGroup) {

       this._adsService.onEditAds(data.value, this.adsId).subscribe({
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
   
   }
 
 
   // Ads By Id
   getAdsById(id: string) {
     this._adsService.onAdsById(id).subscribe({
       next: (res: any) => {
         console.log(res);
         this.tableResponse = res;
         this.adsItems = this.tableResponse?.data.ads;
         console.log(this.adsItems);
 
       },
       error: (err) => {
         this.toastr.error(err.error.message)
       },
       complete: () => {
 
         this.adsForm.patchValue({
          //  room: this.adsItems?.room,
           // roomNumber: this.adsItems?.roomNumber,
           discount: this.adsItems?.discount,
           isActive: this.adsItems?.isActive
         });
       }
     }
     )
   }
 

}
