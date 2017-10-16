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

  constructor() {
  }

  widgets: Widget[] = [
    new Widget('123', 'HEADING', '321', 2, 'null', 'GIZMODO', 'null'),
    new Widget('234', 'HEADING', '321', 4, 'null', 'Lorem ipsum', 'null'),
    new Widget('345', 'IMAGE', '321', 'null', '100%', 'null', 'http://lorempixel.com/400/200/'),
    new Widget('456', 'HTML', '321', 'null', 'null', '<p>Lorem ipsum</p>', 'null'),
    new Widget('567', 'HEADING', '321', 4, 'null', 'Lorem ipsum', 'null'),
    new Widget('678', 'YOUTUBE', '321', 'null', '100%', 'null', 'https://www.youtube.com/embed/gWhqLVkjK50'),
    new Widget('789', 'HTML', '321', 'null', 'null', '<p>Lorem ipsum</p>', 'null')
  ];

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };

  createWidget(pageId, widget) {
    widget._id = (Math.floor((Math.random() * 2001) + 2000)).toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId) {
    const list: Widget[] = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        list.push(this.widgets[x]);
      }
    }
    return list;
  }

  findWidgetById(widgetId) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {  return this.widgets[x]; }
    }
  }

  updateWidget(widgetId, widget) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets[x] = widget;
        return true;
      }
    }
    return false;
  }

  deleteWidget(widgetId) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets.splice(x, 1);
        return true;
      }
    }
    return false;
  }
}

