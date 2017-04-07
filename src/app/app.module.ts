import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { MaterialModule } from '@angular/material';
import { MaterializeModule } from 'ng2-materialize';
import { RoutingModule } from './routing/routing.module';
import 'hammerjs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DndModule } from 'ng2-dnd';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { RatingModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { SettingComponent } from './components/setting/setting.component';
import { ImageComponent } from './components/image/image.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { HomeListComponent } from './components/home-list/home-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    RegistrationComponent,
    AdministrationComponent,
    SettingComponent,
    ImageComponent,
    SearchComponent,
    HomeComponent,
    RightMenuComponent,
    HomeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule.forRoot(),
    MaterialModule,
    RoutingModule,
    BsDropdownModule.forRoot(),
    DndModule.forRoot(),
    MaterializeModule.forRoot(),
    TagCloudModule,
    Ng2AutoCompleteModule,
    RatingModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
