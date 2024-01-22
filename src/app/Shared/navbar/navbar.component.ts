import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAdminService } from '../services/user-admin.service';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { IChangePassword } from '../models/iuser-admin';
import { LogOutComponent } from './components/log-out/log-out.component';
import { UsersService } from 'src/app/Core/Pages/dashboard/Modules/users/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName: any = localStorage.getItem('userName');
  userData: any;
  currentUserId: any = localStorage.getItem('userId')
  constructor(
    public dialog: MatDialog,
    private _userAdminService: UserAdminService,
    private toastr: ToastrService,
    private _UsersService:UsersService
  ) {}
  ngOnInit(): void {
    this.getUserProfile(this.currentUserId)
  }
  
  openDialogCahngePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: {},
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        this.changePasswordAdmin(result);
      }
    });
  }

  changePasswordAdmin(data: IChangePassword) {
    this._userAdminService.onChangePassword(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err.error.message);
        this.toastr.error(err.error.message, 'error!');
      },
      complete: () => {
        this.toastr.success('Password has been updated successfully', 'Done');
      },
    });
  }
  openDialogLogOut(): void {
    const dialogRef = this.dialog.open(LogOutComponent, {
      data: {},
      width: '30%',
      // height: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  getUserProfile(id:string){
    this._UsersService.onGetUserProfile(id).subscribe({
      next:(res:any)=>{
        this.userData=res.data
        // console.log(res.data.profileImage);
      }
    })
  }
}
