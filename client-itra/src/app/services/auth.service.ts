import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { Profile } from '../model/profile';

import { authState } from '../global/authstate';

@Injectable()
export class AuthService {

    baseUrlLogin: string = 'http://localhost:8080/users/login';

    baseUrlSingup: string = 'http://localhost:8080/users/singup'

    constructor(private http:Http) {}

    login(login, password): Promise<Response> {
        let loginRequest = JSON.stringify({login: login, password: password})
        let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});

        return this.http.post(this.baseUrlLogin, loginRequest, { headers: headers })
                        .toPromise()
                        .then( (resp: Response) => {
                            if(resp.text() != ""){
                              localStorage.setItem('jwt', resp.text());
                              authState.authState = !authState.authState;
                            }
                        });
    }

    singup(login, password, profile: Profile, url: string): Promise<Response> {
        let loginRequest = JSON.stringify(
            { 
                user: {
                    login: login, 
                    password: password
                },
                profile: {
                    idSex: profile.getSex(),
                    idTypeOfPhotography: profile.getTypesOfPhotography(),
                    name: profile.getName(),
                    yearOfBirth: profile.getYearOfBirth(),
                    weight: profile.getWeight(),
                    height: profile.getHeight(),
                    rating: 0,
                    colLike: 0
                },
                image:{
                    position: 1,
                    url: url
                }
            }
        );
        console.log(loginRequest)
        let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
        
        return this.http.post(this.baseUrlSingup, loginRequest, { headers: headers })
                        .toPromise()
                        .then( (resp: Response) => {
                            if(resp.text() != ""){
                              localStorage.setItem('jwt', resp.text());
                              authState.authState = !authState.authState;
                            }
                        });
    }

    logout():void {
        localStorage.removeItem('jwt');
        authState.authState = !authState.authState;
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
