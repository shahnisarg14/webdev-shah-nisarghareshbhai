import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {User} from '../../../models/user.model.client';

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
  websites: Website[];

  constructor(private websiteService: WebsiteService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.websiteService.findWebsiteById(this.websiteId)
        .subscribe((website) => {
          this.website = website;
          this.name = this.website.name;
          this.description = this.website.description;
        });
      this.websiteService.findAllWebsitesForUser(this.userId)
        .subscribe((websites) => {
          this.websites = websites;
        });
    });
  }

  fetchWebsites() {
    return this.websites;
  }

  updateWebsite(name, description) {
    const website = new Website(this.websiteId, name, this.userId, description);
    this.websiteService.updateWebsite(this.websiteId, website)
      .subscribe((website1) => {
        this.website = website1;
        this.name = this.website.name;
      });
    this.router.navigate(['user/', this.userId, 'website']);
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId)
      .subscribe((websites) => {
        this.websites = websites;
        this.router.navigate(['user', this.userId, 'website']);
      });
  }
}
