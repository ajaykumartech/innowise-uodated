import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserenvironmentsService } from './userenvironments.service';

@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate {
  
  constructor(private auth: UserenvironmentsService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.deauthenticate();
    }
  
    async deauthenticate() {
      var token = localStorage.getItem('Token');
      var d = await this.auth.getDataa(token)
      if(d=='OK')
      {
        this.router.navigate(['home/dash'])
        this.router.navigate(['home/dash'])
        return false;
      }
      else
      {
      
        return true;
      }
    }
  
}
