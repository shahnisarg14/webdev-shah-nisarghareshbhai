import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widgetType: string;
  widget: Widget;
  widgets: Widget[];

  constructor(private widgetService: WidgetService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
    });
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe((widget) => {
        this.widget = widget;
        this.widgetType = this.widget.widgetType;
      });
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets) => {
        this.widgets = widgets;
      });
  }

}
