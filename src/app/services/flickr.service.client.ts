import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable();

export class FlickrService {

key = "b77316078e00978c83e7f29fda3fc344";
secret = "c9b5de8575ea5811";
urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

constructor(private _http: Http) {}

searchPhotos(searchTerm: any) {
 const url = this.urlBase.replace('API_KEY', this.key).replace('TEXT', searchTerm);

 return this._http.get(url);

}

selectPhoto(pic){
	console.log

 }
}

// b77316078e00978c83e7f29fda3fc344

// Secret:
// c9b5de8575ea5811