import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Group } from '../models/Group';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GroupService {


  constructor(private http:HttpClient) { }

  getIsics(keyWord:string):Observable<{ DATA: Group[] }> {
    const groupsURL:string = environment.apiBase + '/group/' + keyWord;

    return this.http.get<{ DATA: Group[] }>(groupsURL);
  }

}
