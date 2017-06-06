import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

import { Config } from '../services/Config.service';
import { AuthService } from './Auth.service';

/**
 * Service that provides a wrapper for retrieving data from the server
 * 
 * @author Joshua Kissoon
 * @since 20170605
 */
@Injectable()
export class DataManager
{

    public constructor(protected config: Config, protected http: Http,
        protected authService: AuthService, private router: Router) { }

    getAccessToken()
    {
        return this.authService.getAccessToken();
    }

    getBaseUrl()
    {
        return this.config.getBaseUrl();
    }

    /**
     * Callback wrapper for the HTTP GET Call
     * 
     * @param urlq The query part of the URL to be sent to the server
     * 
     * @author Joshua Kissoon
     * @since 20160826
     */
    GET(urlq: string)
    {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'accessToken': this.getAccessToken(),
        });

        return this.http
            .get(this.getBaseUrl() + urlq, { headers: headers, body: '' })
            .toPromise()
            .then(res => res.json())
            .then(res =>
            {
                return res;
            })
            .catch(error =>
            {
                this.handleError(error);
                return error;
            });
    }

    /**
     * Callback wrapper for the HTTP POST Call
     * 
     * @param urlq The query part of the URL to be sent to the server
     * @param object The object containing the POST data to be sent
     * 
     * @author Joshua Kissoon
     * @since 20160826
     */
    POST(urlq: string, object: any)
    {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'accessToken': this.getAccessToken(),
        });

        if (null == object)
        {
            object = { "blank": "blank" };
        }

        return this.http
            .post(this.getBaseUrl() + urlq, JSON.stringify(object), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .then(res =>
            {
                return res;
            })
            .catch(error =>
            {
                this.handleError(error);
                return error;
            });
    }

    /**
     * Callback wrapper for the HTTP POST Call
     * 
     * @param urlq The query part of the URL to be sent to the server
     * @param object The object containing the POST data to be sent
     * 
     * @author Joshua Kissoon
     * @since 20160826
     */
    POSTRAW(urlq: string, object: any)
    {
        const headers = new Headers({
            'accessToken': this.getAccessToken(),
        });

        return this.http
            .post(this.getBaseUrl() + urlq, object, { headers: headers })
            .toPromise()
            .then(res => res.json())
            .then(res =>
            {
                return res;
            })
            .catch(error =>
            {
                this.handleError(error);
                return error;
            });
    }


    /**
     * Callback wrapper for the HTTP PUT Call
     * 
     * @param urlq The query part of the URL to be sent to the server
     * @param object The object containing the PUT data to be sent
     * 
     * @author Joshua Kissoon
     * @since 20160826
     */
    PUT(urlq: string, object: any)
    {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'accessToken': this.getAccessToken(),
        });

        if (null == object)
        {
            object = { "blank": "blank" };
        }

        return this.http
            .put(this.getBaseUrl() + urlq, JSON.stringify(object), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .then(res =>
            {
                return res;
            })
            .catch(error =>
            {
                this.handleError(error);
                return error;
            });
    }

    /**
     * Callback wrapper for the HTTP PATCH Call
     * 
     * @param urlq The query part of the URL to be sent to the server
     * @param object The object containing the PUT data to be sent
     * 
     * @author Joshua Kissoon
     * @since 20161107
     */
    PATCH(urlq: string, object: any)
    {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'accessToken': this.getAccessToken(),
        });

        if (null == object)
        {
            object = { "blank": "blank" };
        }

        return this.http
            .patch(this.getBaseUrl() + urlq, JSON.stringify(object), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .then(res =>
            {
                return res;
            })
            .catch(error =>
            {
                this.handleError(error);
                return error;
            });
    }

    /**
     * Callback wrapper for the HTTP DELETE Call
     * 
     * @param urlq The query part of the URL to be sent to the server
     * 
     * @author Joshua Kissoon
     * @since 20160826
     */
    DELETE(urlq: string)
    {

        const headers = new Headers({
            'Content-Type': 'application/json',
            'accessToken': this.getAccessToken(),
        });

        return this.http
            .delete(this.getBaseUrl() + urlq, { headers: headers, body: '' })
            .toPromise()
            .then(res => res.json())
            .then(res =>
            {
                return res;
            })
            .catch(error =>
            {
                this.handleError(error);
                return error;
            });
    }

    private handleError(error: any)
    {
        switch (error.status)
        {
            case 401:
                this.authService.signOut();
                this.router.navigate(['user/login']);
                break;
        }
    }


}