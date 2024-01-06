import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

constructor(private _httpClient:HttpClient) { }

addFacilities(data:any):Observable<any>
{
  return this._httpClient.post('admin/room-facilities', {name:data})
}
getAllFacilities(data:any):Observable<any>
{
  return this._httpClient.get('admin/room-facilities', data )
}
ondeletedialog(id:any):Observable<any>
{
  return this._httpClient.delete(`admin/room-facilities/${id}`)
}
}
