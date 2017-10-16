export class Widget {
  _id: string;
  widgetType: string;
  pageId: string;
  size: number;
  width: string;
  text: string;
  url: string;
  constructor(_id, widgetType, pageId, size, width, text, url) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.width = width;
    this.text = text;
    this.url = url;
  }
}
