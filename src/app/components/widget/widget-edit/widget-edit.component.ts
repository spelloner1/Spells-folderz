import { Component, OnInit } from '@angular/core';
import { Widget } from '../../../models/widget.model.client';
import{WidgetService} from '../../../services/widget.service.client';
import{ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  constructor(private widgetService:WidgetService, private activatedRoute:ActivatedRoute) { }

  widget:Widget;
  wgid:string;

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params=> {		
  		this.wgid=params['wgid'];
  	  this.widgetService.findWidgetById(this.wgid).subscribe(
      (widget:Widget) => {
        this.widget = widget;

      }

      );

  	})
  }

}
