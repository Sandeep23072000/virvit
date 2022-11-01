import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  candidate: any;
  constructor(
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.candidate=JSON.parse( localStorage.getItem("login") || 'null' );
      console.log( this.candidate);
      if(this.candidate=== null ){
        console.log('in condition');
        
        this.router.navigate(['/login']);
      }
      return true;
  }
  
}
