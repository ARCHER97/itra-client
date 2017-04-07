import { Component } from '@angular/core';
import { globalSettings } from '../.././global/global-settings'
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent{
  constructor() { }

  selectRadio(val){
    globalSettings.activeView = val;
  }

  selectRadioImage(val){
    globalSettings.activeImagesView = val;
  }
}
