import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';
import { Widget } from '../models/widget.model.client';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;
  api = {
    'createWidget': this.createWidget,
    'findWidgetsByPageId': this.findWidgetsByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget
  };

  createWidget(pageId, widget) {
    widget._id = (Math.floor((Math.random() * 2001) + 2000)).toString();
    widget.pageId = pageId;
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWidgetsByPageId(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWidgetById(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWidget(widgetId, widget) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    const updatedWidget = new Widget(widgetId, widget.widgetType, widget.pageId, widget.size, widget.width,
      widget.text, widget.url);
    return this.http.put(url, updatedWidget)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWidget(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
