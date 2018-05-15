
import { Injectable } from '@angular/core';

@Injectable()

export class websiteService {

  constructor() { }

 websites =[
  
  { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
  { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
  { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
  { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
  { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
  { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
  { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
];

 createWebsite(userId,website){
	website._id = Math.floor(Math.random() * 10000).toString();
	website.developerId = userId;
	this.websites.push(website);
	return website;
}
// createWebsite("555", {name: "newWeb", description: "a new website"});
// console.log(websites);

findWebsitesByUser(userId){

var result = [];
for(let i= 0;i<this.websites.length;i++){
if(this.websites[i].developerId === userId){
result.push(this.websites[i]);
}

}
return result;
}
findWebsiteById (websiteId){
	for(let i = 0;i<this.websites.length;i++){
		if (this.websites[i]._id === websiteId){
			return this.websites[i];
		}
	}
}

updateWebsite(websiteId,website){
	var oldWeb = this.findWebsiteById(websiteId);
	var index = this.websites.indexOf(oldWeb);
	this.websites[index].name = website.name;
	this.websites[index].description = website.description;
	}

deleteWebsite(websiteId){
	var web = this.findWebsiteById(websiteId);
	var index = this.websites.indexOf(web);
	this.websites.splice(index,1);
}

}
