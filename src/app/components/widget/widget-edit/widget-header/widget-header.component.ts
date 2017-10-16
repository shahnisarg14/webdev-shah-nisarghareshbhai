import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
pageId: string;
widgetId: string;
userId: string;
websiteId: string;
size: number;
text: string;
widget: Widget;
  constructor(private widgetService: WidgetService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.userId = params['uid'];
      this.websiteId = params['wid'];
    });
    this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.size = this.widget.size;
    this.text = this.widget.text;
  }
  updateHeader(text, size) {
    this.widgetService.updateWidget(this.widgetId,
      new Widget(this.widgetId, 'HEADING', this.pageId, size, '', text, null));
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
}
