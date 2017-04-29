import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { Tag } from '../model/tag';

@Injectable()
export class TagsService {

  baseUrl = "http://localhost:8080/tags/";

  constructor(private http: Http) { }

  // getTags(): Array<Tag> {
  //   let tags: Array<Tag> = new Array();
  //   tags.push(new Tag('sasha'))
  //   tags.push(new Tag('gray'))
  //   tags.push(new Tag('hohoho'))
  //   tags.push(new Tag('Weight'))
  //   tags.push(new Tag('10'))
  //   tags.push(new Tag('link'))
  //   return tags;
  // }


  getTags(): Promise<Array<Tag>>{
    return this.http.get(this.baseUrl+'getAll')
      .toPromise()
      .then(res => {
        let arrayTags = new Array<Tag>();
        for(let i = 0; i < res.json().length; i++)
        {
          let tag: Tag = new Tag(res.json()[i].text);
          arrayTags.push(tag);
        }
        return arrayTags;
      })
  }

}
