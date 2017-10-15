import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
userId: string;
name: string;
description: string;
  constructor(private websiteService: WebsiteService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
    });
  }
  fetchWebsites() {
    const websites: Website[] = this.websiteService.findWebsitesByUser(this.userId);
    return websites;
  }
  addWebsite(name, description) {
    let website = new Website('', name, this.userId, description);
    website = this.websiteService.createWebsite(this.userId, website);
    if (website) {
      this.router.navigate(['/user', this.userId, 'website']);
    }
  }
}
