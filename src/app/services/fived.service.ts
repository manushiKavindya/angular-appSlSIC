import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FiveD } from '../models/FiveD';
import { Class } from '../models/Class';
import { Group } from '../models/Group';
import { Div } from 'src/app/models/Div';
import { Scn } from '../models/Scn';




import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FiveDService {
// isicsURL:string = environment.apiBase + '/fived/fish';

  constructor(private http:HttpClient) { }


  getFiveDs(keyWord:string):Observable<{ DATA: FiveD[] }> {
    const fivedsURL:string = environment.apiBase + '/fived/' + keyWord;

    return this.http.get<{ DATA: FiveD[] }>(fivedsURL);
  }

  getClasses(keyWord:string):Observable<{ DATA: Class[] }> {
    const classesURL:string = environment.apiBase + '/class/' + keyWord;

    return this.http.get<{ DATA: Class[] }>(classesURL);
  }
  getGroups(keyWord:string):Observable<{ DATA: Group[] }> {
    const groupsURL:string = environment.apiBase + '/group/' + keyWord;

    return this.http.get<{ DATA: Group[] }>(groupsURL);
  }
  getDivs(keyWord:string):Observable<{ DATA: Div[] }> {
    const divsURL:string = environment.apiBase + '/division/' + keyWord;

    return this.http.get<{ DATA: Div[] }>(divsURL);
  }
  getScns(keyWord:string):Observable<{ DATA: Scn[] }> {
    const sectionsURL:string = environment.apiBase + '/section/' + keyWord;

    return this.http.get<{ DATA: Scn[] }>(sectionsURL);
  }




}
