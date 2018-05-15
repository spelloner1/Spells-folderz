import { Injectable } from '@angular/core';

@Injectable()

export class PageService {

  constructor() { }

 pages =[

  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
];

createPage(userId,page){
	page._id = Math.floor(Math.random() * 10000).toString();
	page.websiteId = websiteId;
	this.pages.push(page);
	return page;
}

findPageByWebsiteId(websiteId){

let result = [];
for(let i= 0;i<this.pages.length;i++){
if(this.pages[i]._id === pagesId){
return this.push(this.websites[i]);
}

}
return result;
}