import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

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
  @ViewChild('imageUploadModal') public imageUploadModal:ModalDirective;

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'mycloudfortask5', uploadPreset: 'hinmrkp5' })
  );

  public hasAnotherDropZoneOver:boolean = false;

  public radioModel: string = 'Middle';

  profile: Profile = new Profile(0,'not found',0,0,0,'not found','not found',0);
  
  images: Array<ImageInfo> = new Array();
  
  selectImage: ImageInfo = new ImageInfo(1,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/v1492878624/imagenotfound_reuccl.png');

  tags: any = [];

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private imageService: ImageService
  ) {

    this.uploader.onAfterAddingAll = (item: any) => {
       //this.upload();
    };
    
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);
            let imageUrl = 'http://res.cloudinary.com/mycloudfortask5/image/upload/' + res.public_id;
            this.imageService.uploadImageWithTags(imageUrl, this.route.snapshot.params['id'], this.tags);
            return { item, response, status, headers };
    };

    this.images = new Array();
    this.images.push(new ImageInfo(1,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/v1492878624/imagenotfound_reuccl.png')); 
    profileService.getProfileById(this.route.snapshot.params['id']).then(res => {
      this.profile = res;
    });
    this.reloadImages();
  }

  reloadImages(){
    this.imageService.getImagesByProfileId(this.route.snapshot.params['id']).then(res => {
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

  public showImageUploadModal(image: ImageInfo):void {
    this.imageUploadModal.show();
  }

  public hideImageUploadModal():void {
    this.imageUploadModal.hide();
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  upload(): void {
      this.uploader.uploadAll();
  }

  uploadNewImageWithTags(){
    this.upload()
  }

}
