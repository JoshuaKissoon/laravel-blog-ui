import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataManager } from '../services/DataManager.service';
import { AlertService } from '../services/AlertService.service';
import { AuthService } from '../services/Auth.service';

import { User } from "./User.model";

@Component({
    selector: "user-login",
    templateUrl: "./login.html",
})
export class UserLoginComponent implements OnInit
{
    private user: User;

    constructor(private dataman: DataManager, private alerter: AlertService,
        private router: Router, private authService: AuthService)
    {
        this.user = new User();
    }

    ngOnInit()
    {
        if (this.authService.isAuthenticated())
        {
            this.alerter.addAlert("You are already logged in. Please log out to continue.  ", "warn");
            this.router.navigate(["home"]);
        }
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
                if (res.status == 401)
                {
                    this.alerter.addAlert("Incorrect email and/or password entered. ", "warn");
                    return;
                }

                this.authService.authenticate(res);
                this.alerter.addAlert("Successfully Logged In", "success");

                this.router.navigate(["home"]);
            }
        );

    }
}