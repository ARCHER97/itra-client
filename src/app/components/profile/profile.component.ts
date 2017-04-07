import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { Profile } from '../../model/profile';
import { Image } from '../../model/Image';
import { globalSettings } from '../../global/global-settings';
import { selectedObjects } from '../../global/selected-objects'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  globalSettings = globalSettings;
  profile: Profile;
  listImages:Array<Image>;
  selectedObjects = selectedObjects;

  constructor( public dialog: MdDialog ) {
    this.listImages = [
      new Image(1,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_prygfu.jpg'),
      new Image(2,2,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_o0z5op.jpg'),
      new Image(3,3,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_rzaiec.jpg'),
      new Image(4,4,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_naw0e9.jpg'),
      new Image(5,5,'http://res.cloudinary.com/mycloudfortask5/image/upload/images_pnmy0h.jpg')
      ];
    this.profile = new Profile(1, 'Sasha Gray', 1988, 168, 60, 'woman', 'all');
  }

  public dropImage(event: DragEvent, image: any){
    console.log(event)
  }

  setSelectedImage(image: Image){
    selectedObjects.image = image;
    console.log(selectedObjects.image.getUrl())
  }

  setSelectedImage1(){ }

  isActive(num: number){
    if(num == 1) return true
    else return false
  }
}
