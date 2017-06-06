import { Component } from '@angular/core';

import { AlertService } from "./services/AlertService.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', '../assets/blog.css']
})
export class AppComponent
{

    constructor(private alertService: AlertService) { }
}
