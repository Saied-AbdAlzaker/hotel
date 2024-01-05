import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAds, IAdsResponse } from '../models/ads';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  constructor(private _httpClient: HttpClient) {}

  //getALL
  getAllAds(): Observable<any> {
    return this._httpClient.get('admin/ads');
  }
  //Delete
  onDeleteAds(id: any): Observable<any> {
    return this._httpClient.delete(`admin/ads/${id}`);
  }
  // Ads By Id 
  onAdsById(id: any):Observable<any>
  {
    return this._httpClient.get(`admin/ads/${id}`)
  }
  // Add Ads
  onAddAds(data:any):Observable<any>
  {
    return this._httpClient.post('admin/ads', data)
  }
  // Edit Ads
  onEditAds(data:any,id:any):Observable<any>
  {
    return this._httpClient.put(`admin/ads/${id}`, data)
  }
}
