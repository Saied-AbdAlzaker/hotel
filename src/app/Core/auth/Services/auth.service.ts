import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResetPassword } from '../Model/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _HttpClient:HttpClient) { }

onRestPassword(data:IResetPassword):Observable<IResetPassword>
 {
  return this._HttpClient.post<IResetPassword>('portal/users/reset-password', data)

 }

}
