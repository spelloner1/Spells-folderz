import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

	uid: string;
	websites: Website[];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
  	this.activatedRoute.params.subscribe(params =>{
  		this.uid = params['uid'];
  		this.websites = this.websiteService.findWebsitesByUser(this.uid);
  		
  	})
  }

}
