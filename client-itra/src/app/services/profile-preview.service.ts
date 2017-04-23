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

    // let profilesPreview: Array<ProfilePreview> = new Array();
    // profilesPreview.push(new ProfilePreview(
    //   1, new ImageInfo(1,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_o0z5op.jpg'), 'name1', 1));
    // profilesPreview.push(new ProfilePreview(
    //   2, new ImageInfo(2,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_naw0e9.jpg'), 'name2', 2));
    // profilesPreview.push(new ProfilePreview(
    //   3, new ImageInfo(3,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_pnmy0h.jpg'), 'name3', 3));
    // profilesPreview.push(new ProfilePreview(
    //   4, new ImageInfo(4,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/HK9d09p_j8wmhw.jpg'), 'name4', 4));
    // return profilesPreview;
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return errMsg
  }
}
