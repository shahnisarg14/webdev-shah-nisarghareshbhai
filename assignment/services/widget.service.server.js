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
    const pageId = request.params['pid'];
    const widget = req.body;
    widget.pageId = pageId;
    delete widget._id;
    widgetModel
      .createWidget(widget)
      .then(function (widget1) {
        widgetModel
          .findWidgetsByPageId(pageId)
          .then(function (widgets) {
            response.json(widgets);
          }, function (error) {
            console.log(error);
          });
      }, function (error) {
        console.log(error);
      });
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = request.params['pid'];
    widgetModel
      .findWidgetsByPageId(pageId)
      .then(function(widgets) {
        response.json(widgets);
      }, function(error) {
        console.log(error);
      });
  }
  function findWidgetById(req, res) {
    var widgetId = request.params['wgid'];
    widgetModel
      .findWidgetById(widgetId)
      .then(function(widget) {
        response.json(widget);
      });
  }
  function updateWidget(req, res) {
    var widgetId = request.params['wgid'];
    var widget = request.body;
    widgetModel
      .updateWidget(widgetId, widget)
      .then(function(status) {
        response.send(status);
      });
  }
  function deleteWidget(req, res) {
    var pageId = request.params['pid'];
    var widgetId = request.params['wgid'];
    widgetModel
      .deleteWidget(widgetId)
      .then(function(status) {
        response.send(status);
        widgetModel
          .findWidgetsByPageId(pageId)
          .then(function(widgets) {
            response.json(widgets);
          }, function(error) {
            console.log(error);
          });
      });
  }
  function uploadImage(req, res) {
    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    widget = getWidgetById(widgetId);
    widget.url = '/assets/uploads/'+filename;

    var callbackUrl   = "/user/"+userId+"/website/"+websiteId+ '/page/' + pageId + '/widget';
    res.redirect(callbackUrl);

  }
  function getWidgetById(widgetId) {
    for (var x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        return widgets[x];
      }
    }
  }
};
