import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { Localization } from '../model/localization';
import { localization } from '../global/localizationContext';

@Injectable()
export class LocalizationService {

  baseUrl = 'http://localhost:8080/localization/get';
  
  constructor(private http: Http) { }

  updataeLocalization(lang: string){
    this.http.get(this.baseUrl+'?name='+lang)
      .toPromise()
      .then(res => {
        let local = new Localization();
        for(let i = 0; i < res.json().length; i++) {
          local.add(res.json()[i].key, res.json()[i].value);
        }
        localization.setLocal(local);
      })
  }

}
