import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import * as config from "../config/config";
import { AuthenticationService } from '../_services/authentication/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private router: Router,
        private auth: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    canLoad(route: Route): boolean {
        if (this.auth.isLogin()) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        //this.router.navigate(['/login'], { queryParams: { returnUrl: "/"+route.path }});
        window.location.href = config.loginUrl;
        return false;
    }
}