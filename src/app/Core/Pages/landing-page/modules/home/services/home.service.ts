import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Params } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _HttpClient: HttpClient) {}

  onGetRoomDetails(id: string): Observable<any> {
    return this._HttpClient.get(`portal/rooms/${id}`);
  }

  getAllRooms(params: Params): Observable<any> {
    return this._HttpClient.get('portal/rooms/available', { params: params });
  }

  getAllAds(): Observable<any> {
    return this._HttpClient.get('portal/ads');
  }
  getAllComment(id:string):Observable<any>{
     
    return this._HttpClient.get(`portal/room-comments/${id}`)
}
//create
Addcomment(data:any):Observable<any>{
  
  return this._HttpClient.post('portal/room-comments',data)

}
}
