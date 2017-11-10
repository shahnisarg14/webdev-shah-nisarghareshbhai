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
  pages: Page[];

  constructor(private pageService: PageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.pageService.findPageById(this.pageId)
        .subscribe((page) => {
          this.page = page;
          this.name = this.page.name;
          this.description = this.page.description;
        });
      this.pageService.findPagesByWebsiteId(this.websiteId)
        .subscribe((pages) => {
          this.pages = pages;
        });
    });
  }

  fetchPages() {
    return this.pages;
  }

  updatePage(name, description) {
    const page = new Page(this.pageId, name, this.websiteId, description);
    this.pageService.updatePage(this.pageId, page)
      .subscribe((page1) => {
        this.page = page1;
        this.name = this.page.name;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
      });
  }

  deletePage() {
    this.pageService.deletePage(this.pageId)
      .subscribe((pages) => {
        this.pages = pages;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
      });
  }
}
