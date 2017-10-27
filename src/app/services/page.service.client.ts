import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { Page } from '../models/page.model.client';

// injecting service into module
@Injectable()

export class PageService {

  constructor(private http: Http) {
  }
  baseUrl = environment.baseUrl;
  api = {
    'createPage'   : this.createPage,
    'findPagesByWebsiteId' : this.findPagesByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  createPage(websiteId, page) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    const newPage = { _id: (Math.floor((Math.random() * 3001) + 3000)).toString(),
      name: page.name,
      websiteId: websiteId,
      description: page.description}
    return this.http.post(url, newPage)
      .map((response: Response) => {
        return response.json();
      });
  }

  findPagesByWebsiteId(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findPageById(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updatePage(pageId, page) {
    const url = this.baseUrl + '/api/page/' + pageId;
    const updatedPage = new Page(pageId, page.name, page.websiteId, page.description);
    return this.http.put(url, updatedPage)
      .map((response: Response) => {
        return response.json();
      });
  }

  deletePage(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}

