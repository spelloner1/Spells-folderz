import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-choose',
  templateUrl: './widget-choose.component.html',
  styleUrls: ['./widget-choose.component.css']
})
export class WidgetChooseComponent implements OnInit {

	uid:string;
	wid:string;
	pid:string;

  constructor(private activatedRoute: ActivatedRoute, private widgetService:WidgetService,private router:Router ) { }

  ngOnInit() {

  	this.activatedRoute.params.subscribe(params=> {
  		this.uid = params ['uid'];
  		this.wid = params['wid'];
  		this.pid = params['pid'];

  	})
  }
  

	create(type){
	const newWidget: Widget = {

  		_id:'',
  		widgetType:"type",
  		pageId: this.pid
  	}
  	this.widgetService.createWidget(this.pid, newWidget).subscribe(
      (widget:Widget) =>{
        
        this.router.navigate(['user',this.uid,'website',this.wid, 'page' this.pid, 'widget',widget._id]);

      }
      );
  	// const wgid = this.widgetService.widgets[this.
  	// widgetService.widgets.length -1]._id;
  	// this.router.navigate(['user',this.uid,'website', this.wid,
  	// 	'page',this.pid, 'widget',wgid]);	

	}
  }


