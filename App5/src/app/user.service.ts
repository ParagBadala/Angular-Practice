import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of,BehaviorSubject } from 'rxjs';
import { Movies } from './entities/movies-entity'

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private _url = '../assets/Data/data.json';

  constructor(private http:HttpClient) { }

   getData(): Observable<Movies[]>{
    return this.http.get<Movies[]>(this._url);
  }

 /* postData(): Observable<Movies[]>{
    return this.http.post<Movies[]>(this._url);
  }*/
}
