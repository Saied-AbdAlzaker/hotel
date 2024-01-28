import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent {

  constructor(
    private Router:Router,
    private dialogRef: MatDialogRef<LogOutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public toastr:ToastrService,

     ) {}
logout(){
  localStorage.clear()
  this.onNoClick()
  this.toastr.success('You Loged out')
  this.Router.navigate(['/landingPage'])
  window.location.reload()

}
onNoClick(): void {
  this.dialogRef.close();
}
}
