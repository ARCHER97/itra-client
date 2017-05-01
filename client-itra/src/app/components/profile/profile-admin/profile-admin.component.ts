import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

import { ProfileService } from '../../../services/profile.service';
import { ImageService } from '../../../services/image.service';
import { CommentService } from '../../../services/comment.service';
import { PornoRecognitionService } from '../../../services/porno-recognition.service';
import { SexService } from '../../../services/sex.service';
import { TypeOfPhotoService } from '../../../services/type-of-photo.service';

import { Profile } from '../../../model/profile';
import { ImageInfo } from '../../../model/image-info';
import { Comment } from '../../../model/comment';

import { localization } from '../../../global/localizationContext';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
  @ViewChild('imageAdminModal') public imageAdminModal:ModalDirective;
  @ViewChild('imageUploadModal') public imageUploadModal:ModalDirective;

  localization = localization;

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'mycloudfortask5', uploadPreset: 'hinmrkp5' })
  );
  public hasAnotherDropZoneOver:boolean = false;
  public radioModel: string = 'Middle';
  profile: Profile = new Profile(0,'not found',0,0,0,'not found','not found',0);
  images: Array<ImageInfo> = new Array(); 
  selectImage: ImageInfo = new ImageInfo(1,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/v1492878624/imagenotfound_reuccl.png');
  tags: any = [];
  comments: Array<Comment> = new Array();
  newComment = '';
  uploadingStatus = false;
  recognitionState = false;
  timer;

  sexList = [];
  selectSex = this.profile.getName(); 
  photoList = [];
  selectPhoto = this.profile.getTypesOfPhotography();

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private imageService: ImageService,
    private commentService: CommentService,
    private pornoRecognitionService: PornoRecognitionService,
    private sexService: SexService,
    private typeOfPhotoService: TypeOfPhotoService
  ) {
    
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);
            let imageUrl = 'http://res.cloudinary.com/mycloudfortask5/image/upload/' + res.public_id;

            this.pornoRecognitionService.recognition(imageUrl).then(res => {
              if(res) this.imageService.uploadImageWithTags(imageUrl, this.route.snapshot.params['id'], this.tags)
                  .then(res => {
                this.hideImageUploadModal();
                this.reloadImages();            
                this.preparUploading(false);
              });
              else {
                this.preparUploading(true);
              }
            })

            return { item, response, status, headers };
    };

    this.images = new Array();
    this.images.push(new ImageInfo(1,1,'http://res.cloudinary.com/mycloudfortask5/image/upload/v1492878624/imagenotfound_reuccl.png')); 
    profileService.getProfileById(this.route.snapshot.params['id']).then(res => {
      this.profile = res;
      this.selectSex = this.profile.getSex();
      this.selectPhoto = this.profile.getTypesOfPhotography();
    });
    this.reloadImages();

    this.sexService.getAllSex().then(res => {
      this.sexList = res;
    })

    this.typeOfPhotoService.getAllTypesOfPhoto().then(res => {
      this.photoList = res;
    })
  }

  reloadImages(){
    this.imageService.getImagesByProfileId(this.route.snapshot.params['id']).then(res => {
      this.images = res;
    });
  }

  ngOnInit() {
  }

  checkTile(i: number){
    if( (i % 4 == 0) || ((i+1) % 4 == 0) ) return true
    else return false;
  }

  public showChildModal(image: ImageInfo):void {
    this.selectImage = image;
    this.downloadCommentsOfSelectedImage(); 
    this.timer = setInterval(() => { 
      this.downloadCommentsOfSelectedImage(); 
    }, 1000 * 2);
    this.imageAdminModal.show();
  }

  public hideChildModal():void {
    this.imageAdminModal.hide();
    this.newComment = '';
  }

  public showImageUploadModal(image: ImageInfo):void {
    this.imageUploadModal.show();
  }

  public hideImageUploadModal():void {
    this.preparUploading(false);
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

  downloadCommentsOfSelectedImage(){
    this.commentService.getComments(this.selectImage.getId()).then(res => {
      this.comments = res;
    })
  }

  uploadCommentOfSelectedImage(){
    this.commentService.uploadComment(this.selectImage.getId(), this.newComment).then(res => {
      this.downloadCommentsOfSelectedImage();
      this.newComment = '';
    });
  }

  changeUploadStatus(){
    this.uploadingStatus = !this.uploadingStatus;
  }

  onDragEnd(ev: DragEvent) {
      this.numberImages();
      this.imageService.saveAll(this.images)
  }

  numberImages(){
    let i = 1;
    this.images.forEach(element => {
      element.setPosition(i);
      i = i + 1;
    });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  preparUploading(state: boolean){
    this.uploader.queue.pop();
    this.recognitionState = state;
  }

  checkStartSex(sex: any){
    if(sex == this.profile.getSex()) return true;
    return false;
  }

  checkStartPhoto(photo: any){
    if(photo == this.profile.getTypesOfPhotography()) return true;
    return false;
  }

  saveProfile(){
    let idSex = this.findSexIdInSexList(this.selectSex);
    let idPhoto = this.findPhotoIdInPhotoList(this.selectPhoto);
    this.profileService.saveProfile(this.profile, idSex, idPhoto).then(res => {
      console.log("update: "+res);
    })
  }

  findSexIdInSexList(sex: string): number {
    console.log(sex)
    let index: number = 0; 
    this.sexList.forEach(elem => {
      if(elem.getName() == sex) {
        index =  elem.getId();
      }
    })
    return index;
  }

  findPhotoIdInPhotoList(photo: string): number{
    console.log(photo)
    let index: number = 0; 
    this.photoList.forEach(elem => {
      if(elem.getText() == photo) {
        index = elem.getId();
      }
    })
    return index;
  }

}
