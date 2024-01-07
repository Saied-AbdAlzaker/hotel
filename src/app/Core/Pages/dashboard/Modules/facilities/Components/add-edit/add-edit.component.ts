import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilitiesService } from '../../Services/facilities.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit{

    facilitiesName: string = '';
    isUpdatePage: boolean = false;
    isLoading: boolean = false;
    FacilitisId:any;

  constructor(public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private _ActivatedRoute:ActivatedRoute,private _FacilitiesService:FacilitiesService,private _ToastrService:ToastrService,private router:Router) {
      
     }

     
    
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }


}
