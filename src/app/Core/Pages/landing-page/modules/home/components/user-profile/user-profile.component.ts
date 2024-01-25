import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IChangePassword } from 'src/app/Shared/models/iuser-admin';
import { ChangePasswordComponent } from 'src/app/Shared/navbar/components/change-password/change-password.component';
import { HomeService } from '../../services/home.service';
import { IUserProfile } from '../../models/home';
import { UsersService } from 'src/app/Core/Pages/dashboard/Modules/users/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit{
  userId: any = localStorage.getItem('userId');
  userProfile: IUserProfile | any;

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private _homeService: HomeService,
    private _UsersService:UsersService,

  ) {}

  ngOnInit(): void {
    this.getUserProfile(this.userId);
  }

  getUserProfile(id: string) {
    this._homeService.getUserById(id).subscribe({
      next: (res) => {
        this.userProfile= res.data.user;
        console.log(this.userProfile);
      },
    });
  }

  openDialogCahngePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: {},
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        this.changePasswordAdmin(result);
      }
    });
  }

  changePasswordAdmin(data: IChangePassword) {
    // this._userAdminService.onChangePassword(data).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (err: any) => {
    //     console.log(err.error.message);
    //     this.toastr.error(err.error.message, 'error!');
    //   },
    //   complete: () => {
    //     this.toastr.success('Password has been updated successfully', 'Done');
    //   },
    // });
  }
}
