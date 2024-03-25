import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }
  mainApi:string = `http://localhost:3000/api/v1/users`;

  Login(user:any):Observable<any>
  {
    return this._HttpClient.post(`${this.mainApi}/login`,user)
  }
  getAllUsers():Observable<any>
  {
    return this._HttpClient.get(`${this.mainApi}`)
  }
  getUser(id:string):Observable<any>
  {
    return this._HttpClient.get(`${this.mainApi}/${id}`)
  }
  deleteUser(id:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.mainApi}/${id}`)
  }
}
