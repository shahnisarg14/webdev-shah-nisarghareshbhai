var Widget = require("../models/widget/widget.model.server");

module.exports = function(app) {

  var widgetModel = require('../models/widget/widget.model.server');
  var multer = require('multer');
  var upload = multer({ dest:__dirname + '/../../dist/assets/uploads'});
  var widgets = [
    new Widget("123", "HEADING", "321", 2, "null", "GIZMODO", "null"),
    new Widget("234", "HEADING", "321", 4, "null", "Lorem ipsum", "null"),
    new Widget("345", "IMAGE", "321", "null", "100%", "null", "http://lorempixel.com/400/200/"),
    new Widget("456", "HTML", "321", "null", "null", "<p>Lorem ipsum</p>", "null"),
    new Widget("567", "HEADING", "321", 4, "null", "Lorem ipsum", "null"),
    new Widget("678", "YOUTUBE", "321", "null", "100%", "null", "https://www.youtube.com/embed/gWhqLVkjK50"),
    new Widget("789", "HTML", "321", "null", "null", "<p>Lorem ipsum</p>", "null")
  ];

  app.post("/api/page/:pid/widget", createWidget);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.put("/api/widget/:wgid", updateWidget);
  app.delete("/api/widget/:wgid", deleteWidget);
  app.post("/api/upload", upload.single('myFile'), uploadImage);

  function createWidget(req, res) {
    const pageId = req.params['pid'];
    const widget = req.body;
    widget.pageId = pageId;
    delete widget._id;
    widgetModel
      .createWidget(widget)
      .then(function (widget1) {
        widgetModel
          .findAllWidgetsForPage(pageId)
          .then(function (widgets) {
            res.json(widgets);
          }, function (error) {
            console.log(error);
          });
      }, function (error) {
        console.log(error);
      });
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pid'];
    widgetModel
      .findAllWidgetsForPage(pageId)
      .then(function(widgets) {
        res.json(widgets);
      }, function(error) {
        console.log(error);
      });
  }
  function findWidgetById(req, res) {
    var widgetId = req.params['wgid'];
    widgetModel
      .findWidgetById(widgetId)
      .then(function(widget) {
        res.json(widget);
      });
  }
  function updateWidget(req, res) {
    var widgetId = req.params['wgid'];
    var widget = req.body;
    widgetModel
      .updateWidget(widgetId, widget)
      .then(function(status) {
        res.send(status);
      });
  }
  function deleteWidget(req, res) {
    var pageId = req.params['pid'];
    var widgetId = req.params['wgid'];
    widgetModel
      .deleteWidget(widgetId)
      .then(function(status) {
        res.send(status);
        widgetModel
          .findAllWidgetsForPage(pageId)
          .then(function(widgets) {
            res.json(widgets);
          }, function(error) {
            console.log(error);
          });
      });
  }
  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var name = req.body.name;
    var myFile = req.file;
    var text = req.body.text;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var filename = myFile.filename;

    var widget = {
      '_id': widgetId,
      'widgetType': 'IMAGE',
      'pageId': pageId,
      'width': width,
      'name': name,
      'text': text
    };
    widget['url'] = '/assets/uploads/'+filename;
    delete widget._id;
    widgetModel
      .createWidget(widget)
      .then(function(newWidget) {
      });

    var callbackUrl = "/user/" + userId + "/website/" + websiteId + '/page/' + pageId + '/widget';
    res.redirect(callbackUrl);
  }
};
