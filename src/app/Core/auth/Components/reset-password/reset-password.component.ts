import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit{

  userEmail=localStorage.getItem('email');
  Message:string='';
  hideConfirm:boolean = true;
  hide:boolean = true;
  constructor(
    private _AuthService:AuthService,
     private tostar:ToastrService,
     private router:Router  
  ){ }

  ngOnInit(): void {
    
  }

  resetPasswordForm = new FormGroup({
    email:new FormControl(this.userEmail,[Validators.required,Validators.email]),
    password:new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$'),]),
    confirmPassword:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    seed:new FormControl(null,[Validators.required]),
  },{validators: this.passwordMatchValidator,})

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
  onSubmit(data:FormGroup){
     this._AuthService.onRestPassword(data.value).subscribe({
      next:(res:any)=>{
        this.Message=res.message;
        
      },error:(err)=>{
       this.tostar.error(err.error.message,'Error');
      },complete:()=>{
        this.tostar.success(this.Message,'Successfully');
        this.router.navigate(['/auth/signin'])

      }
    })
    
    
  }

}
