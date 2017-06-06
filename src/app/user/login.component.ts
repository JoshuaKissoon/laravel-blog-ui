import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { DataManager } from '../services/DataManager.service';
import { AlertService } from '../services/AlertService.service';
import { AuthService } from '../services/Auth.service';

import { User } from "./User.model";

@Component({
    selector: "user-login",
    templateUrl: "./login.html",
})
export class UserLoginComponent
{
    private user: User;
    
    constructor(private dataman: DataManager, private alerter: AlertService, 
    private router: Router, private authService: AuthService)
    {
        this.user = new User();
    }
    
    
    login()
    {
        var data = {
            client_id: 2, 
            client_secret: 'qmrtcWnNRuut4v9UmmLCsc9yEVdpl4uaXv91wfjk',
            grant_type: 'password', 
            username: this.user.userId, 
            password: this.user.password
        }
        this.dataman.POST("oauth/token", data).then(
            res =>
            {
                console.log(res);
//                if (res.success == false)
//                {
//                    this.alerter.addAlert(res.message, "warn");
//                    return;
//                }
//
//                this.user = res.data.user;
//                this.authService.login(res.data.user, res.data.accessToken);
//                this.alerter.addAlert(res.message, "success");
//
//                this.router.navigate(["home"]);
            }
        );

    }
}