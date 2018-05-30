import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../services/widget.service.client'
import { Widget } from '../../../models/widget.model.client'
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

	uid:string;
	wid:string;
	pid:string;
	widgets:Widgets[];

  constructor(private widgetService:WidgetService, 
    private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params =>){
  		this.uid = params ['uid'];
  		this.wid = params ['wid'];
  		this.pid = params ['pid'];
  		this.widgets = this.widgetService.findWidgetsByPageId(this.pid);


  	})
  }
  getYoutubeUrl(url){
    let embedUrl = "https://www.youtube.com/embed/";
    const parsedUrl = url.split('/');
    embedUrl += parsedUrl[parsedUrl.length -1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

}
