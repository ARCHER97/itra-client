import { Injectable } from '@angular/core';

import { ImageInfo } from '../model/image-info';

@Injectable()
export class ImageService {

  constructor() { }

  getImagesByProfileId(id: number): Array<ImageInfo>{
    let array: Array<ImageInfo> = new Array();
    array.push(new ImageInfo(1,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_o0z5op.jpg'));
    array.push(new ImageInfo(2,2,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_naw0e9.jpg'));
    array.push(new ImageInfo(3,3,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_pnmy0h.jpg'));
    array.push(new ImageInfo(4,4,'http://res.cloudinary.com/mycloudfortask5/image/upload/HK9d09p_j8wmhw.jpg'));
    return array;
  }
  
}
