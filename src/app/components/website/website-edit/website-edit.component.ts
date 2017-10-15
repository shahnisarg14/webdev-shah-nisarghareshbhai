import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: string;
  websiteId: string;
  website: Website;
  name: string;
  description: string;
  constructor(private websiteService: WebsiteService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
    });
      this.website = this.websiteService.findWebsiteById(this.websiteId);
      this.name = this.website.name;
      this.description = this.website.description;
  }

  fetchWebsites() {
    const websites: Website[] = this.websiteService.findWebsitesByUser(this.userId);
    return websites;
  }
  updateWebsite(name, description) {
    const website = new Website(this.websiteId, name, this.userId, description);
    if (this.websiteService.updateWebsite(this.websiteId, website)) {
      this.router.navigate(['/user', this.userId, 'website']);
    }
  }
  deleteWebsite() {
    if (this.websiteService.deleteWebsite(this.websiteId)) {
      this.router.navigate(['/user', this.userId, 'website']);
    }
  }
}
