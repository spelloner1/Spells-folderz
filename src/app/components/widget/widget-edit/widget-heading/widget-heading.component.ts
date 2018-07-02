import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from '../../../../services/widget.service.client'
import { Widget } from '../../../../models/widget.model.client'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-heading',
  templateUrl: './widget-heading.component.html',
  styleUrls: ['./widget-heading.component.css']
})
export class WidgetHeadingComponent implements OnInit {
  @ViewChild ('f') widgetForm:NgForm;

  uid:string;
  wid:string;
  pid:string;
  wgid:string;
  widget:Widget={
    // _id:'',
    widgetType:'',
    pageId:''
  };
  name:string;
  text:string;
  size:number;


  constructor(private widgetService:WidgetService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
      this.uid=params['uid'];
      this.uid=params['wid'];
      this.uid=params['pid'];
      this.uid=params['wgid'];
      this.widgetService.findWidgetById(this.wgid).subscribe(
        (widget:Widget) => {
          this.widget = widget;
        }

        );
      });
  }

  update(){
    this.name = this.widgetForm.value.name;
    this.text = this.widgetForm.value.text;
    this.size = this.widgetForm.value.size;
  
    const updatedWidget:Widget = {
      _id: this.wgid,
      name: this.name,
      widgetType: this.widget.widgetType,
      pageId: this.pid,
      size: this.size,
      text: this.text
    }

    this.widgetService.updateWidget(this.wgid, updatedWidget).subscribe(
      (widget:Widget) =>{
        this.router.navigate(['user', this.uid,'website', this.wid, 'page', this.pid, 'widget']);

      }
      );
    // this.router.navigate(['user', this.uid,'website', this.wid, 'page', this.pid, 'widget']);
  
}
remove(){
  this.widgetService.deleteWidget(this.wgid).subscribe(
    (widgets:Widget[]) => {
      this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    }
    );
  // this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
}

}