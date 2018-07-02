import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Page } from '../../../models/page.model.client'
import { PageService } from '../../../services/page.service.client'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
	@ViewChild('f') pageForm: NgForm;

uid:string;
wid:string;
pid:string;
name:string;
description:string;
page:Page =  {
  // _id:  "",
  websiteId: "",
  name:"",
  description:""
};


  constructor(private pageService: PageService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  	this.activatedRouter.params.subscribe(params=>{
  		this.uid = params['uid'];
  		this.wid = params['wid'];
  		this.pid= params ['pid'];
  		this.pageService.findPageById(this.pid).subscribe(
        (page:Page) =>{
          this.page = page;
  		this.name= this.page.name;
  		this.description = this.page.description;
      // (page:Page) =>{

      }
      );
  });

}
update(){
this.name = this.pageForm.value.name;
this.description = this.pageForm.value.description;
	
  const updatedPage: Page = {
		_id: this.pid,
		name: this.name,
		description: this.description,
		websiteId: this.wid
	}
	this.pageService.updatePage(this.pid,updatedPage).subscribe(
    (page:Page) =>{
      this.router.navigate(['user', this.uid, 'website',this.wid,'page']);
    }

	);
}


remove(){
	this.pageService.deletePage(this.pid,).subscribe(
    (pages:Page[]) =>{
	this.router.navigate(['user', this.uid, 'website',this.wid,'page']);
}
);
}
}
