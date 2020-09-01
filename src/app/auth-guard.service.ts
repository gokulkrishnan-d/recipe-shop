import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            // can return syn or async(promise/Observable)
             return this.authService.isAuthenticated().then(
                (isAuth: boolean) => {
                    if (isAuth) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                        return false;
                    }
                }
            );
    }
}
