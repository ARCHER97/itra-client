import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';
import { ImageInfo } from '../model/image-info';

@Injectable()
export class ImageService {

  baseUrl = "http://localhost:8080/images/";

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
        for(let i = 0; i< res.json().length; i++)
        {
          let image: ImageInfo = new ImageInfo(res.json()[i].id, res.json()[i].position, res.json()[i].url);
          //image.setIdProfile(res.json()[i].idProfile);
          arrayImage.push(image);
        }
        return arrayImage;
      })
  }

}
