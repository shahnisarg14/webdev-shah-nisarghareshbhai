import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';

// injecting service into module
@Injectable()

export class PageService {

  constructor() {
  }

  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  ];

  api = {
    'createPage'   : this.createPage,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  createPage(websiteId, page) {
    const new_page = { _id: Math.random().toString(),
      name: page.name,
      websiteId: page.websiteId,
      description: page.description}
    this.pages.push(new_page);
    return new_page;
  }

  findPageByWebsiteId(websiteId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {  return this.pages[x]; }
    }
  }

  findPageById(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {  return this.pages[x]; }
    }
  }

  updatePage(pageId, page) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x] = page;
        return true;
      }
    }
    return false;
  }

  deletePage(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x, 1);
        return true;
      }
    }
    return false;
  }
}

