import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  imgSrc: any;
  files: File[] = [];
  userEmail: any;
  hide:boolean=true;
  hideConfirm:boolean = true;

  signupForm =new FormGroup({
    userName: new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9]{3,10}')]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phoneNumber: new FormControl(null,[Validators.required,Validators.pattern('^(01|01|00201)[0-2,5]{1}[0-9]{8}')]),
    country: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    confirmPassword: new FormControl(null,[Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    role: new FormControl('user')
  },{validators: this.passwordMatchValidator,});


  constructor(
    private _AuthService:AuthService,
    private toastr:ToastrService,
    private router:Router
  ){}

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
    let myData = new FormData()
    let myMap = new Map(Object.entries(data.value));
    for(const [key,val] of myMap){
      myData.append(key, data.value[key])
    }
    myData.append('profileImage', this.imgSrc, this.imgSrc['name']);
    this._AuthService.onSignUp(myData).subscribe({
      next:(res:any)=>{
        console.log(res);
      },error:(err)=>{
        this.toastr.error(err.error.message,'error')
      },complete:()=>{
        this.toastr.success('account created successfully')
        this.router.navigate(['/auth/signin'])
      }
    })
  }

  onSelect(event: any) {
    console.log(event);
    this.imgSrc = event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }
  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
