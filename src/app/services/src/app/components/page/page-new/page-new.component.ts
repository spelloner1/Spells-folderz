import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/core';
import { Page } from '../../../model/page.model.client';
import {PageService} from '../../../services/page.service.client'
import{ NgForm} from '@angular/forms'

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

	@ViewChild('f') pageForm:NgForm
	uid:string;
	wid:string;
	name:string;
	description:string;

  constructor(private pageService: PageService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  		this.activatedRoute.params.subscribe(params=>{
  		this.uid = params['uid'];
  		this.wid = [params['wid'];
  		

  	});

  	}
  	create(){
  		this.name = this.pageForm.value.name;
  		this.description = this.pageForm.value.description;
  		

  		const newPage: Page = {
  			_id:" ",
		name:this.name,
		websiteId:this.wid,
		description:this.description
		}
  		this.pageService.createPage(this.wid,newPage);
  		this.router.navigate(['user,' this.uid, 'website',this.wid,'page']);
  		'user/:uid/website/:wid/page' 

  	}

}
