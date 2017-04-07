import { Component } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor() { }

  options: CloudOptions = {
    width : 350,
    height : 300,
    overflow: false,
  }
 
  data: Array<CloudData> = [
    {text: 'sasha', weight: 3, link: 'https://google.com', color: '#ffaaee'},
    {text: 'gray', weight: 3, link: 'https://google.com'},

    {text: 'hohoho', weight: 3, link: 'https://google.com'},
    {text: 'Weight', weight: 3, link: 'https://google.com'},
    {text: '10', weight: 3, link: 'https://google.com'},
    {text: 'link', weight: 3, link: 'https://google.com'},
   ]

}
