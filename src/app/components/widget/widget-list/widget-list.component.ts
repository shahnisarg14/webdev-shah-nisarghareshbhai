import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  website: Website;
  page: Page;
  constructor(private websiteService: WebsiteService,
              private widgetService: WidgetService,
              private route: ActivatedRoute,
              private pageService: PageService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });
  }
  fetchWidgets() {
    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.page = this.pageService.findPageById(this.pageId);
    const widgets: Widget[] = this.widgetService.findWidgetsByPageId(this.pageId);
    return widgets;
  }
  updateWidget(_id) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', _id]);
  }
}
