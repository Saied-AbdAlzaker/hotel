import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBookings } from '../model/booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private _httpClient: HttpClient) {}

  onGetAllBookings(params: any): Observable<any> {
    return this._httpClient.get('admin/booking', { params: params });
  }
  ondeletedialog(id: any): Observable<any> {
    return this._httpClient.delete(`admin/booking/${id}`);
  }
  onGetDetailsBooking(id:any):Observable<any>{
    return this._httpClient.get(`admin/booking/${id}`);
  }
}
