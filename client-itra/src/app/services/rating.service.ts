import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

@Injectable()
export class RatingService {
  
  baseUrl: string = "http://localhost:8080/rating/";
  
  constructor(private http: Http) { }

  addRating(rating: number, profileId: number): Promise<number>{
    let body = JSON.stringify({ rating: rating, profileId: profileId });
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json',
                               'jwt': localStorage.getItem('jwt')});
    
    return this.http.post(this.baseUrl+'add', body, { headers: headers })
                    .toPromise()
                    .then( (res: Response) => {
                        return res.text();
                     });
  }

}
