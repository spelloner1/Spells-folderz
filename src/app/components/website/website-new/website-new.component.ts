import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

	uid:string;
	websites:Website[];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params =>{
  		this.uid = params['uid'];
  		this.websites = this.websiteService.findWebsitesByUser(this.uid);
  		
  	})	
  }
  create(){
  	this.name = this.websiteForm.value.name;
  	this.description = this.websiteForm.value.description;

  }
}
