import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) { }

  getIsics(keyWord:string):Observable<{ DATA: User[] }> {
    const usersURL:string = environment.apiBase + '/user/' + keyWord;

    return this.http.get<{ DATA: User[] }>(usersURL);
  }

}
