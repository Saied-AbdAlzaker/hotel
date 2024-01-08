import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdsResponse } from '../models/ads';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  constructor(private _httpClient: HttpClient) {}

  //getALL
  getAllAds(): Observable<any> {
    return this._httpClient.get('admin/ads');
  }
}
