import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProfileService } from '../../../services/profile.service';
import { ImageService } from '../../../services/image.service';

import { Profile } from '../../../model/profile';
import { ImageInfo } from '../../../model/image-info';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  public radioModel: string = 'Middle';

  profile: Profile;
  
  images: Array<ImageInfo>;
  
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private imageService: ImageService
  ) { 
    this.profile = profileService.getProfileById(this.route.snapshot.params['id']);
    this.images = imageService.getImagesByProfileId(this.route.snapshot.params['id']);
  }

  ngOnInit() {
  }

  checkCenterArray(i: number){
    if(i >= this.images.length/2) return true
    else return false;
  }

}
