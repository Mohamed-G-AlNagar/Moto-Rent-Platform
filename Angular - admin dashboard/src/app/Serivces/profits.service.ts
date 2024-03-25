import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfitsService {

  constructor(private _HttpClient:HttpClient) { }
  mainApi:string = `http://localhost:3000/api/v1/rentals`;

    getYearRevenue(year:number):Observable<any>
    {
      return this._HttpClient.get(`${this.mainApi}/revenue/${year}`)
    }
    getTotalRevenue():Observable<any>
    {
      return this._HttpClient.get(`${this.mainApi}/platformRevenue`)

    }
}
