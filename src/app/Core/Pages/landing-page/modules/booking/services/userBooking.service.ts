import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBooking } from '../models/booking';

@Injectable({
    providedIn: 'root'
})
export class UserBookingService {

constructor(private _HttpClient:HttpClient) { }

    onBookingRoom(data:IBooking):Observable<any>{
        return this._HttpClient.post('portal/booking',data)
    }
    onGetBookingDetails(id:string):Observable<any>{
        return this._HttpClient.get(`portal/booking/${id}`)
    }
    onPay(id:string,token:string):Observable<any>{
        return this._HttpClient.post(`portal/booking/${id}/pay`,{token:token})
    }

}
