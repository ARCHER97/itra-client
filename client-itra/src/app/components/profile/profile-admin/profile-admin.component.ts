import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

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
  @ViewChild('imageAdminModal') public imageAdminModal:ModalDirective;

  public radioModel: string = 'Table';

  profile: Profile;
  
  images: Array<ImageInfo> = new Array();

  selectImage: ImageInfo = new ImageInfo(0,0,'');

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private imageService: ImageService
  ) { 
    profileService.getProfileById(this.route.snapshot.params['id']).then(res => {
      this.profile = res;
    });
    imageService.getImagesByProfileId(this.route.snapshot.params['id']).then(res => {
      this.images = res;
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
    this.imageAdminModal.show();
  }

  public hideChildModal():void {
    this.imageAdminModal.hide();
  }

}
