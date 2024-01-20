import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserBookingService {

constructor(private _HttpClient:HttpClient) { }

    onBookingRoom(data:any):Observable<any>{
        return this._HttpClient.post('portal/booking',data)
    }

}
