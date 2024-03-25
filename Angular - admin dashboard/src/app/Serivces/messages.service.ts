import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private _HttpClient:HttpClient) { }
  mainApi:string = `http://localhost:3000/api/v1/messages`;

  getMessages():Observable<any>
  {
    return this._HttpClient.get(`${this.mainApi}/all-messages`)
  }

  replayMessage(id:any,replay:string):Observable<any>
  {
    return this._HttpClient.patch(`${this.mainApi}/${id}`, replay)
  }
  getPendingMessages():Observable<any>
  { let status:string = 'pending'
    return this._HttpClient.post(`${this.mainApi}/messages-status`,{status})
  }
  deleteMessage(id:any):Observable<any>
  {
    return this._HttpClient.delete(`${this.mainApi}/${id}`)
  }
}
