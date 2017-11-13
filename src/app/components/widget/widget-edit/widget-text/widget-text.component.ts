import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget: Widget;
  widgetType: string;
  text: string;
  name: string
  editFlag: boolean;
  widgets: Widget[];
  formatted: boolean;
  placeholder: string;
  rows: number;

  constructor(private widgetService: WidgetService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.editFlag = false;
    });
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe((widget) => {
        this.widget = widget;
        this.widgetType = this.widget.widgetType;
        this.text = this.widget.text;
        this.editFlag = true;
      });
  }
  updateText(rows, placeholder, text, formatted) {
    const updatedHTML = new Widget(this.widgetId, 'TEXT', this.pageId, null, null, text, null, rows, placeholder, formatted);
    this.widgetService.updateWidget(this.widgetId, updatedHTML)
      .subscribe((widget) => {
        this.widget = widget;
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);

      });
  }

  createText(rows, placeholder, text, formatted) {
    const widget = new Widget('', 'TEXT', this.pageId, null, null, text, null, rows, placeholder, formatted);
    this.widgetService
      .createWidget(this.pageId, widget)
      .subscribe((widgets) => {
        this.widgets = widgets;
        this.router.navigate(['/user', this.userId, 'website',
          this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
  deleteText() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(() => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
