import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

@Injectable()
export class AuthService {

    baseUrl: string = 'http://localhost:8080/api/login';

    constructor(private http:Http) {}

    login(email, password): Promise<Response> {
        let loginRequest = JSON.stringify({email: email, password: password});
        let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});

        return this.http.post(this.baseUrl, loginRequest, { headers: headers })
                        .toPromise()
                        .then(resp => {
                            localStorage.setItem('jwt', resp.headers.get('x-auth-token'));
                        });
    }

    logout():void {
        localStorage.removeItem('jwt');
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return errMsg
    }  

    isSignedIn():boolean {
        return localStorage.getItem('jwt') !== null;
    }

}
