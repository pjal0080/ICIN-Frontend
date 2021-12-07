import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanActivate {

  constructor(private router:Router,private authService:AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const canActivate = this.authService.canActivate(route, state);
    console.log(canActivate);
    if (canActivate === false) {
      this.router.navigate(['/']);
    }
    return canActivate;
  }
}
