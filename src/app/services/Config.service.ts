import { Injectable } from '@angular/core';

/**
 * Service that provides settings for all other services
 * 
 * @author Joshua Kissoon
 * @since 20170605
 */
@Injectable()
export class Config
{

    private isProduction = false;

    getBaseUrl()
    {
        if (this.isProduction)
        {
            return "http://www.fixitmis.com/fixitapi/?urlq=";
        }
        else
        {
            return "http://localhost/fixitapi/?urlq=";
        }
    }
}