import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WidgetService} from "../../../../services/widget.service.client";
import {Widget} from "../../../../models/widget.model.client";

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widgetType: string;
  size: number;
  widget: Widget;
  url: string;
  width: string;
  text: string;

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
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe((widget) => {
          this.widget = widget;
          this.size = this.widget.size;
          this.url = this.widget.url;
          this.text = this.widget.text;
          this.width = this.widget.width;
        });
    });
  }

  updateYoutube(text, url, width) {
    const updatedYoutube = new Widget(this.widgetId, 'YOUTUBE', this.pageId, null, width, text, url);
    this.widgetService.updateWidget(this.widgetId, updatedYoutube)
      .subscribe((widget) => {
        this.widget = widget;
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);

      });
  }

  deleteYoutube(_id) {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(() => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
