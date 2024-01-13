import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

constructor(
    private _HttpClient:HttpClient
) { }

geAllUsers(params:any):Observable<any>{
    return this._HttpClient.get('admin/users',{params:params})
}
onGetUserProfile(id:string):Observable<any>{
    return this._HttpClient.get(`admin/users/${id}`)
}
}
