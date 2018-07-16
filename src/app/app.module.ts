import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule} from '@angular/forms'

import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WidgetChooseComponent } from './components/widget/widget-choose/widget-choose.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { WidgetHeadingComponent } from './components/widget/widget-edit/widget-heading/widget-heading.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';


import { Routing } from './app.routing';

import{UserService} from './services/user.service.client';
import{WebsiteService} from './services/website.service.client';
import{PageService} from './services/page.service.client';
import{WidgetService} from './services/widget.service.client';
import{FlickrService} from './services/flickr.service.client';
import{OmdbService} from './services/omdb.service.client';
import{SharedService} from './services/shared.service.client';






import { OmdbtestComponent } from './components/omdbtest/omdbtest.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    
    
    WidgetChooseComponent,
    WidgetEditComponent,
    WidgetListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetHeadingComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    OmdbtestComponent,
    FlickrImageSearchComponent
    
   
    
    
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule
  ],
  providers: [OmdbService,UserService,WebsiteService,PageService,WidgetService,FlickrService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
