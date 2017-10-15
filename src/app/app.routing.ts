/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {LoginComponent} from './components/user/login/login.component';
import {AppComponent} from './app.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:uid', component: ProfileComponent},
  {path: 'user/:uid/website', component: WebsiteListComponent},
  {path: 'user/:uid/website/:wid', component: WebsiteEditComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
