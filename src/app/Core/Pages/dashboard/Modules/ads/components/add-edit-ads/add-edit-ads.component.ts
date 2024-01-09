import { AdsService } from '../../services/ads.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { IAddAds } from '../../models/ads';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit-ads.component.html',
  styleUrls: ['./add-edit-ads.component.scss']
})
export class AddEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    // this.getAllAds()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  // adsId:any;
  // isAddMode:boolean = true;
  // isEditMode:boolean = true;
  // isViewMode:boolean = true;
  // adsData:IAddAds|any;

  // constructor(private ActivatedRoute:ActivatedRoute, private _adsService:AdsService,
  //   private router: Router, private toastr: ToastrService, private _roomsService:RoomsService ) {

  //   this.adsId = ActivatedRoute.snapshot.params['_id'];
  //   console.log(this.adsId);

  //   if(this.adsId){
  //     this.isEditMode = false;
  //     this.getAdsById(this.adsId);
  //     ActivatedRoute.url.subscribe(url=> {
  //       this.isViewMode = url.some(segment=> segment.path === 'view');
  //       this.disableFormControls()
  //     })
  //     ActivatedRoute.url.subscribe(url=>{
  //       this.isEditMode = url.some(segment=> segment.path === 'edit');
  //       this.enableFormControls();
  //     })
  //   } else{
  //     this.isAddMode = true;
  //     this.isEditMode = false;
  //     this.isViewMode = false;
  //   }
  // }

  //  // Form
  //  adsForm = new FormGroup({
  //   room: new FormControl(null, [Validators.required]),
  //   discount: new FormControl(null, ),
  //   isActive: new FormControl(null, [Validators.required]),

  // })

  //  // Disable Formm
  //  disableFormControls() {
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
  // onSubmit(data: FormGroup) {
  //   let myData = new FormData();
  //   myData.append('room', data.value.room);
  //   myData.append('discount', data.value.discount);
  //   myData.append('isActive', data.value.isActive);
  //   if (this.adsId) {
  //     this._adsService.onEditAds(myData, this.adsId).subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.adsData = res.data.ads

  //       }, error: (err) => {

  //         this.toastr.error(err.error.message, 'failed');
  //       }, complete: () => {
  //         this.router.navigate(['/dashboard/rooms'])
  //         this.toastr.success('Rooms Updated Successfully');
  //       }
  //     })
  //   } else {

  //   }
  // }

  // // Ads By Id
  // getAdsById(id: string){
  //   this._adsService.onAdsById(id).subscribe({
  //     next: (res)=>{
  //       this.adsData = res.data.ads;
  //       console.log(this.adsData);

  //     },error:(err)=>{
  //       this.toastr.error(err.error.message, 'Error!')
  //     }, complete: ()=>{
  //       this.adsForm.patchValue({
  //         room: this.adsData.room,
  //         discount: this.adsData.discount,
  //         isActive: this.adsData.isActive,
  //       })
  //     }

  //   })
  // }

  // getAllAds() {
  //   this._adsService.getAllAds().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       // this.tableResponse = res;
  //       // this.tableData = this.tableResponse?.data;
  //       this.adsData= res.data.ads;
  //       console.log(this.adsData);
  //     },
  //   });
  // }

}
