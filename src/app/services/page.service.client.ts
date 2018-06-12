import { Injectable } from '@angular/core';
import{Page} from '../models/page.model.client';
import { map } from "rxjs/operators";
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment'

@Injectable()

export class PageService {
	baseUrl = environment.baseUrl;

  constructor(private http:Http) { }

 pages= [

  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
]
// adds the page parameter instance to the local pages array. The new page's website is set to
createPage(websiteId: string,page :Page){
	const url = this.baseUrl + '/api/website/'+  websiteId +'/page';
	return this.http.post(url,page).pipe(map(
		(response:Response) => {
			return response.json();
		}
		))
}
// retrieves the pages in local pages array whose website matches the parameter websiteId

findPageByWebsiteId(websiteId: string){
const url = this.baseUrl + '/api/website/'+ websiteId +websiteId +'/page';
return this.http.get(url).pipe(map(
		(response:Response) => {
			return response.json();
		}
		))

}


// retrieves the page in local pages array whose _id matches the pageId parameter
findPageById(pageId : string){
	const url = this.baseUrl + '/api/page/'+ pageId;
return this.http.get(url).pipe(map(
		(response:Response) => {
			return response.json();
		}
		))

}


// updates the page in local pages array whose _id matches the pageId parameter
updatePage(pageId: string, page:Page) {

const url = this.baseUrl + '/api/page/'+ pageId;
return this.http.put(url,page).pipe(map(
(response:Response) => {
	return response.json();

	}	

	))

}
// removes the page from local pages array whose _id matches the pageId parameter
deletePage(pageId:string){
	const url = this.baseUrl + '/api/page/'+ pageId;
return this.http.delete(url).pipe(map(
(response:Response) => {
	return response.json();

	}	

	))


}
}



