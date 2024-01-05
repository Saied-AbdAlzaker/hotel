import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IChangePassword } from '../models/iuser-admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAdminService {
  constructor(public _httpClient: HttpClient) {}

  onChangePassword(data: IChangePassword): Observable<any> {
    return this._httpClient.post('admin/users/change-password', data);
  }
}
