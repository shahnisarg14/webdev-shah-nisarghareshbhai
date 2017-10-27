import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})

export class WebsiteListComponent implements OnInit {
  userId: string;
  user: User;
  websiteId: string;
  websites: Website[];

  constructor(
    private websiteService: WebsiteService,
    private route: ActivatedRoute,
    private router: Router) { }

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
}
