import { AdsService } from '../../services/ads.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { IAddAds } from '../../models/ads';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IRooms } from '../../../rooms/model/room';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit-ads.component.html',
  styleUrls: ['./add-edit-ads.component.scss']
})
export class AddEditComponent implements OnInit {

  adsId:any;
  isAddMode:boolean = true;
  isEditMode:boolean = true;
  isViewMode:boolean = true;
  adsData:IAddAds|any;

  tableResponse: any;
  tableData: IRooms[] = [];
  totalCount: number = 0;

  constructor(public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private ActivatedRoute:ActivatedRoute,
     private _adsService:AdsService,  private router: Router,
    private _toastrService: ToastrService, private _roomsService:RoomsService ) {

      this.adsId = ActivatedRoute.snapshot.params['id'];
      // console.log(this.adsId);
      // if(this.adsId){
      //   this.isEditMode=true;
      //   this.isAddMode=false;
      // }else{
      //   this.isEditMode=false;
      //   this.isAddMode=true;
      // }
      // console.log(this.adsId);
  
      if(this.adsId){
        this.isAddMode = false;
        this.getAdsById(this.adsId);
        ActivatedRoute.url.subscribe(url=> {
          this.isViewMode = url.some(segment=> segment.path === 'view');
          this.disableFormControls()
        })
        ActivatedRoute.url.subscribe(url=>{
          this.isEditMode = url.some(segment=> segment.path === 'edit');
          this.enableFormControls();
        })
      } else{
        this.isAddMode = true;
        this.isEditMode = false;
        this.isViewMode = false;
      }
    }
     

  ngOnInit(): void {
    // this.getAllAds();
    this.getAllRooms();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


   // Form
   adsForm = new FormGroup({
    room: new FormControl(null, [Validators.required]),
    discount: new FormControl(null, ),
    isActive: new FormControl(null, [Validators.required]),

  })

  // //  // Disable Formm
   disableFormControls() {
    if (this.isViewMode) {
      this.adsForm.get('room')?.disable();
      this.adsForm.get('discount')?.disable();
      this.adsForm.get('isActive')?.disable();
    }
  }
  // Enable Form
  enableFormControls() {
    if (this.isEditMode) {
      this.adsForm.get('room')?.enable();
      this.adsForm.get('discount')?.enable();
      this.adsForm.get('isActive')?.enable();
    }
  }

  // On Submit Form
  onSubmit(data: FormGroup) {
    let myData = new FormData();
    myData.append('room', data.value.room);
    myData.append('discount', data.value.discount);
    myData.append('isActive', data.value.isActive);

    if (this.adsId) {
      this._adsService.onEditAds(myData, this.adsId).subscribe({
        next: (res) => {
          console.log(res);
          this.adsData = res.data.ads

        }, error: (err) => {

          this._toastrService.error(err.error.message, 'failed');
        }, complete: () => {
          this.router.navigate(['/dashboard/ads'])
          this._toastrService.success('Rooms Updated Successfully');
        }
      })
    } else {
      this._adsService.onAddAds(myData).subscribe({
        next: (res) => {
          console.log(res);
          // this.adsData = res.data.ads;
  
        }, error: (err) => {
          this._toastrService.error(err.error.message, 'Error!');
        }, complete: () => {
          this.router.navigate(['/dashboard/ads'])
          this._toastrService.success('Ads Added Successfully');
          // this.getAllAds();
        }
      })
    }
  }

  // Ads By Id
  getAdsById(id: string){
    this._adsService.onAdsById(id).subscribe({
      next: (res)=>{
        this.adsData = res.data.ads;
        console.log(this.adsData);

      },error:(err)=>{
        this._toastrService.error(err.error.message, 'Error!')
      }, complete: ()=>{
        this.adsForm.patchValue({
          room: this.adsData.room,
          discount: this.adsData.discount,
          isActive: this.adsData.isActive,
        })
      }

    })
  }

  getAllAds() {
    let parms = {
      totalCount: this.totalCount,
    }
    this._adsService.getAllAds(parms).subscribe({
      next: (res) => {
        console.log(res);
        // this.tableResponse = res;
        // this.tableData = this.tableResponse?.data;
        this.adsData= res.data.ads;
        console.log(this.adsData);


      },
    });
  }

  getAllRooms() {
    let parms = { }

    this._roomsService.onGetAllRooms(parms).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res.data;
        this.tableData = this.tableResponse?.rooms;

      }, error: (err) => {
        this._toastrService.error(err.error.message, 'Error!')
      }
    })
  }

}
