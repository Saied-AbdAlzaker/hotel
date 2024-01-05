import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  onGetFacilities(): Observable<any>{
    return this._HttpClient.get('admin/room-facilities')
  }
  onGetRoomById(id:string){
      return this._HttpClient.get(`admin/rooms/${id}`)
  }
  ondeletedialog(id:number):Observable<any>
  {
    return this._HttpClient.delete(`admin/rooms/${id}`)
  }
  editRooms(data: any, id: number): Observable<any> {
    return this._HttpClient.put(`admin/rooms/${id}`, data);
  }

}
