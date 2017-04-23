import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

import { ProfilePreviewService } from '../../services/profile-preview.service';
import { TagsService } from '../../services/tags.service';
import { ProfilePreview } from '../../model/profile-preview';
import { Tag } from '../../model/tag';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  profilesPreview: Array<ProfilePreview>;

  options: CloudOptions = {
    width : 350,
    height : 300,
    overflow: false,
  }

  data: Array<CloudData> = [ ]

  constructor(
    private profilePreviewService: ProfilePreviewService,
    private router: Router,
    private tagService: TagsService
  ) {
    profilePreviewService.getTop(4).then( res => {
      this.profilesPreview = res;
    });
    let tags: Array<Tag> = this.tagService.getTags();
    this.data = new Array();
    tags.forEach(tag => {
      this.data.push({text: tag.getText(), weight: 3}) 
    })
  }

  ngOnInit() {

  }

  goToProfile(id: number){
    this.router.navigate(['/profile', id]);
  }

  
 
  

}
