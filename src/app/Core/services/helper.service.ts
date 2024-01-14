import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class HelperService {

constructor(
    private _HttpClient:HttpClient
) { }

}
