import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

@Injectable()
export class PornoRecognitionService {

  baseUrl = 'https://api.sightengine.com/1.0/nudity.json?api_user=1129267020&api_secret=Rs65YanabWV9UqnxeNGu&url=';
  
  constructor(private http: Http) { }

  recognition(imageId: string): Promise<boolean> { 
    return this.http.get(this.baseUrl+imageId)
      .toPromise()
      .then(res => {
        console.log(res.json().nudity)
        if(res.json().nudity.raw < res.json().nudity.safe) return true;
        return false;
      })
  }

}
