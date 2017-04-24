import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { Sex } from '../model/sex';

@Injectable()
export class SexService {
  
  baseUrl = "http://localhost:8080/sex/";

  constructor(private http: Http) { }

  getAllSex(): Promise<Array<Sex>>{
    return this.http.get(this.baseUrl+'getAll')
      .toPromise()
      .then(res => {
        let arraySex = new Array<Sex>();
        for(let i = 0; i< res.json().length; i++)
        {
          let sex: Sex = new Sex(res.json()[i].id, res.json()[i].name);
          arraySex.push(sex);
        }
        return arraySex;
      })
  }
}
