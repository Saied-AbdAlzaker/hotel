import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  imgSrc: any;
  files: File[] = [];
  signupForm =new FormGroup({
    userName: new FormControl(null),
    email: new FormControl(null),
    phoneNumber: new FormControl(null),
    country: new FormControl(null),
    password: new FormControl(null),
    confirmPassword: new FormControl(null),
    role: new FormControl('user')
  })
  userEmail: any;

  constructor(
    private _AuthService:AuthService
  ){}

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
        // this.userEmail = res.email
      },error:(err)=>{
        console.log(err);
        
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
