import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileListComponent } from '../components/profile-list/profile-list.component';
import { SerachComponent } from '../components/serach/serach.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { ProfileViewComponent } from '../components/profile/profile-view/profile-view.component';
import { ProfileAdminComponent } from '../components/profile/profile-admin/profile-admin.component';
import { AdminkaComponent } from '../components/adminka/adminka.component';
import { AuthComponent } from '../components/auth/auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/profiles-preview', pathMatch: 'full' },
  { path: 'profiles-preview', component: ProfileListComponent },
  { path: 'search/:value', component: SerachComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile/:id', component: ProfileViewComponent },
  { path: 'admin/profile/:id', component: ProfileAdminComponent },
  { path: 'adminka', component: AdminkaComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'notfound', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }