import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DndModule } from 'ng2-dnd';
import { RatingModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { SerachComponent } from './components/serach/serach.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileViewComponent } from './components/profile/profile-view/profile-view.component';
import { ProfileAdminComponent } from './components/profile/profile-admin/profile-admin.component';

import { AuthService } from './services/auth.service';
import { ProfilePreviewService } from './services/profile-preview.service';
import { ProfileService } from './services/profile.service';
import { ImageService } from './services/image.service';

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
    ProfileAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    DndModule.forRoot(),
    RatingModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [
    AuthService,
    ProfilePreviewService,
    ProfileService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
