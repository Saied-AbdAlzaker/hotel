import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAds } from '../../models/ads';

@Component({
  selector: 'app-view-ads',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.scss']
})


export class ViewAdsComponent {
  constructor( public dialogRef: MatDialogRef<ViewAdsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAds) {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
