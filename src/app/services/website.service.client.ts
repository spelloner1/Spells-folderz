
import { Injectable } from '@angular/core';
import {Website} from '../models/website.model.client';
import { map } from "rxjs/operators";
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment'
@Injectable()

export class WebsiteService {

	baseUrl = environment.baseUrl;
  
  constructor(private http:Http) { }



//  websites: Website[] =[
  
//   { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
//   { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
//   { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
//   { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
//   { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
//   { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
//   { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
//   // new Website("789","Chess","234","Lorem")
// ];

 createWebsite(userId: string, website: Website){
 	const url = this.baseUrl + '/api/user/'+ userId + '/website';
 	return this.http.post(url,website).pipe(map(
 		(response: Response) => {
 			return response.json();

 		}
 		));
	// website._id = Math.floor(Math.random() * 10000).toString();
	// website.developerId = userId;
	// this.websites.push(website);
	// return website;
}
// createWebsite("555", {name: "newWeb", description: "a new website"});
// console.log(websites);

findWebsitesByUser(userId:string){
	const url = this.baseUrl + "/api/user/"+userId +"/website"
 	return this.http.get(url).pipe(map(
 		(response: Response) => {
 			return response.json();
}
));
}

// var result = [];
// for(let i= 0;i<this.websites.length;i++){
// if(this.websites[i].developerId === userId){
// result.push(this.websites[i]);
// }

// }
// return result;

findWebsiteById (websiteId: string){
	const url = this.baseUrl + "api/website/" + websiteId;
	return this.http.get(url).pipe(map(
 		(response: Response) => {
 			return response.json();
}
));
}
	// for(let i = 0;i<this.websites.length;i++){
	// 	if (this.websites[i]._id === websiteId){
	// 		return this.websites[i];
	// 	}
	// }


updateWebsite(websiteId: string,website:Website){

const url = this.baseUrl + "/api/website/" + websiteId;
	return this.http.put(url, website).pipe(map(
	 		(response: Response) => {
	 			return response.json();
}
));
}
	// var oldWeb = this.findWebsiteById(websiteId);
	// var index = this.websites.indexOf(oldWeb);
	// this.websites[index].name = website.name;
	// this.websites[index].description = website.description;
	// }

deleteWebsite(websiteId: string){

	const url = this.baseUrl + "/api/website/" + websiteId;
	return this.http.delete(url).pipe(map(
	 		(response: Response) => {
	 			return response.json();
	// var web = this.findWebsiteById(websiteId);
	// var index = this.websites.indexOf(web);
	// this.websites.splice(index,1);
}
));

}
}
