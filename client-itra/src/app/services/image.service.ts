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

  // getImagesByProfileId(id: number): Array<ImageInfo>{
  //   let array: Array<ImageInfo> = new Array();
  //   array.push(new ImageInfo(1,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_o0z5op.jpg'));
  //   array.push(new ImageInfo(2,2,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_naw0e9.jpg'));
  //   array.push(new ImageInfo(3,3,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_pnmy0h.jpg'));
  //   array.push(new ImageInfo(4,4,'http://res.cloudinary.com/mycloudfortask5/image/upload/HK9d09p_j8wmhw.jpg'));
  //   return array;
  // }
  
  getImagesByProfileId(id: number): Promise<Array<ImageInfo>>{
    return this.http.get(this.baseUrl+'getAll/'+id)
      .toPromise()
      .then(res => {
        let arrayImage = new Array<ImageInfo>();
        for(let i = 0; i < res.json().length; i++)
        {
          let image: ImageInfo = new ImageInfo(res.json()[i].id, res.json()[i].position, res.json()[i].url);
          //image.setIdProfile(res.json()[i].idProfile);
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

  uploadImageWithTags(url: string, idProfile: number, tags: string[]): Promise<string> {
    return this.uploadNextImage(url, idProfile).then(res => {
      return this.uploadTags(tags, res).then(res => {
        return res;
      })
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
    console.log(body);

    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    
    return this.http.post(this.baseUrlTags+'saveall', body, { headers: headers })
                    .toPromise()
                    .then( (res: Response) => {
                        return res.text();
                    });
  }

}
