import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Core/Pages/landing-page/modules/home/services/home.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  hide: boolean = false;
  changeForm = new FormGroup({
    oldPassword: new FormControl(null, [Validators.required, Validators.pattern('')]),
    newPassword: new FormControl(null,[Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    confirmPassword: new FormControl(null,[Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),

  });


  constructor(
    private dialogRef: MatDialogRef<ChangePasswordComponent>,
    private _homeService: HomeService,
    private toastr: ToastrService,


  ) {

  }
  passwordMatchValidator(control: any) {
    let password =control.get('password');
    let confirmPassword=control.get('confirmPassword')
    if (password.value == confirmPassword.value) {
      return null;
    } else {
      control
        .get('confirmPassword')
        ?.setErrors({ invalid: 'password and confirm password not match' });
      return { invalid: 'password and confirm password not match' };
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(data:FormGroup){
    if(localStorage.getItem('role')=='user'){
        this._homeService.changePasswordUser(data.value).subscribe({
            next: (res) => {
              console.log(res);
            },
            error: (err: any) => {
              console.log(err.error.message);
              this.toastr.error(err.error.message, 'error!');
            },
            complete: () => {
              this.onNoClick();
              this.toastr.success('Password has been updated successfully', 'Done');
            },
          });
    }

  }
}


