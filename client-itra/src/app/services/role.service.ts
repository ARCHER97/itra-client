import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { Role } from '../model/role';

@Injectable()
export class RoleService {

  baseUrl = "http://localhost:8080/role/";

  constructor(private http: Http) {  }

  getAllRoles(): Promise<Array<Role>>{
    return this.http.get(this.baseUrl+'getAll')
      .toPromise()
      .then(res => {
        let array = new Array<Role>();
        for(let i = 0; i< res.json().length; i++)
        {
          let role: Role = new Role(res.json()[i].id, res.json()[i].rolename);
          array.push(role);
        }
        return array;
      })
  }
}
