import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { ImageInfo } from '../model/image-info';
import { Tag } from '../model/tag';

@Injectable()
export class ImageService {

  baseUrl = "http://localhost:8080/images/";
  baseUrlTags = "http://localhost:8080/tags/"

  constructor(private http: Http) { }

  getImagesByProfileId(id: number): Promise<Array<ImageInfo>>{
    return this.http.get(this.baseUrl+'getAll/'+id)
      .toPromise()
      .then(res => {
        let arrayImage = new Array<ImageInfo>();
        for(let i = 0; i < res.json().length; i++)
        {
          let image: ImageInfo = new ImageInfo(res.json()[i].id, res.json()[i].position, res.json()[i].url);
          arrayImage.push(image);
        }
        return arrayImage;
      })
  }

  saveFirstImageByProfileId(url: string, idProfile: number){
    let body = JSON.stringify({ url: url, idProfile: idProfile, position: 1 });
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    
    return this.http.post(this.baseUrl+'save', body, { headers: headers })
                    .toPromise()
                    .then( (resp: Response) => { });
  }

  uploadImageWithTags(url: string, idProfile: number, tags: string[]): Promise<void> {
    return this.uploadNextImage(url, idProfile).then(res => {
      if(tags != []){
        return this.uploadTags(tags, res).then(res => { })
      };
    })
  }

  uploadNextImage(url: string, idProfile: number): Promise<number>{
    let body = JSON.stringify({ url: url, idProfile: idProfile });
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    
    return this.http.post(this.baseUrl+'save/next', body, { headers: headers })
                    .toPromise()
                    .then( (res: Response) => {
                        return res.text();
                     });
  }

  uploadTags(tags: string[], idImage: number){
    let arrayTag: Array<Tag> = new Array();
    for(let i = 0; i < tags.length; i++){
      let tag: Tag = new Tag(tags[i]);
      tag.setIdImage(idImage);
      arrayTag.push(tag);
    }

    let body = JSON.stringify({ tags: arrayTag, idImage: idImage });

    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    
    return this.http.post(this.baseUrlTags+'saveall', body, { headers: headers })
                    .toPromise()
                    .then( (res: Response) => {
                        return res.text();
                    });
  }


  saveAll(array: Array<ImageInfo>){
    let body = JSON.stringify({ images: array });

    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    
    return this.http.post(this.baseUrl+'saveall', body, { headers: headers })
                    .toPromise()
                    .then( (res: Response) => {
                        return res.text();
                    });
  }

}
