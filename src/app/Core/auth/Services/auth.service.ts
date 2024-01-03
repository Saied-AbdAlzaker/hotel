import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResetPassword, ISignin } from '../Model/auth';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role: string|null = ''

constructor(private _HttpClient:HttpClient) {
  if(localStorage.getItem('role') !== null){
    this.getProfile();
  }
 }

getProfile(){
  let encoded: any = localStorage.getItem('userToken');
  let decoded: any = jwtDecode(encoded)
  console.log(decoded);

  localStorage.setItem('role' , decoded.role);
  localStorage.setItem('userName' , decoded.userName);
  localStorage.setItem('email' , decoded.userEmail);

  this.getRole()
  
}

getRole(){
  if (localStorage.getItem('userToken') !== null && localStorage.getItem('role')) {
    this.role = localStorage.getItem('role')
  }
}

onSignin(data:ISignin):Observable<ISignin>
 {
  return this._HttpClient.post<ISignin>('portal/users/login', data)
 }

onRestPassword(data:IResetPassword):Observable<IResetPassword>
 {
  return this._HttpClient.post<IResetPassword>('portal/users/reset-password', data)
 }
}
