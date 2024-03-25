import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }
  mainApi:string = `http://localhost:3000/api/v1/brands`;

    getBrand(id:string):Observable<any>
    {
      return this._HttpClient.get(`${this.mainApi}/${id}`)
    }
    getAllBrands():Observable<any>
    {
      return this._HttpClient.get(`${this.mainApi}`)

    }
}
