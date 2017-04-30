import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { UserInfo } from '../model/user-info';

@Injectable()
export class AdminService {

  baseUrl: string = 'http://localhost:8080/users/';

  constructor(private http: Http) { }

  getUserInfo(): Array<UserInfo> {
    // let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json',
    //                                 'jwt': localStorage.getItem('jwt')});

    // return this.http.get(this.baseUrl+'isadmin', { headers: headers })
    //     .toPromise()
    //     .then(res => {
    //       return JSON.parse(res.text());
    //     })

    let users: Array<UserInfo> = new Array();
    users.push(new UserInfo(1,'name1',1997,60,180,'man','all',0,'user'))
    users.push(new UserInfo(2,'name2',1991,63,181,'man','all',0,'user'))
    users.push(new UserInfo(3,'name3',1993,62,110,'woman','all',0,'user'))
    return users;
  }

  isAdmin(): Promise<boolean>{
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json',
                                    'jwt': localStorage.getItem('jwt')});

    return this.http.get(this.baseUrl+'isadmin', { headers: headers })
        .toPromise()
        .then(res => {
          return JSON.parse(res.text());
        })
  }

}
