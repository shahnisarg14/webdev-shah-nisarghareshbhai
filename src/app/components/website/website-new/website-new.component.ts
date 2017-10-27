import {Component, OnInit} from '@angular/core';
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
  errorFlag: boolean;
  errorMsg = 'Name field cannot be empty!';
  websites: Website[];

  constructor(private websiteService: WebsiteService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
    });
    this.websiteService.findAllWebsitesForUser(this.userId)
      .subscribe((websites) => {
        this.websites = websites;
      });
  }

  fetchWebsites() {
   return this.websites;
  }

  addWebsite(name, description) {
    if ((name === undefined) || (name === '')) {
      this.errorFlag = true;
      return;
    }
    const website = new Website('', name, this.userId, description);
    this.websiteService.createWebsite(this.userId, website)
      .subscribe((website1) => {
        if (website1) {
          this.router.navigate(['/user', this.userId, 'website']);
        }
      });
  }
}
