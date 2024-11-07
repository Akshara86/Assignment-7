import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
      return true; // Allow access
    } else {
      this.router.navigate(['/loginsignup']);  // Redirect to login page if not logged in
      return false;
    }
  }
}
