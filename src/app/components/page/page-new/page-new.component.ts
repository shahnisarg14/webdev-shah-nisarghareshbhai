import {Component, OnInit} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
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
  errorFlag: boolean;
  errorMsg = 'Name field cannot be empty!';
  page: Page;
  pages: Page[];
  pageId: string;

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

  addPage(name, description) {
    if ((name === undefined) || (name === '')) {
      this.errorFlag = true;
      return;
    }
    const page = new Page('', name, this.websiteId, description);
    this.pageService.createPage(this.websiteId, page)
    .subscribe((page1) => {
          this.pages = page1;
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
      });
  }
}
