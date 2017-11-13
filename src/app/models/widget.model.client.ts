export class Widget {
  _id: string;
  widgetType: string;
  pageId: string;
  size: number;
  width: string;
  text: string;
  url: string;
  rows: number;
  placeholder: string;
  formatted: boolean;
  constructor(_id, widgetType, pageId, size, width, text, url, rows, placeholder, formatted) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.width = width;
    this.text = text;
    this.url = url;
    this.rows = rows;
    this.placeholder = placeholder;
    this.formatted = formatted;
  }
}
