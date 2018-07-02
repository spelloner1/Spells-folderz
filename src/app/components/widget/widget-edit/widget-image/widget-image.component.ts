
import { Component, OnInit, ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{WidgetService} from "../../../../services/widget.service.client"
import{Widget} from "../../../../models/widget.model.client"
import{NgForm } from "@angular/forms";
import{environment} from '../../../../../environments/environment'

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;

	uid:string;
	wid:string;
	pid:string;
	wgid:string;
	widget:Widget= {
  // _id:'',
  widgetType:'',
  pageId:''
  };
  name:string;
  text:string;
  url:string;
  width:string;
  baseUrl:string;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute
  	, private router: Router) { }

  ngOnInit() {

  	this.activatedRoute.params.subscribe(params=>{
  	this.uid = params['uid']
  		this.wid = params ['wid'];
  		this.pid = params['pid'];
  		this.wgid = params['wgid'];
      this.baseUrl = environment.baseUrl;

  		this.widgetService.findWidgetById(this.wgid).subscribe(
        (widget:Widget) =>{
          this.widget = widget;
        }
    
    );

});
  
  }
  remove() {

  this.widgetService.deleteWidget(this.wgid).subscribe(
    (widgets:Widget[]) => {
      this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    }
    );
}

update() {

  this.name = this.widgetForm.value.name;
  this.text = this.widgetForm.value.text; 
  this.url = this.widgetForm.value.url;
  this.width = this.widgetForm.value.width;


const updatedWidget: Widget = {
  _id:this.wgid,
  name:this.name,
  text:this.text,
  url:this.url,
  width:this.width,
 pageId:this.pid,
 widgetType:this.widget.widgetType
}
this.widgetService.updateWidget(this.wgid, updatedWidget).subscribe(
    (widget:Widget) => {
      this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    }
    );
}

// this.widgetService.updateWidget(this.wgid,updatedWidget);
// this.router.navigate(['user',this.uid,'website', this.wid, 'page', this.pid, 'widget']);
}



