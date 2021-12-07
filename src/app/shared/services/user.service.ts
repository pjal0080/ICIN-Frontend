import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  user:any;
  accountNo:number=0;
  setUser(user:any)
  {
    this.user=user;
  }
  getUser()
  {
    return this.user;
  }
  getAllUsers():Observable<any>
  {
    console.log(localStorage.getItem('token'));
    const tokenType  = 'Bearer ';
      let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization',tokenType + localStorage.getItem('token'));
      console.log(reqHeaders);
      return this.httpClient.get<any>(`${"http://localhost:8080" + '/admin/profiles'}`,)
  }
  changeAuthenticatiopn(gmail:string,change:boolean):Observable<any>
  {
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const params={
      gmail:gmail
    }
      if(change==true)
      {
           return this.httpClient.post<any>(`${"http://localhost:8080" + '/admin/deactivate/'+gmail}`, { headers: reqHeaders });
      }
      else{
           return this.httpClient.post<any>(`${"http://localhost:8080" + '/admin/activate/'+gmail}`, { headers: reqHeaders });
      }
  }
  createUserPrimaryAccount(user:any):Observable<any>
  {
    const body={
      balance:0,
      accountNo:Math.floor(Math.random() * 899999 + 1000000000000000).toString(),
      user:{
        id:user.id
      }
    }
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    // .set('balance',balance.toString()).set('');
    console.log(reqHeaders);
    return this.httpClient.post<any>(`${"http://localhost:8080" + '/admin/create_primary'}`,body,{ headers: reqHeaders })
  }
  createUserSavingAccount(user:any):Observable<any>
  {
    const body={
      balance:0,
      accountNo:Math.floor(Math.random() * 899999 + 1000000000000000).toString(),
      user:{
        id:user.id
      },
      rate:5,
    }
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    // .set('balance',balance.toString()).set('');
    console.log(reqHeaders);
    return this.httpClient.post<any>(`${"http://localhost:8080" + '/admin/create_savings'}`,body,{ headers: reqHeaders })
  }
  getUserProfile(email:string):Observable<any>
  {
    // /userprofile/{email}
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json')

    return this.httpClient.get<any>(`${"http://localhost:8080" + '/user/userprofile/'+email}`,{ headers: reqHeaders })

  }
}
