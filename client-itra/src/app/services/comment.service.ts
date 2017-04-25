import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { Comment } from '../model/comment';

@Injectable()
export class CommentService {

  baseUrl = "http://localhost:8080/comments/";

  constructor(private http: Http) { }

  getComments(id: number): Promise<Array<Comment>> { 
    return this.http.get(this.baseUrl+'getAll/'+id)
      .toPromise()
      .then(res => {
        let arrayComment = new Array<Comment>();
        for(let i = 0; i < res.json().length; i++) {
          let comment: Comment = new Comment();
          arrayComment.push(comment);
        }
        return arrayComment; 
      })
  }

}
