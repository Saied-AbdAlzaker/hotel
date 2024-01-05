import { AdsService } from '../../services/ads.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit-ads.component.html',
  styleUrls: ['./add-edit-ads.component.scss']
})
export class AddEditComponent {

  adsId:any;
  isAddMode:boolean = true;
  isEditMode:boolean = true;
  isViewMode:boolean = true;
  adsData:any;

  constructor(private ActivatedRoute:ActivatedRoute, private _adsService:AdsService,
    private router: Router, private toastr: ToastrService, ) {

    this.adsId = ActivatedRoute.snapshot.params['id'];
    console.log(this.adsId);

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

 // Form
 adsForm = new FormGroup({
  room: new FormControl(null, [Validators.required]),
  discount: new FormControl(null, [Validators.required]),
  isActive: new FormControl(null, [Validators.required]),

})

 // Disable Formm
 disableFormControls() {
  if (this.isViewMode) {
    this.adsForm.get('room')?.disable();
    this.adsForm.get('discount')?.disable();
  }
}
// Enable Form
enableFormControls() {
  if (this.isEditMode) {
    this.adsForm.get('room')?.enable();
    this.adsForm.get('discount')?.enable();

  }
}

// On Submit Form
onSubmit(data: FormGroup) {
  let myData = new FormData();
  myData.append('room', data.value.room);
  myData.append('discount', data.value.discount);
  if (this.adsId) {
    this._adsService.onEditAds(myData, this.adsId).subscribe({
      next: (res) => {
        console.log(res);
      }, error: (err) => {

        this.toastr.error(err.error.message, 'failed');
      }, complete: () => {
        this.router.navigate(['/dashboard/rooms'])
        this.toastr.success('Rooms Updated Successfully');
      }
    })
  } else {
    this._adsService.onAddAds(myData).subscribe({
      next: (res) => {
        console.log(res);
      }, error: (err) => {
        this.toastr.error(err.error.message, 'Error!');
      }, complete: () => {
        this.router.navigate(['dashboard/ads'])
        this.toastr.success('Ads Added Successfully');
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
      this.toastr.error(err.error.message, 'Error!')
    }, complete: ()=>{
      this.adsForm.patchValue({
        room: this.adsData.room,
        discount: this.adsData.discount,
      })
    }

  })
}

}
