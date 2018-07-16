
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile.component"

import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WidgetChooseComponent } from './components/widget/widget-choose/widget-choose.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { OmdbtestComponent } from './components/omdbtest/omdbtest.component';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';


// Import all other components here 

const APP_ROUTES : Routes = [
  { path : '', component : LoginComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component:RegisterComponent },
  { path : 'user' , component: ProfileComponent},
  { path : 'user/:userId/website' , component: WebsiteListComponent},
  { path : 'user/:uid/website/new' , component: WebsiteNewComponent},
 { path : 'user/:uid/website/:wid' , component: WebsiteEditComponent},
 { path : 'user/:uid/website/:wid/page	' , component: PageListComponent},
 { path : 'user/:uid/website/:wid/page/new	' , component: PageNewComponent},
 { path : 'user/:uid/website/:wid/page/:pid	' , component: PageEditComponent},
 { path : 'user/:uid/website/:wid/page/:pid/widget	' , component: WidgetListComponent},
 { path : 'user/:uid/website/:wid/page/:pid/widget/new		' , component: WidgetChooseComponent},
 { path : 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component:FlickrImageSearchComponent},
 { path : 'omdb', component : OmdbtestComponent},
 { path	: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component:FlickrImageSearchComponent}
  // so on
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);


