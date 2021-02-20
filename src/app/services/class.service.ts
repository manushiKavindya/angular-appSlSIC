import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Class } from '../models/Class';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClassService {


  constructor(private http:HttpClient) { }

  getIsics(keyWord:string):Observable<{ DATA: Class[] }> {
    const classesURL:string = environment.apiBase + '/class/' + keyWord;

    return this.http.get<{ DATA: Class[] }>(classesURL);
  }
}
