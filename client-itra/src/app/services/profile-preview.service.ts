import { Injectable } from '@angular/core';

import { ProfilePreview } from '../model/profile-preview';
import { ImageInfo } from '../model/image-info';

@Injectable()
export class ProfilePreviewService {

  constructor() { }

  public getTop4(): Array<ProfilePreview>{
    let profilesPreview: Array<ProfilePreview> = new Array();
    profilesPreview.push(new ProfilePreview(
      1, new ImageInfo(1,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_o0z5op.jpg'), 'name1', 1));
    profilesPreview.push(new ProfilePreview(
      2, new ImageInfo(2,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_naw0e9.jpg'), 'name2', 2));
    profilesPreview.push(new ProfilePreview(
      3, new ImageInfo(3,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_pnmy0h.jpg'), 'name3', 3));
    profilesPreview.push(new ProfilePreview(
      4, new ImageInfo(4,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/HK9d09p_j8wmhw.jpg'), 'name4', 4));
    return profilesPreview;
  }

}
