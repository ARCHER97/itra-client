import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { TypeOfPhoto } from '../model/type-of-photo';

@Injectable()
export class TypeOfPhotoService {

  baseUrl = "http://localhost:8080/typeofphoto/";

  constructor(private http: Http) { }

  getAllTypesOfPhoto(): Promise<Array<TypeOfPhoto>>{
    return this.http.get(this.baseUrl+'getAll')
      .toPromise()
      .then(res => {
        let arrayTypeOfPhoto = new Array<TypeOfPhoto>();
        for(let i = 0; i< res.json().length; i++)
        {
          let typeOfPhoto: TypeOfPhoto = new TypeOfPhoto(res.json()[i].id, res.json()[i].text);
          arrayTypeOfPhoto.push(typeOfPhoto);
        }
        return arrayTypeOfPhoto;
      })
  }
}
