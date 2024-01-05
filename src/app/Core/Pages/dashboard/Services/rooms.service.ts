import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

constructor(private _httpClient:HttpClient) { }

onGetAllRooms(data: any):Observable<any>
{
  return this._httpClient.get('admin/rooms', {params: data})
}

}
