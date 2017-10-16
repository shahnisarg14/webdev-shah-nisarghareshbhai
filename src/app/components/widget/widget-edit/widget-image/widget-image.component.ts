import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

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
  name: string;
  size: number;
  widget: Widget;
  text: string;
  url: string;
  width: string;

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
      this.widget = this.widgetService.findWidgetById(this.widgetId);
      this.size = this.widget.size;
      this.url = this.widget.url;
      this.text = this.widget.text;
      this.width = this.widget.width;
    });
  }

  updateImage(text, width, url) {
    this.widgetService.updateWidget(this.widgetId,
      new Widget(this.widgetId, 'IMAGE', this.pageId, null, width, text, url));
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);

  }

  deleteImage(_id) {
    this.widgetService.deleteWidget(_id);
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
}
