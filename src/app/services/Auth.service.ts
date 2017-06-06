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
    protected accessToken: string;
    protected loggedIn = false;
    protected user = new User();

    public constructor()
    {
        this.accessToken = localStorage.getItem(this.getAccessTokenKey());
        this.loggedIn = !!this.accessToken;
    }
    
    getAccessTokenKey()
    {
        return "authService_accessToken";
    }
    
    getUserKey()
    {
        return "authService_user";
    }

    login(iuser: User, iaccessToken: string)
    {
        this.accessToken = iaccessToken;
        localStorage.setItem(this.getAccessTokenKey(), iaccessToken);
        localStorage.setItem(this.getUserKey(), JSON.stringify(iuser));
        this.loggedIn = true;
        this.user = iuser;
    }

    getUser(): User
    {
        var _data = JSON.parse(localStorage.getItem(this.getUserKey()));
        
        if (_data == null)
        {
            return new User();
        }
        
        this.user = new User();
        this.user.loadFromMap(_data);
        return this.user;
    }

    isLoggedIn(): boolean
    {
        this.accessToken = localStorage.getItem(this.getAccessTokenKey());
        this.loggedIn = !!this.accessToken;

        return this.loggedIn;
    }

    getAccessToken(): string
    {
        this.accessToken = localStorage.getItem(this.getAccessTokenKey());
        return this.accessToken;
    }

    signOut()
    {
        localStorage.removeItem(this.getAccessTokenKey());
        localStorage.removeItem(this.getUserKey());
        this.loggedIn = false;
    }
}