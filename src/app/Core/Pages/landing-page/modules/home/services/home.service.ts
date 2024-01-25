import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Params } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _HttpClient: HttpClient) { }
  // Room Details
  onGetRoomDetails(id: string): Observable<any> {
    return this._HttpClient.get(`portal/rooms/${id}`);
  }
  // All Rooms
  getAllRooms(params: Params): Observable<any> {
    return this._HttpClient.get('portal/rooms/available', { params: params });
  }
  // All Ads
  getAllAds(): Observable<any> {
    return this._HttpClient.get('portal/ads');
  }
  getAllComments(id:string):Observable<any>{
    return this._HttpClient.get(`portal/room-comments/${id}`)
  }

  //create comment
  Addcomment(data: any): Observable<any> {
    return this._HttpClient.post('portal/room-comments', data)
  }


    // All Reviews
  getAllReviews(id:string): Observable<any> {
    return this._HttpClient.get(`portal/room-reviews/${id}`)
  }
  Addreview(data: any): Observable<any> {
    return this._HttpClient.post('portal/room-reviews', data)
  }

  //get user profile
  getUserById(id: string): Observable<any> {
    return this._HttpClient.get(`portal/users//${id}`)
  }
}
