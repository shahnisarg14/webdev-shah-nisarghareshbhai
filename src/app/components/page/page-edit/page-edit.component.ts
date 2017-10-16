import {Component, OnInit} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  userId: string
  websiteId: string;
  pageId: string;
  page: Page;
  name: string;
  description: string;

  constructor(private pageService: PageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.page = this.pageService.findPageById(this.pageId);
      this.name = this.page.name;
      this.description = this.page.description;
    });
  }

  fetchPages() {
    const pages: Page[] = this.pageService.findPagesByWebsiteId(this.websiteId);
    return pages;
  }

  updatePage(name, description) {
    const page = new Page(this.pageId, name, this.websiteId, description);
    if (this.pageService.updatePage(this.pageId, page)) {
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    }
  }

  deletePage() {
    if (this.pageService.deletePage(this.pageId)) {
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    }
  }
}
