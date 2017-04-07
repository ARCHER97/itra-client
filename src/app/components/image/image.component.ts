import { Component, OnInit } from '@angular/core';

import { selectedObjects } from '../../global/selected-objects';
import { Image } from '../../model/image'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit{
  selectedObjects;
  constructor(){      
  }

  ngOnInit(){
    this.selectedObjects = selectedObjects   
    console.log("im: "+this.selectedObjects.image.getUrl())
  }

  public x: number = 5;
}
