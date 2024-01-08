import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookingService {

constructor(private _httpClient:HttpClient) { }

    onGetAllBookings(params:any):Observable<any>{
        return this._httpClient.get('admin/booking',{params:params})
    }

}
