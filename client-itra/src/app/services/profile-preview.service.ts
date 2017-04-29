import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { ProfilePreview } from '../model/profile-preview';
import { ImageInfo } from '../model/image-info';

@Injectable()
export class ProfilePreviewService {

  baseUrl = 'http://localhost:8080/top/';

  constructor(private http:Http) {}

  public getTop(n: number): Promise<Array<ProfilePreview>>{
    return this.http.get(this.baseUrl+'get/'+n)
      .toPromise()
      .then( res => {
          let body = res.json();
          let arrayProfilePreview = new Array<ProfilePreview>();
          for(let i = 0; i < res.json().length; i++){
              let profilePreview = new ProfilePreview(
                res.json()[i].id, new ImageInfo(1,1,res.json()[i].url),
                res.json()[i].name, res.json()[i].rating
              );
              arrayProfilePreview.push(profilePreview);
          }
          return arrayProfilePreview;
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
