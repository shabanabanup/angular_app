// import { AuthService } from './auth.service';
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// //ng g guard auth
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
  
//   constructor(private authService: AuthService) { }

//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
//     : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if (this.authService.isAuthenticate) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//UserService for authentication of route guards
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthenticated:boolean=false;
  isadmin:boolean=false;
  //constructor of userservice
  constructor(
    private authService: UserService,
    private router: Router) { }
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

       var isAuthenticated= this.authService.authSubject.subscribe(
        data => 
        {
          console.log('next subscribed value: ' + data);
          this.isAuthenticated = data;
        })
        var isadmin= this.authService.authad.subscribe(
          data => 
          {
            console.log('next subscribed value: ' + data);
            this.isadmin = data;
          })
 
      if ( this.isAuthenticated==false || this.isadmin==false) {
        console.log('inside false ' + this.isAuthenticated);
          this.router.navigate(['/login']);
          return false;
      }else {
        console.log('next subscribed value:t3etg ' + this.isAuthenticated);
        //this.router.navigate(['/Home']);
        return true;
      }
     
  }
  
}
