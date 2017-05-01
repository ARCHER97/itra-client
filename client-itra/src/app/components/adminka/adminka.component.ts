import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../services/admin.service';
import { UserInfo } from '../../model/user-info';

@Component({
  selector: 'app-adminka',
  templateUrl: './adminka.component.html',
  styleUrls: ['./adminka.component.css']
})
export class AdminkaComponent implements OnInit {
  
  users: Array<UserInfo>;
  
  constructor(private adminService: AdminService) { 
    this.adminService.getUserInfo().then(res => {
      this.users = res;
    });
  }

  ngOnInit() {
  }

}
