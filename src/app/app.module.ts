import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RoutingProvider } from './app.routes';

import { AuthGuard } from './services/AuthGuard.service';
import { AuthService } from './services/Auth.service';
import { Config } from './services/Config.service';
import { DataManager } from './services/DataManager.service';
import { AlertService } from './services/AlertService.service';

import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/login.component';

@NgModule({
    declarations: [
        AppComponent, 
        HomeComponent, 
        UserLoginComponent, 
    ],
    imports: [BrowserModule, FormsModule, HttpModule, RoutingProvider],
    providers: [Config, AuthGuard, DataManager, AuthService, AlertService],
    bootstrap: [AppComponent]
})
export class AppModule { }
