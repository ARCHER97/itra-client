import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

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
  @ViewChild('childModal') public childModal:ModalDirective;

  public radioModel: string = 'Middle';

  profile: Profile = new Profile(0,'not found',0,0,0,'not found','not found',0);
  
  images: Array<ImageInfo> = new Array();
  
  selectImage: ImageInfo = new ImageInfo(1,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/v1492878624/imagenotfound_reuccl.png');

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private imageService: ImageService
  ) {
    this.images = new Array();
    this.images.push(new ImageInfo(1,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/v1492878624/imagenotfound_reuccl.png')); 
    profileService.getProfileById(this.route.snapshot.params['id']).then(res => {
      this.profile = res;
    });
    imageService.getImagesByProfileId(this.route.snapshot.params['id']).then(res => {
      this.images = res;
      this.selectImage = this.images[0];
    });
  }

  ngOnInit() {
  }

  checkTile(i: number){
    if( (i+1) % 4 == 0) return true
    else return false;
  }

  public showChildModal(image: ImageInfo):void {
    this.selectImage = image;
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

}
