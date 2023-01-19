import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      /*if(!localStorage.getItem('token')){
if (localStorage.getItem('username')) {this.router.navigate(['/login']);
    return false;
      }*/
    if(!localStorage.getItem('username' && 'password')){
      this.router.navigate(['/login'])
    }/*else{
    this.router.navigate(['/login']);
    return false;  }*/
      return true;
  }
}
