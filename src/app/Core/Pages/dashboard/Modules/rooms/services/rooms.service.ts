import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idelete } from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(
    private _HttpClient: HttpClient,
  ) { }

  onGetAllRooms(data: any): Observable<any> {
    return this._HttpClient.get('admin/rooms', { params: data })
  }

  onAddRoom(data: any): Observable<any> {
    return this._HttpClient.post('admin/rooms', data)
  }
  onGetFacilities() {
    return this._HttpClient.get('admin/room-facilities')
  }
  ondeletedialog(id:Idelete):Observable<any>
  {
    return this._HttpClient.delete(`admin/rooms/${id}`)
  }
  editRooms(data: any, id: string): Observable<any> {
    return this._HttpClient.put(`admin/rooms/${id}`, data);
  }
}
