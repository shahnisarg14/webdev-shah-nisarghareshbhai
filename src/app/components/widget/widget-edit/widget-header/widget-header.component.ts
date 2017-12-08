import {Component, OnInit} from '@angular/core';
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
  widgetType: string;
  userId: string;
  websiteId: string;
  size: number;
  text: string;
  widget: Widget;
  errorFlag: boolean;
  errorMsg = '';
  editFlag: boolean;
  widgets: Widget[];

  constructor(private widgetService: WidgetService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.editFlag = false;
    });
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe((widget) => {
        this.widget = widget;
        this.widgetType = this.widget.widgetType;
        this.text = this.widget.text;
        this.size = this.widget.size;
        this.editFlag = true;
      });
  }

  updateHeader(text, size) {
    if (((size < 1) || (size > 6)) || (size === undefined) || (size === null) || (size === '')) {
      this.errorMsg = 'Size should be in between 1 to 6!';
      this.errorFlag = true;
      return;
    }
    if ((text === undefined) || (text === null) || (text === '')) {
      this.errorMsg = 'Text field should not be empty!';
      this.errorFlag = true;
      return;
    }
    const updatedHeader = new Widget(this.widgetId, 'HEADING', this.pageId, size, null, text, null, null, null, null);
    this.widgetService.updateWidget(this.widgetId, updatedHeader)
      .subscribe((widget) => {
        this.widget = widget;
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);

      });
  }

  deleteHeader(_id) {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(() => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

  createHeader(text, size) {
    if (((size < 1) || (size > 6)) || (size === undefined) || (size === null) || (size === '')) {
      this.errorMsg = 'Size should be in between 1 to 6!';
      this.errorFlag = true;
      return;
    }
    if ((text === undefined) || (text === null) || (text === '')) {
      this.errorMsg = 'Text field should not be empty!';
      this.errorFlag = true;
      return;
    }
    const widget = new Widget('', 'HEADING', this.pageId, size, null, text, null, null, null, null);
    this.widgetService
      .createWidget(this.pageId, widget)
      .subscribe((widgets) => {
        this.widgets = widgets;
        this.router.navigate(['/user', this.userId, 'website',
          this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
