import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRoom } from '../model/room';

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

}
