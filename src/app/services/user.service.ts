import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { User } from '../models/User';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  log: boolean = false;

  constructor(private http: HttpClient) { }
  reg(access: boolean) {
    if (access == true) {
      this.log = true
    } else {

    }

  }

  getUser(username: string, password): Observable<{ DATA: User }> {
    const usersURL: string = environment.apiBase + '/user/' + username + "/" + password;
    console.log(username, password);
    return this.http.get<{ DATA: User }>(usersURL);
  }

  getU(abd, pw) {
    console.log("got " + abd + " and " + pw);
  }

  public sendData(username,password,first_name,last_name,email,phone_number) {
    console.log("in userService");
    
    let json = {
      name:{
        first_name:first_name,
        last_name:last_name
      },
      username:username,
      password:password,
      email:email,
      phone_number:phone_number,
    };
    console.log(json);
    
    return this.http
      .post<any>(
        environment.apiBase + '/user', json)
      .pipe(catchError(this.handleError))
      ;
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return throwError(error.message || error);
  }

}
