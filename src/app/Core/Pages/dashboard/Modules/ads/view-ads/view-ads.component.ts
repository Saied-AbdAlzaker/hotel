import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-ads',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.scss']
})


export class ViewAdsComponent {
  constructor( public dialogRef: MatDialogRef<ViewAdsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.disableFormControls();
  }
  
   viewForm = new FormGroup({
    roomNumber: new FormControl(null, [Validators.required]),
    isActive: new FormControl(null, [Validators.required]),
    createdBy: new FormControl(null, [Validators.required]),
    createdAt: new FormControl(null, [Validators.required]),
    updatedAt: new FormControl(null, [Validators.required]),


  
  })
  
  disableFormControls(){
    this.viewForm.get('roomNumber')?.disable();
    this.viewForm.get('isActive')?.disable();
    this.viewForm.get('createdBy')?.disable();
    this.viewForm.get('createdAt')?.disable();
    this.viewForm.get('updatedAt')?.disable();


  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
