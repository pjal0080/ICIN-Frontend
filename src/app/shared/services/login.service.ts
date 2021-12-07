import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient,private jwtHelper :JwtHelperService,private userService:UserService) { }

  getToken(userName: String, password: string): Observable<any> {
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  const params={
      username:userName,
      password:password
    }
    const helper = new JwtHelperService();
    return this.httpClient.post<any>(`${"http://localhost:8080" + '/create_token'}`,  JSON.stringify(params), { headers: reqHeaders }).pipe(map(res => {
      console.log(res);
      if(res!=null)
      {
        // console.log(res.user.primaryAccount.balance);
        localStorage.setItem('token',res.jwt);
        localStorage.setItem('user_id', res.user.id);
        localStorage.setItem('email', res.user.email);
        localStorage.setItem('user_role', res.user.userRole);
        // localStorage.setItem('primaryBalance', res.user.primaryAccount.balance);
        // localStorage.setItem('savingsBalance', res.user.savingsAccount.balance);
        // localStorage.setItem('primaryAccountNo', res.user.primaryAccount.accountNo);
        // localStorage.setItem('savingsAccountNo', res.user.savingsAccount.accountNo);
        this.userService.setUser(res.user);
        // const decodedToken = helper.decodeToken(res.jwt);
        // console.log(decodedToken);
      }
      
      console.log(res);
      return res;
    }
    ))



  }
  login(username: String, password: string): Observable<any> {
    return this.getToken(username, password);
  }
}
