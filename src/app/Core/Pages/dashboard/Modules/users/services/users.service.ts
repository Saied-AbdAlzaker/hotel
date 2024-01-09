import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

constructor(
    private _HttpClient:HttpClient
) { }

geAllUsers(params:any){
    return this._HttpClient.get('admin/users',{params:params})
}
}
