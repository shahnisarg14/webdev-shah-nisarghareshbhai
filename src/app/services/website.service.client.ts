import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';
import { Website } from '../models/website.model.client';
import {getContentOfKeyLiteral} from '@angular/cli/lib/ast-tools';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor(private http: Http) {
  }
  baseUrl = environment.baseUrl;

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findAllWebsitesForUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  createWebsite(userId: string, website: Website) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  findAllWebsitesForUser(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsiteById(websiteId: string) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWebsite(websiteId: string, website: Website) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    const updatedWebsite = new Website(websiteId, website.name, website.developerId, website.description);
    return this.http.put(url, updatedWebsite)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWebsite(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}

