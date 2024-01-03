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
// onRequestReset(data:string){
//     this._AuthService.onRestPassword(data).subscribe({
//       next:(res)=>{
//         this.Message=res.message;
        
//       },error:(err)=>{
//          this._ToastrService.error(err.error.message,'Error!')
//       },complete:()=>{
//        this._ToastrService.success(this.Message,'successfully');
//         this._Router.navigate(['/auth/restPassword'])
//         localStorage.setItem('email',data);
//       }
//     })
//   }
  }
