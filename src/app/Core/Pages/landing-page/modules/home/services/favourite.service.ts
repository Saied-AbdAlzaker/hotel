import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  constructor(private _HttpClient: HttpClient) {}

  getMyFavourites(): Observable<any> {
    return this._HttpClient.get('portal/favorite-rooms');
  }

  addFavourite(roomId: string): Observable<any> {
    return this._HttpClient.post('portal/favorite-rooms', {roomId});
  }
  deleteFavourite(roomId: string): Observable<any> {
    return this._HttpClient.delete(`portal/favorite-rooms/${roomId}`,{body:{'roomId':roomId}});

  }
}
