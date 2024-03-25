import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  mainApi:string = `http://localhost:3000/api/v1/rentals`;
  constructor(private _HttpClient:HttpClient) { }

  getTop5Categories():Observable<any>
  {
    return this._HttpClient.get(`${this.mainApi}/getTopCategories`)
  }
  getTop5RentedCars():Observable<any>
  {
    return this._HttpClient.get(`${this.mainApi}/getTopCarsByRent`)
  }

  getRentalById(id:string):Observable<any>
  {
    return this._HttpClient.get(`${this.mainApi}/${id}`)
  }
  getAllRentals():Observable<any>
  {
    return this._HttpClient.get(`${this.mainApi}/getAllRentals`)
  }

  }

