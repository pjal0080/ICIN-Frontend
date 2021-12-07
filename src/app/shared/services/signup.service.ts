import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  ROOT_URL:String = 'http://localhost:8080';
  constructor(private httpClient:HttpClient) { }
  registerUser(firstName:string,lastName:string,phone:string,email:string,password:string):Observable<any>
  {
    
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const params={
          firstName:firstName,
          lastName:lastName,
          email:email,
          password:password,
          phoneNo:phone,
          userRole:"USER",
          enabled:false
    }
    console.log(params);
    return this.httpClient.post<any>(`${"http://localhost:8080" + '/register'}`,JSON.stringify(params), { headers: reqHeaders }).pipe(map(res=>{
      console.log(res);
    }));
  }
}
