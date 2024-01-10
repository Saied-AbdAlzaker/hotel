import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-ads',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.scss']
})
export class ViewAdsComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<ViewAdsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {}

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
