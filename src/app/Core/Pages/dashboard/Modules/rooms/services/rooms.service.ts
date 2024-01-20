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

  // All Rooms
  onGetAllRooms(data: any): Observable<any> {
    return this._HttpClient.get('admin/rooms', { params: data })
  }
// Add
  onAddRoom(data: any): Observable<any> {
    return this._HttpClient.post('admin/rooms', data)
  }
  onGetFacilities(): Observable<any>{
    return this._HttpClient.get('admin/room-facilities')
  }
  // Room By Id
  onGetRoomById(id:string){
      return this._HttpClient.get(`admin/rooms/${id}`)
  }
  // Delete
  ondeletedialog(id:any):Observable<any>
  {
    return this._HttpClient.delete(`admin/rooms/${id}`)
  }
  // Edit
  editRooms(data: any, id: string): Observable<any> {
    return this._HttpClient.put(`admin/rooms/${id}`, data);
  }
 

}
