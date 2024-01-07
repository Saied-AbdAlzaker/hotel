import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

constructor(private _httpClient:HttpClient) { }
// Add
addFacilities(data:any):Observable<any>
{
  return this._httpClient.post('admin/room-facilities', {name:data})
}
// All 
getAllFacilities(parms:any):Observable<any>
{
  return this._httpClient.get('admin/room-facilities', {params: parms} )
}
// Edit
editFacilities(_id:string,data:any):Observable<any>
{
  return this._httpClient.put(`admin/room-facilities/${_id}`, {name:data})
}
// Delete
ondeletedialog(id:any):Observable<any>
{
  return this._httpClient.delete(`admin/room-facilities/${id}`)
}
}
