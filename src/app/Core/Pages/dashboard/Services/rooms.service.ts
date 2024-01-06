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

ondeletedialog(id:number):Observable<any>
{
  return this._httpClient.delete(`admin/rooms/${id}`)
}
editRooms(data: any, id: number): Observable<any> {
  return this._httpClient.put(`admin/rooms/${id}`, data);
}
onAddRoom(data:any):Observable<any>{
  return this._httpClient.post('admin/rooms',data)
}
}
