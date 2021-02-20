import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FiveD } from '../models/FiveD';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FiveDService {
// isicsURL:string = environment.apiBase + '/fived/fish';

  constructor(private http:HttpClient) { }

  getIsics(keyWord:string):Observable<{ DATA: FiveD[] }> {
    const fivedsURL:string = environment.apiBase + '/fived/' + keyWord;

    return this.http.get<{ DATA: FiveD[] }>(fivedsURL);
  }
}
