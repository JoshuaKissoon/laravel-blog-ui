import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { enableProdMode } from '@angular/core';

enableProdMode();

import { GrowlModule } from 'primeng/primeng';

import { AppComponent } from './app.component';

import { RoutingProvider } from './app.routes';

import { AuthGuard } from './services/AuthGuard.service';
import { AuthService } from './services/Auth.service';
import { Config } from './services/Config.service';
import { DataManager } from './services/DataManager.service';
import { AlertService } from './services/AlertService.service';

import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/login.component';

import { PostsViewAllComponent } from './post/postsViewAll.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UserLoginComponent,
        PostsViewAllComponent,
    ],
    imports: [BrowserModule, FormsModule, HttpModule, RoutingProvider, GrowlModule],
    providers: [Config, AuthGuard, DataManager, AuthService, AlertService],
    bootstrap: [AppComponent]
})
export class AppModule { }
