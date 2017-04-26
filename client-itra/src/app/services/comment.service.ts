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
        console.log(this.baseUrl+'getAll/'+id)
        for(let i = 0; i < res.json().length; i++) {
          let comment: Comment = new Comment(
                                        res.json()[i].id,
                                        res.json()[i].idImage,
                                        res.json()[i].title,
                                        res.json()[i].position,
                                        res.json()[i].text
                                      );
          arrayComment.push(comment);
        }
        return arrayComment; 
      })
  }

  getAllComments(): Promise<Array<Comment>> { 
    return this.http.get(this.baseUrl+'getAll')
      .toPromise()
      .then(res => {
        let arrayComment = new Array<Comment>();
        for(let i = 0; i < res.json().length; i++) {
          let comment: Comment = new Comment(
                                        res.json()[i].id, 
                                        res.json()[i].idImage,
                                        res.json()[i].title,
                                        res.json()[i].position,
                                        res.json()[i].text);
          arrayComment.push(comment);
        }
        return arrayComment; 
      })
  }

  uploadComment(idImage: number, text: string){
    let body = JSON.stringify({ imageId: idImage, text: text });
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json',
                                'jwt': localStorage.getItem('jwt')});
    
    return this.http.post(this.baseUrl+'savenaxt', body, { headers: headers })
                    .toPromise()
                    .then( (res: Response) => {
                      return res;
                    });
  }

}
