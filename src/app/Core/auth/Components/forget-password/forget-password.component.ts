import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'] 
})
export class ForgetPasswordComponent {
 
constructor(private _AuthService:AuthService,private _ToastrService:ToastrService,private _Router:Router){}
email:string=''
Message:string='' 

forgetPassword(data:string){
  this._AuthService.onForgetPassword(data).subscribe({
    next:(res)=>{
      console.log(res);
      
    },error:(err)=>{

    },complete:()=>{
      this._Router.navigate(['auth/reset-password'])
    }
  })
}
  }
