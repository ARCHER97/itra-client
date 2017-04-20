import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Promise} from 'es6-promise';

import { Image } from '../model/image';

@Injectable()
export class ImageService {

  baseUrl: string = "http://localhost:8080/images/";

  constructor(private http: Http) { }

  public getFirstImageOfUser(id: number): Promise<Image>{
    return this.http.get(this.baseUrl+"getfirst/"+id)
      .toPromise()
      .then(res => {
        let body = res.json();
        let tempCollage = new Array<Image>();
        var image: Image;
        if (res.json()) {
            image = new Image(res.json().id, res.json().position, res.json().url);
        }
        return image;
      })
      .catch(this.handleError);
  }

  public getAllImageOfProfile(id: number): Promise<Array<Image>>{
    return this.http.get(this.baseUrl+'getAll/'+id)
      .toPromise()
      .then(res => {
        let arrayImage = new Array<Image>();
        for(let i = 0; i< res.json().length; i++)
        {
          let image: Image = new Image(res.json()[i].id, res.json()[i].position, res.json()[i].url);
          image.setIdUser(res.json()[i].idUser);
          arrayImage.push(image);
        }
        return arrayImage;
      })
  }

  public addImage(image: Image): Promise<Image> {
    let body = JSON.stringify( {idUser: image.getIdUser, position: image.getPosition(), url: image.getUrl()});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl+'save', body, options)
                        .toPromise()
                        .then(res => {
                            image.setId(res.json().id)
                            return image;
                        })
  }

  public deleteImage(id: number): Promise<string>{
    return this.http.get(this.baseUrl+'delete/'+id)
                          .toPromise()
                          .then(res => {
                              return res;
                          })
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return errMsg
  }  

}
