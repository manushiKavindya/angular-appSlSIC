import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Div } from '../models/DIv';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  
  constructor(private http:HttpClient) { }

  getIsics(keyWord:string):Observable<{ DATA: Div[] }> {
    const divsURL:string = environment.apiBase + '/division/' + keyWord;

    return this.http.get<{ DATA: Div[] }>(divsURL);
  }

}
