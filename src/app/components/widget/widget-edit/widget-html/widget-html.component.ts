import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
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
  errorMsg: string;
  errorFlag: boolean;

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
  updateHTML(text, name) {
    if ((text === undefined) || (text === null) || (text === '')) {
      this.errorMsg = 'Text field should not be empty!';
      this.errorFlag = true;
      return;
    }
    const updatedHTML = new Widget(this.widgetId, 'HTML', this.pageId, null, null, text, null, null, null, null);
    this.widgetService.updateWidget(this.widgetId, updatedHTML)
      .subscribe((widget) => {
        this.widget = widget;
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);

      });
  }

  createHTML(text, name) {
    if ((text === undefined) || (text === null) || (text === '')) {
      this.errorMsg = 'Text field should not be empty!';
      this.errorFlag = true;
      return;
    }
    const widget = new Widget('', 'HTML', this.pageId, null, null, text, null, null, null, null);
    this.widgetService
      .createWidget(this.pageId, widget)
      .subscribe((widgets) => {
        this.widgets = widgets;
        this.router.navigate(['/user', this.userId, 'website',
          this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
  deleteHTML() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(() => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
