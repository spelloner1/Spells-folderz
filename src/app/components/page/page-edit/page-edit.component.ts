import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
	@ViewChild('f') pageForm: NgForm

uid:string;
wid:string;
pid:string;
name:string;
description:string;
page:Page;


  constructor(private pageService: PageService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  	this.activatedRoute.params.subscribe(params=>{
  		this.uid = params['uid'];
  		this.wid = params['wid'];
  		this.pid= params ['pid'];
  		this.page = this.pageService.findPageById(this.pid);
  		this.name= this.page.name;
  		this.description = this.page.description;
  });

}
update(){
this.name = this.pageForm.value.name;
this.description = this.pageForm.value.description
	const updatedPage: Page = {
		_id: this.pid,
		name: this.name,
		description: this.description,
		websiteId: this.wid
	}
	this.pageService.updatePage(this.pid,updatedPage);
	this.router.navigate([this.router.navigate(['user,' this.uid, 'website',this.wid,'page']);
}


remove(){
	this.pageService.deletePage(this.pid,);
	this.router.navigate([this.router.navigate(['user,' this.uid, 'website',this.wid,'page']);
}
}
