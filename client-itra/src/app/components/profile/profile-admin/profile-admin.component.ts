import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProfileService } from '../../../services/profile.service';
import { ImageService } from '../../../services/image.service';

import { Profile } from '../../../model/profile';
import { ImageInfo } from '../../../model/image-info';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
  public radioModel: string = 'Table';

  profile: Profile;
  
  images: Array<ImageInfo>;
  leftImages: Array<ImageInfo>;
  rightImages: Array<ImageInfo>;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private imageService: ImageService
  ) { 
    this.profile = profileService.getProfileById(this.route.snapshot.params['id']);
    this.images = imageService.getImagesByProfileId(this.route.snapshot.params['id']);
    this.leftImages = new Array();
    let i = 0;
    for(; i < this.images.length/2; i++){
      this.leftImages.push(this.images[i]);
    }
    this.rightImages = new Array();
    for(; i >= this.images.length/2 && i < this.images.length; i++){ 
      this.rightImages.push(this.images[i]);
    }
  }

  ngOnInit() {
  }

  checkCenterArray(i: number){
    if(i >= this.images.length/2) return true
    else return false;
  }
  
}
