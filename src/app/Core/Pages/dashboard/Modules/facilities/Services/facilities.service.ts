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
  return this._httpClient.post('admin/room-facilities', data)
}

}
