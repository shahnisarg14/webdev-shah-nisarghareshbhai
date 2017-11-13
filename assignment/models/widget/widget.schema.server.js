var mongoose = require('mongoose');
var WidgetSchema = mongoose.Schema ({
  pageId: String,
  widgetType: String,
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: String,
  class: String,
  icon: String,
  formatted: Boolean,
  dateCreated: {type: Date, default: Date.now()}
}, {collection: 'widget'});

module.exports = WidgetSchema;
