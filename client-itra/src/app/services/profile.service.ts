import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { Profile } from '../model/profile';

@Injectable()
export class ProfileService {

  baseUrl: string = "http://localhost:8080/profiles/";
  
  constructor(private http: Http) { }

  public getProfileById(id: number): Promise<Profile>{
    return this.http.get(this.baseUrl+"get/"+id)
      .toPromise()
      .then(res => {
        let body = res.json();
        var profile: Profile;
        if (res.json()) {
            profile = new Profile(res.json().id, res.json().name, res.json().yearOfBirth,
                                  res.json().weight, res.json().height, res.json().sex.name,
                                  res.json().typeOfPhotography.text, res.json().rating);
        }
        return profile;
      })
      .catch(this.handleError);
  }

  public saveProfile(profile: Profile, idSex: number, idPhoto: number){
    let body = JSON.stringify(
            { 
                idSex: idSex,
                idTypeOfPhotography: idPhoto,
                name: profile.getName(),
                yearOfBirth: profile.getYearOfBirth(),
                weight: profile.getWeight(),
                height: profile.getHeight(),
            }
        );
    console.log(body)
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json',
                               'jwt': localStorage.getItem('jwt')});
    
    return this.http.post(this.baseUrl+'update', body, { headers: headers })
      .toPromise()
      .then( (res: Response) => { return res.text() });
  }


  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return errMsg
  }  
}
