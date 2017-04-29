import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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

  data: Array<CloudData> = new Array();

  constructor(
    private profilePreviewService: ProfilePreviewService,
    private router: Router,
    private tagService: TagsService
  ) {

    profilePreviewService.getTop(4).then( res => {
      this.profilesPreview = res;
    });

    this.tagService.getTags().then(res => {
      this.data = new Array();
      let tags: Array<Tag> = res;
      tags.forEach(tag => {
        console.log(tag.text)
        this.data.push({text: tag.text, weight: 3}) 
      })
      this.newData(this.data);
    }); 

  }

  ngOnInit() {

  }

  goToProfile(id: number){
    this.router.navigate(['/profile', id]);
  }

  newData(array: Array<CloudData>){
    const changedData$: Observable<Array<CloudData>> = Observable.of(array);
    changedData$.subscribe(res => this.data = res);
  }
  
}
