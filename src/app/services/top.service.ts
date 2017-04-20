import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { CardElement } from '../model/card-element';

@Injectable()
export class TopService {
  
  baseUrl: string = "http://localhost:8080/top/";

  constructor(private http: Http) { }

  public getTop(col: number): Promise<Array<CardElement>>{
    return this.http.get(this.baseUrl+"get/"+col)
      .toPromise()
      .then(res => {
        let body = res.json();
        let arrayCardElements = new Array<CardElement>();
        for(let i = 0; i < res.json().length; i++){
            let cardElement = new CardElement(res.json()[i].name, -res.json()[i].rating, res.json()[i].url);
            arrayCardElements.push(cardElement);
        }
        return arrayCardElements;
      })
      .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return errMsg
  }

}
