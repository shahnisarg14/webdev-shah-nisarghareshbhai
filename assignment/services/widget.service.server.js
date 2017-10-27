var Widget = require("../models/widget.model.server");

module.exports = function(app) {
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
    const widget = req.body;
    const newWidget = new Widget(widget._id, widget.widgetType, widget.pageId, widget.size, widget.width, widget.text,
      widget.url);
    widgets.push(newWidget);
    res.json(newWidget);
  }
  function findAllWidgetsForPage(req, res) {
    const pageId = req.params["pid"];
    const list = [];
    for (var x = 0; x < widgets.length; x++) {
      if (widgets[x].pageId === pageId) {
        list.push(widgets[x]);
      }
    }
    res.json(list);
  }
  function findWidgetById(req, res) {
    const widgetId = req.params["wgid"];
    const widget = widgets.find(function (widget) {
      return widget._id === widgetId
    });
    res.json(widget);
  }
  function updateWidget(req, res) {
    const widgetId = req.params["wgid"];
    const updatedWidget = req.body;
    for (var x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        widgets[x] = updatedWidget;
        res.json(widgets);
        return;
      }
    }
  }
  function deleteWidget(req, res) {
    const widgetId = req.params["wgid"];
    for (var x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        widgets.splice(x, 1);
        res.json(widgets);
        return;
      }
    }
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
