import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  pageId: string;
  userId: string;
  websiteId: string;
  widgetId: string;
  widgetType: string;
  name: string;
  size: number;
  widget: Widget;
  text: string;
  url: string;
  width: string;
  baseUrl = environment.baseUrl;
  editFlag: boolean;
  widgets: Widget[];
  errorFlag: boolean;
  errorMsg = 'Name field cannot be empty!';

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
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe((widget) => {
          this.widget = widget;
          this.widgetType = widget.widgetType;
          this.size = widget.size;
          this.url = widget.url;
          this.text = widget.text;
          this.width = widget.width;
          this.editFlag = true;
        });
    });
  }

  createImage(text, width, url, name) {
    if ((name === undefined) || (name === '') || (name === null)) {
      this.errorFlag = true;
      return;
    }
    const widget = new Widget('', 'IMAGE', this.pageId, null, width, text, url, null, null, null);
    widget.text = text;
    widget.width = width;
    widget.url = url;
    this.widgetService
      .createWidget(this.pageId, widget)
      .subscribe((widgets) => {
        this.widgets = widgets;
        this.router.navigate(['/user', this.userId, 'website',
          this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
  updateImage(text, width, url) {
    const updatedImage = new Widget(this.widgetId, 'IMAGE', this.pageId, null, width, text, url, null, null, null);
    this.widgetService.updateWidget(this.widgetId, updatedImage)
      .subscribe((widget) => {
        this.widget = widget;
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

  deleteImage() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(() => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
