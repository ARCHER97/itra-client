import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

import { ImageService } from '../../../services/image.service';
import { AuthService } from '../../../services/auth.service';
import { SexService } from '../../../services/sex.service';
import { TypeOfPhotoService } from '../../../services/type-of-photo.service';
import { Profile } from '../../../model/profile';
import { Sex } from '../../../model/sex';
import { TypeOfPhoto } from '../../../model/type-of-photo';

import { authState } from '../../../global/authstate';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'mycloudfortask5', uploadPreset: 'hinmrkp5' })
  );

  public hasAnotherDropZoneOver:boolean = false;

  profile: Profile = new Profile(0,'',0,0,0,'','',0)

  authState = authState;

  login: string;

  password: string;

  stateLoad = false;

  imageUrl: any;

  arraySex: Array<Sex> = new Array();

  arrayTypeOfPhoto: Array<TypeOfPhoto> = new Array();

  selectedSex: string = "not select";

  selectedTypeOfPhoto: string = "not select";

  errorState = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private imageService: ImageService,
    private sexService: SexService,
    private typeOfPhotoService: TypeOfPhotoService
  ) {
    this.uploader.onAfterAddingAll = (item: any) => {
       this.stateLoad =true;
       this.upload();
    };
    
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);
            this.imageUrl = 'http://res.cloudinary.com/mycloudfortask5/image/upload/' + res.public_id;
            
            return { item, response, status, headers };
    };

    this.sexService.getAllSex().then(res => {
      this.arraySex = res;
      this.profile.setSex(this.arraySex[0].getId().toString());
      this.selectedSex = this.arraySex[0].getName();
    })

    this.typeOfPhotoService.getAllTypesOfPhoto().then(res => {
      this.arrayTypeOfPhoto = res;
      this.profile.setTypesOfPhotography(this.arrayTypeOfPhoto[0].getId().toString());
      this.selectedTypeOfPhoto = this.arrayTypeOfPhoto[0].getText();
    })

  }

  singup(){
    if((this.profile.getHeight()*this.profile.getWeight()*this.profile.getYearOfBirth() == 0) || 
       (this.uploader.isUploading == false)){
      this.errorState = true;
    }
    this.auth(this.imageUrl);
  }

  auth(url: any){
    this.authService.singup(this.login, this.password, this.profile, url).then(res => {
      if(res){
        this.router.navigate(['/profiles-preview']);
      } else this.errorState = true;
    });
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  upload(): void {
      this.uploader.uploadAll();
  }

  setSex(sex: Sex){
    this.profile.setSex(sex.getId().toString());
    this.selectedSex = sex.getName();
  }

  setTypeOfPhoto(photo: TypeOfPhoto){
    this.profile.setTypesOfPhotography(photo.getId().toString());
    this.selectedTypeOfPhoto = photo.getText();
  }

}
