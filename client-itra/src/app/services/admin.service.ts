import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { UserInfo } from '../model/user-info';
import { Role } from '../model/role';

@Injectable()
export class AdminService {

  baseUrlUser: string = 'http://localhost:8080/users/';

  baseUrlAdmin: string = 'http://localhost:8080/admin/';

  constructor(private http: Http) { }

  getUserInfo(): Promise<Array<UserInfo>> {
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json',
                                    'jwt': localStorage.getItem('jwt')});

    return this.http.get(this.baseUrlAdmin+'getAll', { headers: headers })
        .toPromise()
        .then(res => {
          let array: Array<UserInfo> = new Array();
          for(let i = 0; i < res.json().length; i++){
            array.push(new UserInfo(res.json()[i].id, res.json()[i].name, 
                res.json()[i].colLike, res.json()[i].rating,  
                new Role(res.json()[i].role.id, res.json()[i].role.rolename)));
          }
          return array;
        })
  }

  isAdmin(): Promise<boolean>{
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json',
                                    'jwt': localStorage.getItem('jwt')});

    return this.http.get(this.baseUrlUser+'isadmin', { headers: headers })
        .toPromise()
        .then(res => {
          return JSON.parse(res.text());
        })
  }

  saveUserRoles(users: Array<UserInfo>): Promise<string> {
    let body= JSON.stringify({users: users});
    console.log(body)
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json',
                                    'jwt': localStorage.getItem('jwt')});

    return this.http.post(this.baseUrlAdmin+'saveRoles', body, { headers: headers })
        .toPromise()
        .then(res => {
          return res.text();
        })
  }

}
