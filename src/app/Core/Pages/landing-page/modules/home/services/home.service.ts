import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Params } from '@angular/router';

import { Observable } from 'rxjs';
import { IChangePassword } from 'src/app/Shared/models/iuser-admin';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _HttpClient: HttpClient) {}
  // Room Details
  onGetRoomDetails(id: string): Observable<any> {
    return this._HttpClient.get(`portal/rooms/${id}`);
  }
  // All Rooms
  getAllRooms(params: any): Observable<any> {
    return this._HttpClient.get('portal/rooms/available', { params: params });
  }
  // All Ads
  getAllAds(): Observable<any> {
    return this._HttpClient.get('portal/ads');
  }
  getAllComments(id: string): Observable<any> {
    return this._HttpClient.get(`portal/room-comments/${id}`);
  }

  //create comment
  Addcomment(data: any): Observable<any> {
    return this._HttpClient.post('portal/room-comments', data);
  }

  // All Reviews
  getAllReviews(id: string): Observable<any> {
    return this._HttpClient.get(`portal/room-reviews/${id}`);
  }
  Addreview(data: any): Observable<any> {
    return this._HttpClient.post('portal/room-reviews', data);
  }

  //get user profile
  getUserById(id: string): Observable<any> {
    return this._HttpClient.get(`portal/users//${id}`);
  }

  //get all booking
  getAllMyBookings(): Observable<any> {
    return this._HttpClient.get('portal/booking/my');
  }

  //get booking details
  getBookingDetails(id: string):Observable<any>{
    return this._HttpClient.get(`portal/booking/${id}`);
  }

  //change password on user profile
  changePasswordUser(data: IChangePassword): Observable<any> {
    return this._HttpClient.post('portal/users/change-password', data);
  }
}
