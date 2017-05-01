import { Component } from '@angular/core';

import { AdminService } from '../../services/admin.service';
import { RoleService } from '../../services/role.service';
import { UserInfo } from '../../model/user-info';
import { Role } from '../../model/role';

@Component({
  selector: 'app-adminka',
  templateUrl: './adminka.component.html',
  styleUrls: ['./adminka.component.css']
})
export class AdminkaComponent {
  
  users: Array<UserInfo> = new Array();
  roleList: Array<Role> = new Array();
  selectRole: Role = new Role(0, "Not found");

  

  constructor(private adminService: AdminService, private roleService: RoleService) { 
    this.adminService.getUserInfo().then(res => {
      this.users = res;
    });

    this.roleService.getAllRoles().then(res => {
      this.roleList = res;
    })
  }

  checkStartRole(user: UserInfo, role: Role){
    if(role.getId() == user.getRole().getId()) return true;
    return false;
  }

  saveRoles() {
    this.adminService.saveUserRoles(this.users).then(res => {
      this.adminService.getUserInfo().then(result => {
        this.users = result;
      });
    });
  }
  
}
