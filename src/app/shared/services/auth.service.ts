import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtTokenHelperService: JwtHelperService;
  constructor() { 
    this.jwtTokenHelperService = new JwtHelperService();
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot,) {
    let shouldActivate = false;
    const token = localStorage.getItem('token');
    const role=localStorage.getItem('user_role');
    //const userName = localStorage.getItem('username');
    console.log(role);
    console.log('User is not logged in');
    if (token === null || token === undefined ) {
      console.log('User is not logged in');
      
      return false;
    }
    const tokenNotExpired = !this.jwtTokenHelperService.isTokenExpired(token);
    if (tokenNotExpired) {
      console.log('User is not logged in');
      console.log(state.url)
      switch (state.url) {
        case '/admin/home':
          if(role==="ADMIN")
          {
            console.log('User is not logged in');
            shouldActivate = true;
          }
          break;
        case '/user/home':
          if(role==="USER")
          {
            console.log('User is not logged in');
            shouldActivate = true;
          }
          break;
        }
        console.log('User is not logged in');
      
       return shouldActivate;
    }
    console.log('User is not logged in');
    //console.log('User is not logged in');
    return false;
  }
}
