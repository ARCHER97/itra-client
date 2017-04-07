import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from '../components/profile/profile.component'
import { ImageComponent } from '../components/image/image.component';
import { HomeComponent } from '../components/home/home.component';
import { AdministrationComponent } from '../components/administration/administration.component';
import { RegistrationComponent } from '../components/registration/registration.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',      component: HomeComponent },
  { path: 'image', component: ImageComponent },
  { path: 'profile',      component: ProfileComponent },
  { path: 'admin',      component: AdministrationComponent },
  { path: 'reg',      component: RegistrationComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
