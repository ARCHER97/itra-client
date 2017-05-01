import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RlTagInputModule } from 'angular2-tag-input';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { DndModule } from 'ng2-dnd';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { RatingModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { SerachComponent } from './components/serach/serach.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileViewComponent } from './components/profile/profile-view/profile-view.component';
import { ProfileAdminComponent } from './components/profile/profile-admin/profile-admin.component';
import { AdminkaComponent } from './components/adminka/adminka.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SingupComponent } from './components/auth/singup/singup.component';
import { AuthComponent } from './components/auth/auth/auth.component';

import { AuthService } from './services/auth.service';
import { ProfilePreviewService } from './services/profile-preview.service';
import { ProfileService } from './services/profile.service';
import { ImageService } from './services/image.service';
import { TagsService } from './services/tags.service';
import { AdminService } from './services/admin.service';
import { SexService } from './services/sex.service';
import { TypeOfPhotoService } from './services/type-of-photo.service';
import { CommentService } from './services/comment.service';
import { RatingService } from './services/rating.service';
import { PornoRecognitionService } from './services/porno-recognition.service';
import { LocalizationService } from './services/localization.service';
import { RoleService } from './services/role.service';

import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileListComponent,
    SerachComponent,
    PageNotFoundComponent,
    SettingsComponent,
    ProfileViewComponent,
    ProfileAdminComponent,
    AdminkaComponent,
    LoginComponent,
    SingupComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    RlTagInputModule,
    DndModule.forRoot(),
    TagCloudModule,
    FileUploadModule,
    Ng2CloudinaryModule,
    RatingModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    AuthService,
    ProfilePreviewService,
    ProfileService,
    ImageService,
    TagsService,
    AdminService,
    SexService,
    TypeOfPhotoService,
    CommentService,
    RatingService,
    PornoRecognitionService,
    LocalizationService,
    RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
