import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private _HttpClient:HttpClient) { }
  mainApi:string = `http://localhost:3000/api/v1/cars`;

  getCars(status?:string):Observable<any>
  { let params = new HttpParams();
    if (status) {
      params = params.set('status', status);
    }
    return this._HttpClient.get(`${this.mainApi}`,{params})
  }

  getCarId(id:string):Observable<any>
  {
    return this._HttpClient.get(`${this.mainApi}/${id}`)
  }

  deleteCar(id:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.mainApi}/${id}`)
  }

  approveCar(id:string):Observable<any>
  {
    return this._HttpClient.patch(`${this.mainApi}/approveCar/${id}`,null)
  }
  suspendCar(id:string):Observable<any>
  {
    return this._HttpClient.patch(`${this.mainApi}/suspendCar/${id}`,null)

  }
  activeCar(id:String):Observable<any>
  {
    return this._HttpClient.patch(`${this.mainApi}/activateCar/${id}`,null)
  }

  declineCar(id:string):Observable<any>
  {
    return this._HttpClient.patch(`${this.mainApi}/declineCar/${id}`,null)
  }

  topFiveRentalCategory()
  {
    return this._HttpClient.get(``)
  }

}
