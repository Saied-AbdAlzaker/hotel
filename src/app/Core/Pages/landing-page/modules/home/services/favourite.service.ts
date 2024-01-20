import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private _HttpClient: HttpClient) {}


  getMyFavourites(): Observable<any> {
    return this._HttpClient.get('portal/favorite-rooms');
  }
}
