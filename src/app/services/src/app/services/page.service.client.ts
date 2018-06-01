import { Injectable } from '@angular/core';
import{Page} from '../models/page.model.client';

@Injectable()

export class PageService {

  constructor() { }

 pages= [

  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
]
// adds the page parameter instance to the local pages array. The new page's website is set to
createPage(websiteId: string,page :Page){
	page._id = Math.floor(Math.random() * 10000).toString();
	page.websiteId = websiteId;
	this.pages.push(page);
	return page;
}
// retrieves the pages in local pages array whose website matches the parameter websiteId

findPageByWebsiteId(websiteId: string){
let result= [];
for(let i=0;i< this.pages.length;i++){
if(this.pages[i].websiteId === websiteId){
	result.push(this.pages[i]);
}	

}

return result;

}
// retrieves the page in local pages array whose _id matches the pageId parameter
findPageById(pageId : string){
	for(let i=0;i<this.pages.length;i++){
	if(this.pages[i]._id === pageId){
		return this.pages[i];
	}	
	}
}


// updates the page in local pages array whose _id matches the pageId parameter
updatePage(pageId: string, page:Page){

let oldPage = this.findPageById(pageId);
const index = this.pages.indexOf(oldPage);
this.pages[index].name = page.name;
this.pages[index].description = page.description; 	
}
// removes the page from local pages array whose _id matches the pageId parameter
deletePage(pageId:string){
	let oldPage = this.findPageById(pageId);
	const index = this.pages.indexOf(oldPage);
	this.pages.splice(index, 1);
}


}


