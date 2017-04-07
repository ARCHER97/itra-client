// import { Injectable } from '@angular/core';

// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
// import {Promise} from 'es6-promise'

// @Injectable()
// export class CollageService {

//   baseUrl: string = "http://localhost:8080/";

//   constructor(private http: Http) { }

//   public getAllCollageFaces(): Promise<CollageElement[]>{
//     return this.http.get(this.baseUrl+"getfaces")
//       .toPromise()
//       .then(res => {
//         let body = res.json()
//         let tempCollage = new Array<CollageElement>()
//         for (let i = 0; i < res.json().length; i++) {
//           let collageElement: CollageElement = 
//             new CollageElement(res.json()[i].staticURL, res.json()[i].effect, 
//               res.json()[i].imageSize, res.json()[i].name)
//           collageElement.setId(res.json()[i].id)
//           collageElement.setCollageName(res.json()[i].collageName)
//           collageElement.setCollageNumber(+res.json()[i].numberInCollage)
//           collageElement.setPositionx(+res.json()[i].positionx)
//           collageElement.setPositiony(+res.json()[i].positiony)
//           tempCollage.push(collageElement)
//         }
//         return tempCollage;
//       })
//       .catch(this.handleError);
//   }

//   public getCollageByName(name: string){
//     let body = JSON.stringify( {collageName: name });
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });

//     return this.http.post(this.baseUrl+'getcollagebyname', body, options)
//       .toPromise()
//       .then(res => {
//         let collage = new Collage(new Array<CollageElement>())
//         for(let i = 0; i< res.json().length; i++)
//         {
//           let collageElement = new CollageElement(res.json()[i].staticURL, res.json()[i].effect,
//             res.json()[i].imageSize, res.json()[i].name);
//           collageElement.setId(res.json()[i].id)
//           collageElement.setCollageName(res.json()[i].collageName)
//           collageElement.setCollageNumber(+res.json()[i].numberInCollage)
//           collageElement.setPositionx(+res.json()[i].positionx)
//           collageElement.setPositiony(+res.json()[i].positiony)
//           collageElement.setRotateDeg(+res.json()[i].rotateDeg)
//           collage.addCollageElement(collageElement);
//         }
//         return collage
//       })
//   }

//   public addCollage(image: CollageElement){
//     let body = JSON.stringify( {staticURL: image.getStaticURL(), effect: image.getEffect(), 
//       imageSize: image.getImageSize(), name: image.getName(), collageName: image.getName(), numberInCollage: 1,
//               positionx: 250, positiony: 250, rotateDeg: 0 });
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });

//     return this.http.post(this.baseUrl+'addcollage', body, options)
//                       .toPromise()
//                       .then(res => {
//                         let body = res.json()
//                         console.log(res.json())
//                         return body;
//                       })
//   }

//   public deleteCollageByName(name: string){ }

//   public updateImage(image: CollageElement){ 
//     let body = JSON.stringify( {id: image.getId() ,staticURL: image.getStaticURL(), effect: image.getEffect(), 
//           imageSize: image.getImageSize(), name: image.getName(), collageName: image.getCollageName(), 
//           numberInCollage: image.getCollageNumber(), positionx: image.getPositionx(), 
//           positiony: image.getPositiony(), rotateDeg: image.getRotateDeg()});
//         let headers = new Headers({ 'Content-Type': 'application/json' });
//         let options = new RequestOptions({ headers: headers });

//         return this.http.post(this.baseUrl+'updateImage', body, options)
//                           .toPromise()
//                           .then(res => {
//                             return image;
//                           })
//   }

//   private handleError (error: any) {
//     // In a real world app, we might use a remote logging infrastructure
//     // We'd also dig deeper into the error to get a better message
//     let errMsg = (error.message) ? error.message :
//       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//     console.error(errMsg); // log to console instead
//     return errMsg
//   }  

//   public addImage(image: CollageElement){
//     let body = JSON.stringify( {staticURL: image.getStaticURL(), effect: image.getEffect(), 
//           imageSize: image.getImageSize(), name: image.getName(), collageName: image.getCollageName(), 
//           numberInCollage: image.getCollageNumber(),  positionx: 250, 
//           positiony: 250, rotateDeg: image.getRotateDeg()});
//         let headers = new Headers({ 'Content-Type': 'application/json' });
//         let options = new RequestOptions({ headers: headers });

//         return this.http.post(this.baseUrl+'addImage', body, options)
//                           .toPromise()
//                           .then(res => {
//                             image.setId(res.json().id)
//                             return image;
//                           })
//   }


//   public changeImages(images: Array<CollageElement>){
//     let body = JSON.stringify( images );
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });

//     return this.http.post(this.baseUrl+'changeimages', body, options)
//                           .toPromise()
//                           .then(res => {
//                           })
//   }

//   public deleteImage(image: CollageElement){
//     let body = JSON.stringify( image );
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });

//     return this.http.post(this.baseUrl+'deleteImage', body, options)
//                           .toPromise()
//                           .then(res => {
//                           })
//   }

//   undo(){
//     this.http.get(this.baseUrl+"undo")
//       .toPromise()
//       .then(res => { })
//       .catch(this.handleError);
//   }
// }
