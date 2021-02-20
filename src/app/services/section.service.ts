import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Scn } from '../models/Scn';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SectionService {


  constructor(private http:HttpClient) { }

  getIsics(keyWord:string):Observable<{ DATA: Scn[] }> {
    const sectionsURL:string = environment.apiBase + '/section/' + keyWord;

    return this.http.get<{ DATA: Scn[] }>(sectionsURL);
  }

}
