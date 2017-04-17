import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { Profile } from '../model/profile'

@Injectable()
export class ProfileService {

  baseUrl: string = "http://localhost:8080/profiles/";

  constructor(private http: Http) { }

  public getProfileByUserId(id: number): Promise<Profile>{
    return this.http.get(this.baseUrl+"get/user/"+id)
      .toPromise()
      .then(res => {
        let body = res.json();
        var profile: Profile;
        if (res.json()) {
            profile = new Profile(res.json().id, res.json().name, res.json().yearOfBirth,
                                  res.json().weight, res.json().height, res.json().sex.name,
                                  res.json().typeOfPhotography.text);
        }
        return profile;
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
