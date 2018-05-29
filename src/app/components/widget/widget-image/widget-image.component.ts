
import { Component, OnInit, ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{WidgetService} from "../../../../services/widget.service.client"
import{Widget} from "../../../../models/widget.model.client"
import{NgForm } from "@angular/forms";

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

	id:string;
	wid:string;
	pid:string;
	wgid:string;
	widget:Widget;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute
  	ActivatedRoute, private router: Router) { }

  ngOnInit() {

  	this.activatedRoute.params.subscribe(params=>{
  	this.uid = params['uid']
  		this.wid = params ['wid'];
  		this.pid = params['pid'];
  		this.wgid = params['wgid'];
  		this.widget = this.widgetService.findWidgetById(this.wgid);
});
  
  }
  remove() {}
update() {}
}
