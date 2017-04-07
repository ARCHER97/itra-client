import { Component, OnInit } from '@angular/core';

import { User } from '../../model/user';
import { Image } from '../../model/image';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  users: Array<User>;
  images: Array<Image>;
  constructor() {
    this.users = new Array(); 
    this.users.push(new User(0,'user','Sasha',0,0,0));
    this.users.push(new User(1,'admin','Gray',0,0,0));
    this.images = new Array();
    this.images.push(new Image(1,0,'http://res.cloudinary.com/mycloudfortask5/image/upload/c_scale,w_600/HK9d09p_j8wmhw.jpg'));
    this.images.push(new Image(1,0,'http://res.cloudinary.com/mycloudfortask5/image/upload/c_scale,w_600/HK9d09p_j8wmhw.jpg'));
}

  ngOnInit() {
  }

}
