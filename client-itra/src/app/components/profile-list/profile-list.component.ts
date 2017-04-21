import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProfilePreviewService } from '../../services/profile-preview.service';
import { ProfilePreview } from '../../model/profile-preview';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  profilesPreview: Array<ProfilePreview>;

  constructor(
    private profilePreviewService: ProfilePreviewService,
    private router: Router
  ) {
    this.profilesPreview = profilePreviewService.getTop4();
  }

  ngOnInit() {

  }

  goToProfile(id: number){
    this.router.navigate(['/profile', id]);
  }

}
