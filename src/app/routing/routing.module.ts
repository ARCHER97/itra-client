import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from '../components/profile/profile.component';
import { ProfileViewComponent } from '../components/profile-view/profile-view.component';
import { ImageComponent } from '../components/image/image.component';
import { HomeComponent } from '../components/home/home.component';
import { AdministrationComponent } from '../components/administration/administration.component';
import { RegistrationComponent } from '../components/registration/registration.component';

import { AuthGuard } from '../services/auth-guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'image', component: ImageComponent },
  { path: 'profile-admin', component: ProfileComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'admin', component: AdministrationComponent, canActivate: [AuthGuard] },
  { path: 'login', component: RegistrationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
