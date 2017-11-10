var Page = require("../models/page/page.model.server");

module.exports = function(app) {

  var pageModel = require('../models/page/page.model.server');

  var pages = [
    new Page("321", "Post 1", "456", "Lorem"),
    new Page("432", "Post 2", "456", "Lorem"),
    new Page("543", "Post 3", "456", "Lorem")
  ];

  app.post("/api/website/:wid/page", createPage);
  app.get("/api/website/:wid/page", findAllPagesForWebsite);
  app.get("/api/page/:pid", findPageById);
  app.put("/api/page/:pid", updatePage);
  app.delete("/api/page/:pid", deletePage);

  function createPage(req, res) {
    var websiteId = req.params['wid'];
    const page = req.body;
    page.websiteId = websiteId;
    delete page._id;

    pageModel
      .createPage(page)
      .then(function(page) {
        pageModel
          .findAllPagesForWebsite(websiteId)
          .then(function(pages) {
            res.json(pages);
          });
      });
  }
  function findAllPagesForWebsite(req, res){
    var websiteId = req.params['wid'];
    pageModel
      .findAllPagesForWebsite(websiteId)
      .then(function(pages) {
        res.json(pages);
      });
  }
  function findPageById(req, res) {
    var pageId = req.params["pid"];
    var promise = pageModel
      .findPageById(pageId);
    promise.then(function(page) {
      res.json(page)
    });
  }

  function updatePage(req, res){
    var pageId = req.params['pid'];
    var newPage = req.body;

    pageModel.updatePage(pageId, newPage)
      .then(function (status) {
        res.send(status);
      });
  }
  function deletePage(req, res){
    var pageId = req.params['pid'];
    pageModel.deletePage(pageId)
      .then(function(status) {
        res.send(status);
      });
  }
}
