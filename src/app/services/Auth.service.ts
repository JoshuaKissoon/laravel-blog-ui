import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from '../user/User.model';

/**
 * @todo Check if session is valid on page refresh
 */
@Injectable()
export class AuthService
{
    public static ACCESS_TOKEN_KEY = "access_token";
    public static REFRESH_TOKEN_KEY = "refresh_token";
    public static ACCESS_TOKEN_EXPIRATION_KEY = "access_token_expiration";
    public static USER_KEY = "user_store";

    protected user = new User();

    authenticate(data: any)
    {
        localStorage.setItem(AuthService.ACCESS_TOKEN_KEY, data.access_token);
        localStorage.setItem(AuthService.REFRESH_TOKEN_KEY, data.refresh_token);
        localStorage.setItem(AuthService.ACCESS_TOKEN_EXPIRATION_KEY, data.expires_in + Date.now());
    }

    getUser(): User
    {
        var _data = JSON.parse(localStorage.getItem(AuthService.REFRESH_TOKEN_KEY));

        if (_data == null)
        {
            return new User();
        }

        this.user = new User();
        this.user.loadFromMap(_data);
        return this.user;
    }

    isAuthenticated(): boolean
    {
        if (this.getAccessToken())
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    getAccessToken(): string
    {
        var expiration = localStorage.getItem(AuthService.ACCESS_TOKEN_EXPIRATION_KEY);
        var token = localStorage.getItem(AuthService.ACCESS_TOKEN_KEY);
        
        if (!token || !expiration)
        {
            return null;
        }

        if (Date.now() > parseInt(expiration))
        {
            this.destroyToken();
            return null;
        }

        return token;
    }

    getExpiration(): string
    {
        return localStorage.getItem(AuthService.ACCESS_TOKEN_EXPIRATION_KEY);
    }

    private destroyToken()
    {
        localStorage.removeItem(AuthService.ACCESS_TOKEN_KEY);
        localStorage.removeItem(AuthService.REFRESH_TOKEN_KEY);
        localStorage.removeItem(AuthService.ACCESS_TOKEN_EXPIRATION_KEY);
        localStorage.removeItem(AuthService.USER_KEY);
    }

    signOut()
    {
        this.destroyToken();
    }
}