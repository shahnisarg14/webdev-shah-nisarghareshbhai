import { Component, OnInit } from '@angular/core';
import { Page } from '../../../models/page.model.client';
import { PageService } from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  userId: string;
  name: string;
  description: string;
  websiteId: string;
  constructor(private pageService: PageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
    });
  }
  fetchPages() {
    const pages: Page[] = this.pageService.findPagesByWebsiteId(this.websiteId);
    return pages;
  }
  addPage(name, description) {
    let page = new Page('', name, this.websiteId, description);
    page = this.pageService.createPage(this.websiteId, page);
    if (page) {
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    }
  }
}
