import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  api_url="https://api.thecatapi.com/v1/images/search";


  getApiUrl():Observable<Cat[]>{
    return this.http.get<Cat[]>(this.api_url);
  }
}
