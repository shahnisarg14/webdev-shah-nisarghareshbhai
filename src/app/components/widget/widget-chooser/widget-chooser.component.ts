import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  widget: Widget;
  widgetType: string;
  widgetId: string;

  constructor(private widgetService: WidgetService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });
  }

  createWidget(type) {
    this.widgetType = type;
    const newWidget = new Widget(null, this.widgetType, this.pageId, null, null, null, null);
    this.widgetService.createWidget(this.pageId, newWidget)
      .subscribe((widget) => {
        this.widget = widget;
        this.widgetId = this.widget._id;
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);
      });
  }

}
