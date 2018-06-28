import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client'
import { ActivatedRoute,Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

	@ViewChild('f') websiteForm:NgForm;

	uid:string;
	websites:Website[];
	name:string;
	description:string;
	


  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params =>{
  		this.uid = params['uid'];
  		this.websiteService.findWebsitesByUser(this.uid).subscribe(
      (websites: Website[]) => {
       this.websites = websites;
      }
      );
      
    });
  		
  		
  }
  create(){
  	this.name = this.websiteForm.value.name;
  	this.description = this.websiteForm.value.description;
  	
    const newWebsite: Website={
  		// _id:"",
  		name: this.name,
  		developerId: this.uid,
  		description:this.description

  	};
  	this.websiteService.createWebsite(this.uid, newWebsite).subscribe(
     (wesite:Website) => {
       this.router.navigate(['user',this.uid,'website']);
    }
   
      );

  	// this.router.navigate(['user',this.uid,'website']);


  }
}
