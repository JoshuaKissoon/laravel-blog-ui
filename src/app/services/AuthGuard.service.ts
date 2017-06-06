import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './Auth.service';

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private router: Router, private authService: AuthService) { }

    canActivate()
    {
        if (!this.authService.isAuthenticated())
        {
            // not logged in so redirect to login page
            this.router.navigate(['/user/login']);
            return false;
        }

        return true;
    }
}