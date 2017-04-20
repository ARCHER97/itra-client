import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { Profile } from '../../model/profile';
import { Image } from '../../model/Image';
import { globalSettings } from '../../global/global-settings';
import { selectedObjects } from '../../global/selected-objects';
import { ImageService } from '../../services/image.service';  
import { ProfileService } from '../../services/profile.service'; 


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {

  globalSettings = globalSettings;
  profile: Profile; //= new Profile(1, 'Sasha Gray1', 19881, 1681, 601, 'woman1', 'all1');
  listImages: Array<Image>;
  selectedObjects = selectedObjects;

  constructor(private profileService: ProfileService, 
              private imageService: ImageService, 
              public dialog: MdDialog) {

    this.imageService.getAllImageOfProfile(1).then(res => {
      this.listImages = res;  
    });

    this.profile = new Profile(1, 'not found', 0, 0, 0, 'not found', 'not found');

    this.profileService.getProfileByUserId(1).then(res => {
      this.profile = res;
    });
    
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
